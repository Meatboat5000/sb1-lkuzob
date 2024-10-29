import { Injectable } from '@angular/core';
import { ApplicationSettings, Application } from '@nativescript/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themes = ['Sunset', 'Arcade', 'Cyber', 'Retrowave'];
    private currentThemeSubject = new BehaviorSubject<string>(
        ApplicationSettings.getString('theme', 'sunset')
    );

    currentTheme$ = this.currentThemeSubject.asObservable();

    getThemes(): string[] {
        return this.themes;
    }

    setTheme(theme: string) {
        const normalizedTheme = theme.toLowerCase();
        ApplicationSettings.setString('theme', normalizedTheme);
        this.currentThemeSubject.next(normalizedTheme);
        this.applyTheme(normalizedTheme);
    }

    private applyTheme(theme: string) {
        const page = Application.getRootView();
        this.themes.forEach(t => {
            page.classList.remove(`theme-${t.toLowerCase()}`);
        });
        page.classList.add(`theme-${theme}`);
    }
}