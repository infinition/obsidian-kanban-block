import { TodoItem, TodoState, ParseResult } from './types';

// Match any single character in checkbox
const TODO_REGEX = /^(-\s*\[(.)\]\s*)(.*)$/;

function markerToState(marker: string): TodoState {
	switch (marker) {
		case 'x': return 'done';
		case '/': return 'in-progress';
		default: return 'todo'; // space, ?, !, etc. all go to todo
	}
}

function stateToMarker(state: TodoState): string {
	switch (state) {
		case 'done': return 'x';
		case 'in-progress': return '/';
		default: return ' ';
	}
}

function getIndentLevel(line: string): number {
	const match = line.match(/^(\s*)/);
	return match ? match[1]!.length : 0;
}

function stripCommonIndent(lines: string[]): string[] {
	const nonEmptyLines = lines.filter(line => line.trim() !== '');
	if (nonEmptyLines.length === 0) return lines;

	const minIndent = Math.min(...nonEmptyLines.map(getIndentLevel));
	if (minIndent === 0) return lines;

	return lines.map(line => line.slice(minIndent));
}

export function parseTodoBlock(source: string): ParseResult {
	const rawLines = source.split('\n');
	const lines = stripCommonIndent(rawLines);
	const items: TodoItem[] = [];
	const ignoredLines: string[] = [];
	let currentItem: TodoItem | null = null;
	let baseIndent = 0;

	for (const line of lines) {
		const indent = getIndentLevel(line);
		const match = line.match(TODO_REGEX);

		if (match && indent === 0) {
			// Top-level todo item
			const marker = match[2];
			const text = match[3]?.trim() ?? '';
			if (marker !== undefined) {
				currentItem = {
					id: crypto.randomUUID(),
					text,
					state: markerToState(marker),
					originalMarker: marker,
					children: [],
				};
				baseIndent = 0;
				items.push(currentItem);
			}
		} else if (currentItem && indent > baseIndent && line.trim() !== '') {
			// Indented content belongs to current item
			currentItem.children.push(line);
		} else if (line.trim() !== '') {
			// Non-checkbox line at top level - track it
			ignoredLines.push(line);
			currentItem = null; // Reset so subsequent indented lines don't attach
		}
	}

	return { items, ignoredLines };
}

export function itemToMarkdown(item: TodoItem): string {
	// Use original marker if state matches, otherwise use new state's marker
	const expectedState = markerToState(item.originalMarker);
	const marker = (item.state === expectedState) ? item.originalMarker : stateToMarker(item.state);

	const mainLine = `- [${marker}] ${item.text}`;
	if (item.children.length === 0) {
		return mainLine;
	}
	return mainLine + '\n' + item.children.join('\n');
}

export function itemsToMarkdown(items: TodoItem[], ignoredLines: string[] = []): string {
	const todoMarkdown = items.map(itemToMarkdown).join('\n');
	if (ignoredLines.length === 0) {
		return todoMarkdown;
	}
	return ignoredLines.join('\n') + '\n' + todoMarkdown;
}
