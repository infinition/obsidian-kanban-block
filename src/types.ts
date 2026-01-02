export type TodoState = 'todo' | 'in-progress' | 'done';

export interface TodoItem {
	id: string;
	text: string;
	state: TodoState;
	originalMarker: string; // Original checkbox character (space, x, /, ?, etc.)
	children: string[]; // Indented lines that belong to this item
}

export interface ParseResult {
	items: TodoItem[];
	ignoredLines: string[]; // Non-checkbox lines that couldn't be parsed
}

export interface KanbanColumn {
	state: TodoState;
	title: string;
	items: TodoItem[];
}
