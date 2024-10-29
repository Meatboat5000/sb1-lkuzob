import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AppService } from './services/app.service';
import { AppItem } from './models/app-item.model';

@Component({
    selector: 'ns-app-root',
    template: `
        <GridLayout rows="auto, *">
            <app-theme-switcher
                row="0"
                [themes]="themes"
                [currentTheme]="currentTheme"
                (themeChange)="onThemeChange($event)">
            </app-theme-switcher>
            
            <app-grid
                row="1"
                [apps]="apps">
            </app-grid>
        </GridLayout>
    `
})
export class AppRootComponent implements OnInit {
    themes: string[] = [];
    currentTheme: string = '';
    apps: AppItem[] = [];

    constructor(
        private themeService: ThemeService,
        private appService: AppService
    ) {}

    ngOnInit() {
        this.themes = this.themeService.getThemes();
        this.apps = this.appService.getApps();
        
        this.themeService.currentTheme$.subscribe(theme => {
            this.currentTheme = theme;
        });
    }

    onThemeChange(theme: string) {
        this.themeService.setTheme(theme);
    }
}