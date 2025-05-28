export default {
    editor: {
        label: {
            en: 'AG Grid Xano',
        },
        icon: 'table',
    },
    properties: {
        tableData: {
            label: { en: 'Table Data' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
        },
        columnDefs: {
            label: { en: 'Column Definitions' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(_, index) {
                    return `Column ${index + 1}`;
                },
                item: {
                    type: 'Object',
                    defaultValue: {
                        field: '',
                        headerName: '',
                        editable: true,
                        width: 100, // Default width
                        sortable: true, // Example additional property
                        filter: true // Example additional property
                    },
                    options: {
                        item: {
                            field: {
                                label: 'Field',
                                type: 'Text',
                                options: { placeholder: 'Data field name' }
                            },
                            headerName: {
                                label: 'Header',
                                type: 'Text',
                                options: { placeholder: 'Column header name' }
                            },
                            editable: {
                                label: 'Editable',
                                type: 'Boolean'
                            },
                            width: {
                                label: 'Width',
                                type: 'Number',
                                options: { min: 50, max: 500 }
                            },
                            sortable: {
                                label: 'Sortable',
                                type: 'Boolean'
                            },
                            filter: {
                                label: 'Filter',
                                type: 'Boolean'
                            }
                        }
                    }
                }
            },
        },
        xanoEndpoint: {
            label: { en: 'Xano Update Endpoint' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: '',
        },
        xanoHeaders: {
            label: { en: 'Xano Headers' },
            type: 'Object',
            section: 'settings',
            bindable: true,
            defaultValue: {},
        },
        theme: {
            label: { en: 'Grid Theme' },
            type: 'TextSelect',
            section: 'style',
            bindable: true,
            defaultValue: 'quartz',
            options: {
                options: [
                    { value: 'quartz', label: 'Quartz' },
                    { value: 'alpine', label: 'Alpine' },
                    { value: 'balham', label: 'Balham' }
                ]
            },
        },
        pageSize: {
            label: { en: 'Page Size' },
            type: 'Number',
            section: 'settings',
            bindable: true,
            defaultValue: 25,
            options: {
                min: 1,
                max: 1000,
                step: 1
            },
        },
        enableFiltering: {
            label: { en: 'Enable Filtering' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
        },
        enableSorting: {
            label: { en: 'Enable Sorting' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
        },
        loadingMessage: {
            label: { en: 'Loading Message' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: 'Updating...',
        }
    },
    triggerEvents: [
        {
            name: 'cellValueChanged',
            label: { en: 'On cell value changed' },
            event: { 
                field: '',
                oldValue: null,
                newValue: null,
                rowData: {}
            }
        },
        {
            name: 'rowSelected',
            label: { en: 'On row selected' },
            event: { rowData: {} }
        },
        {
            name: 'error',
            label: { en: 'On error' },
            event: { 
                message: '',
                type: ''
            }
        },
        {
            name: 'updateStart',
            label: { en: 'On update start' },
            event: { rowData: {} }
        },
        {
            name: 'updateComplete',
            label: { en: 'On update complete' },
            event: { 
                success: true,
                data: {}
            }
        }
    ],
    actions: [
        {
            name: 'refreshData',
            label: { en: 'Refresh Data' },
            action: 'refreshData'
        },
        {
            name: 'exportToCSV',
            label: { en: 'Export to CSV' },
            action: 'exportToCSV'
        },
        {
            name: 'clearSelection',
            label: { en: 'Clear Selection' },
            action: 'clearSelection'
        },
        {
            name: 'retryUpdate',
            label: { en: 'Retry Update' },
            action: 'retryUpdate'
        }
    ]
  };