import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-theme-switcher',
    template: `
        <FlexboxLayout class="theme-switcher" justifyContent="space-around">
            <Button *ngFor="let theme of themes" 
                [text]="theme"
                [class.active]="theme.toLowerCase() === currentTheme"
                class="theme-button"
                (tap)="onThemeSelect(theme)">
            </Button>
        </FlexboxLayout>
    `
})
export class ThemeSwitcherComponent {
    @Input() themes: string[] = [];
    @Input() currentTheme: string = '';
    @Output() themeChange = new EventEmitter<string>();

    onThemeSelect(theme: string) {
        this.themeChange.emit(theme);
    }
}