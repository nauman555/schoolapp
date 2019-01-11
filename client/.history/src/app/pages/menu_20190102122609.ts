export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'teachers',
        title: 'Teachers Management',
        icon: 'user',
    },
    {
        path: 'classes',
        title: 'Class Management',
        icon: 'bar-chart',
        children: [
            {
                path: 'manage-class',
                title: 'Manage Classes',
                
            },
            {
                path: 'manage-section',
                title: 'Manage Sections',
              
             
            }

        ]
    },
    {
        path: 'subjects',
        title: 'Subject Management',
        icon: 'file',
        children: [
            {
                path: 'manage-subjects',
                title: 'Manage Subjects'
            },
            {
                path: 'assign-electives',
                title: 'Assign Elective Subjects'
            },

        ]
    },
    {
        path: 'students',
        title: 'Students',
        icon: 'user',
        children: [
            {
                path: 'admit-student',
                title: 'Admit Student'
            },
            {
                path: 'students-info',
                title: 'Students Information'
            },
            {
                path: 'students-promotion',
                title: 'Students Promotion'
            }

        ]
    },

    {
        path: 'attendance',
        title: 'Daily Attendence',
        icon: 'calendar',
        children: [
            {
                path: 'daily-attendance',
                title: 'Daily Attendance'
            },
            {
                path: 'attendance-report',
                title: 'Attendance Report'
            }

        ]
      
    },
    {
        path: 'charts',
        title: 'Exams Management',
        icon: 'file-text-o',
        children: [
            {
                path: 'echarts',
                title: 'Add Exams'
            },
            {
                path: 'echarts',
                title: 'Exams List'
            },
            {
                path: 'echarts',
                title: 'Manage Marks',
             
            },

        ]
    },
    {
        path: 'charts',
        title: 'Accounting',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Create Student Payment'
            },
            {
                path: 'echarts',
                title: 'Student Payment Details'
            },
            {
                path: 'echarts',
                title: 'Expenses',
                children: [
                    {
                        path: 'echarts',
                        title: 'Add Expense Category'
                    },
                    {
                        path: 'echarts',
                        title: 'Add Expense'
                    }
                ]
            },

        ]
    },
    {
        path: 'editor',
        title: 'Transport',
        icon: 'car',
        children: [
            {
                path: 'echarts',
                title: 'Add Transport'
            },
            {
                path: 'echarts',
                title: 'Manage Transport'
            }
        ]
    },
    {
        path: 'editor',
        title: 'Text editor',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Icon',
        icon: 'diamond'
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },
];
