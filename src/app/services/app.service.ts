import { Injectable } from '@angular/core';
import { Utils } from '@nativescript/core';
import { AppItem } from '../models/app-item.model';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private apps: AppItem[] = [
        {
            name: 'Certificate Manager',
            type: 'Web App',
            icon: '~/assets/cert-icon.png',
            url: 'https://cert-manager.example.com'
        },
        {
            name: 'Mobile Scanner',
            type: 'Mobile App',
            icon: '~/assets/scanner-icon.png',
            deepLink: 'scanner://'
        },
        {
            name: 'Dashboard',
            type: 'Web App',
            icon: '~/assets/dashboard-icon.png',
            url: 'https://dashboard.example.com'
        },
        {
            name: 'Security Keys',
            type: 'Mobile App',
            icon: '~/assets/keys-icon.png',
            deepLink: 'securitykeys://'
        },
        {
            name: 'Analytics',
            type: 'Web App',
            icon: '~/assets/analytics-icon.png',
            url: 'https://analytics.example.com'
        },
        {
            name: 'Auth Manager',
            type: 'Mobile App',
            icon: '~/assets/auth-icon.png',
            deepLink: 'authmanager://'
        }
    ];

    getApps(): AppItem[] {
        return this.apps;
    }

    openApp(app: AppItem) {
        if (app.url) {
            Utils.openUrl(app.url);
        } else if (app.deepLink) {
            Utils.openUrl(app.deepLink);
        }
    }
}