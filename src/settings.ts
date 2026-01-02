import { App, PluginSettingTab, Setting } from 'obsidian';
import type KanbanBlockPlugin from './main';

export interface KanbanBlockSettings {
	columnNames: {
		todo: string;
		inProgress: string;
		done: string;
	};
}

export const DEFAULT_SETTINGS: KanbanBlockSettings = {
	columnNames: {
		todo: 'To Do',
		inProgress: 'In Progress',
		done: 'Done',
	},
};

export class KanbanBlockSettingTab extends PluginSettingTab {
	plugin: KanbanBlockPlugin;

	constructor(app: App, plugin: KanbanBlockPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h3', { text: 'Column Names' });

		new Setting(containerEl)
			.setName('To Do column')
			.setDesc('Name for the first column ([ ] items)')
			.addText(text => text
				.setPlaceholder('To Do')
				.setValue(this.plugin.settings.columnNames.todo)
				.onChange(async (value) => {
					this.plugin.settings.columnNames.todo = value || 'To Do';
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('In Progress column')
			.setDesc('Name for the middle column ([/] items)')
			.addText(text => text
				.setPlaceholder('In Progress')
				.setValue(this.plugin.settings.columnNames.inProgress)
				.onChange(async (value) => {
					this.plugin.settings.columnNames.inProgress = value || 'In Progress';
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Done column')
			.setDesc('Name for the last column ([x] items)')
			.addText(text => text
				.setPlaceholder('Done')
				.setValue(this.plugin.settings.columnNames.done)
				.onChange(async (value) => {
					this.plugin.settings.columnNames.done = value || 'Done';
					await this.plugin.saveSettings();
				}));
	}
}
