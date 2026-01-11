export type Language = 'en' | 'fr' | 'es';

interface Translations {
    // Column titles
    column_todo: string;
    column_in_progress: string;
    column_done: string;

    // Menu items
    menu_insert_kanban: string;
    command_insert_kanban: string;

    // Settings
    settings_language: string;
    settings_language_desc: string;
    settings_column_names: string;
    settings_column_names_desc: string;
    settings_center_board: string;
    settings_center_board_desc: string;
    settings_todo_column: string;
    settings_in_progress_column: string;
    settings_done_column: string;
    settings_delete_delay: string;
    settings_delete_delay_desc: string;
}

const translations: Record<Language, Translations> = {
    en: {
        column_todo: 'To Do',
        column_in_progress: 'In Progress',
        column_done: 'Done',
        menu_insert_kanban: 'Insert Kanban',
        command_insert_kanban: 'Insert Kanban Board',
        settings_language: 'Language',
        settings_language_desc: 'Choose your preferred language',
        settings_column_names: 'Column Names',
        settings_column_names_desc: 'Customize the names of your kanban columns',
        settings_center_board: 'Center Board',
        settings_center_board_desc: 'Center the kanban board horizontally',
        settings_todo_column: 'To Do Column',
        settings_in_progress_column: 'In Progress Column',
        settings_done_column: 'Done Column',
        settings_delete_delay: 'Delete Delay (seconds)',
        settings_delete_delay_desc: 'How long to hold a card outside the board before it can be deleted on drop.',
    },
    fr: {
        column_todo: 'À faire',
        column_in_progress: 'En cours',
        column_done: 'Terminé',
        menu_insert_kanban: 'Insérer un Kanban',
        command_insert_kanban: 'Insérer un tableau Kanban',
        settings_language: 'Langue',
        settings_language_desc: 'Choisissez votre langue préférée',
        settings_column_names: 'Noms des colonnes',
        settings_column_names_desc: 'Personnalisez les noms de vos colonnes kanban',
        settings_center_board: 'Centrer le tableau',
        settings_center_board_desc: 'Centrer le tableau kanban horizontalement',
        settings_todo_column: 'Colonne À faire',
        settings_in_progress_column: 'Colonne En cours',
        settings_done_column: 'Colonne Terminé',
        settings_delete_delay: 'Délai de suppression (secondes)',
        settings_delete_delay_desc: 'Combien de temps maintenir une carte à l\'extérieur du tableau avant qu\'elle ne soit supprimée au relâchement.',
    },
    es: {
        column_todo: 'Por hacer',
        column_in_progress: 'En progreso',
        column_done: 'Hecho',
        menu_insert_kanban: 'Insertar Kanban',
        command_insert_kanban: 'Insertar tablero Kanban',
        settings_language: 'Idioma',
        settings_language_desc: 'Elige tu idioma preferido',
        settings_column_names: 'Nombres de columnas',
        settings_column_names_desc: 'Personaliza los nombres de tus columnas kanban',
        settings_center_board: 'Centrar tablero',
        settings_center_board_desc: 'Centrar el tablero kanban horizontalmente',
        settings_todo_column: 'Columna Por hacer',
        settings_in_progress_column: 'Columna En progreso',
        settings_done_column: 'Columna Hecho',
        settings_delete_delay: 'Retraso de eliminación (segundos)',
        settings_delete_delay_desc: 'Cuánto tiempo mantener una tarjeta fuera del tablero antes de que se pueda eliminar al soltarla.',
    },
};

export function t(key: keyof Translations, lang: Language): string {
    return translations[lang][key] || translations['en'][key];
}
