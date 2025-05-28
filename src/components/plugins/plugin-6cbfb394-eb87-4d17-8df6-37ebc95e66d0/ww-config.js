export default {
    editor: {
        settings: [
            {
                label: 'Setup developer token',
                edit: () => import('./src/components/Configuration/SettingsEdit.vue'),
                summary: () => import('./src/components/Configuration/SettingsSummary.vue'),
                getIsValid(settings) {
                    return !!settings.publicData.developerToken;
                },
            },
        ],
    },
    actions: [
        {
            name: 'Send a log to ncScale',
            code: 'sendLogToNcScale',
            isAsync: true,
        },
    ],
};