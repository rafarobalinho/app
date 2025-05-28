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
              sortable: true,
              filter: true,
              dataType: 'text', // new: default data type (text, timestamp, boolean, checkbox, dropdown)
              dropdownOptions: [] // for dropdown cell editors
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
                },
                dataType: {
                  label: 'Data Type',
                  type: 'TextSelect',
                  defaultValue: 'text',
                  options: {
                    options: [
                      { value: 'text', label: 'Text' },
                      { value: 'timestamp', label: 'Timestamp' },
                      { value: 'boolean', label: 'Boolean' },
                      { value: 'checkbox', label: 'Checkbox' },
                      { value: 'dropdown', label: 'Dropdown' }
                    ]
                  }
                },
                dropdownOptions: {
                  label: 'Dropdown Options',
                  type: 'Array',
                  defaultValue: [],
                  options: {
                    expandable: true,
                    getItemLabel(item, index) {
                      return `Option ${index + 1}`;
                    },
                    item: {
                      type: 'Text'
                    }
                  }
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
      // Existing theme selector property for legacy CSS themes
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
      // New property: Allow users to pass a custom AG Grid theme object
      customTheme: {
        label: { en: 'Custom Theme' },
        type: 'Object',
        section: 'style',
        bindable: true,
        defaultValue: null,
      },
      // Alternatively, you could add a property for theme parameters if you do not supply a full theme object:
      themeParams: {
        label: { en: 'Theme Parameters' },
        type: 'Object',
        section: 'style',
        bindable: true,
        defaultValue: {},
      },
      fontFamily: {
        label: { en: 'Grid Font Family' },
        type: 'Text',
        section: 'style',
        bindable: true,
        defaultValue: 'Arial, sans-serif',
      },
      rowHeight: {
        label: { en: 'Row Height' },
        type: 'Number',
        section: 'settings',
        bindable: true,
        defaultValue: 25,
        options: {
          min: 10,
          max: 200,
          step: 1
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
  