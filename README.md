# Obsidian Kanban Block

A powerful and interactive Kanban board for Obsidian that renders standard markdown checkboxes as a visual board.

![Video](video.gif)

## Usage

Simply create a `todo` code block with checkbox items:

~~~markdown
```todo
- [ ] Review [[Design Doc]] with team #planning
- [ ] Write unit tests for `auth.ts`
- [/] Meet with the team
- [x] Set up CI/CD pipeline
- [x] Code review for [[PR-123]]
- [x] Refactor database queries #backend
```
~~~

### Syntax Mapping

- `[ ]` → **To Do**
- `[/]` → **In Progress**
- `[x]` → **Done**

## Key Features

### 📋 Interactive Board
- **Drag and Drop**: Move cards between columns or reorder them within a column.
- **Quick Add**: Use the `+` button at the bottom of any column to quickly add a new card.
- **Inline Editing**: Double-click any card to edit its text directly.
- **Drag to Delete**: Drag a card outside the board area to delete it instantly. You can configure a **deletion delay** in settings to prevent accidental deletions.

### 🔍 Smart Editing
- **Autocomplete**: Get suggestions for `#tags` and `[[internal links]]` while editing card text.
- **Markdown Support**: Full support for wiki-links, tags, bold, italic, and inline code.

### 📂 File Integration
- **File Drag-and-Drop**: Drag files or folders directly from the Obsidian File Explorer onto the board to create new cards with internal links automatically.

### 📱 Mobile Ready
- **Responsive Design**: The board automatically adapts to mobile screens, ensuring a smooth experience on all devices.

### 🛠️ Easy Insertion
- **Context Menu**: Right-click in the editor and select **"Insert Kanban"** to quickly add a board.
- **Command Palette**: Use the "Insert Kanban Board" command for keyboard-driven insertion.

### 🌍 Multilingual Support
- Supports **English** (default), **French** (Français), and **Spanish** (Español).
- Settings and UI elements adapt to your chosen language.

### ⚙️ Customization
- **Custom Column Names**: Change "To Do", "In Progress", and "Done" to anything you like in the settings.
- **Centered Board**: Option to center the board horizontally for better focus.
- **Robust Persistence**: Uses the Obsidian Vault API to ensure changes are saved reliably, even in Reading Mode.

## Installation

### Manual Installation
1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/ldomaradzki/obsidian-kanban-block/releases).
2. Create a folder named `obsidian-kanban-block` in your vault's `.obsidian/plugins/` directory.
3. Copy the downloaded files into that folder.
4. Reload Obsidian and enable the plugin in **Settings > Community Plugins**.

## Development

```bash
npm install
npm run dev    # Watch mode
npm run build  # Production build
```

## License

MIT
