import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Modulos',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            // {
            //     id       : 'dashboard',
            //     title    : 'Dashboard',
            //     type     : 'item',
            //     icon     : 'dashboard',
            //     url      : '/dashboard'
            // },
            {
                id       : 'infohub',
                title    : 'infohub',
                type     : 'item',
                icon     : 'warning', 
                url      : '/infohub'
            },
            {
                id       : 'logistic-transportation',
                title    : 'Logistic and Transportation',
                type     : 'item',
                icon     : 'local_shipping',
                url      : '/logistic-transportation'
            },
            {
                id       : 'security-alarms-panic-buttons',
                title    : 'Security Alarms & Panic Buttons',
                type     : 'item',
                icon     : 'notifications_active',
                url      : '/security-alarms-panic-buttons'
            },
            {
                id       : 'vehicle-tracking-system',
                title    : 'Vehicle Tracking System',
                type     : 'item',
                icon     : 'location_on',
                url      : '/vehicle-tracking-system'
            },
            {
                id       : 'emergency-employee-number',
                title    : 'Emergency Employee Number',
                type     : 'item',
                icon     : 'perm_phone_msg',
                url      : '/emergency-employee-number'
            },
            {
                id       : 'incidents-management-alerts',
                title    : 'Incidents & Management Alerts',
                type     : 'item',
                icon     : 'phonelink_ring', //add_to_home_screen device_unknown notification_important mobile_screen_share
                url      : '/incidents-management-alerts'
            },
            {
                id       : 'cctv',
                title    : 'CCTV',
                type     : 'item',
                icon     : 'switch_video', //missed_video_call switch_video
                url      : '/cctv'
            },
            {
                id       : 'loss-prevention',
                title    : 'Loss Prevention',
                type     : 'item',
                icon     : 'remove_red_eye', 
                url      : '/loss-prevention'
            },
        ]
    }
];
