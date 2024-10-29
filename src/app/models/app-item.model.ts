export interface AppItem {
    name: string;
    type: 'Web App' | 'Mobile App';
    icon: string;
    url?: string;
    deepLink?: string;
}