import { NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRootComponent } from './app-root.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { AppGridComponent } from './components/app-grid/app-grid.component';

@NgModule({
    declarations: [
        AppRootComponent,
        ThemeSwitcherComponent,
        AppGridComponent
    ],
    imports: [
        NativeScriptModule
    ],
    bootstrap: [AppRootComponent],
    providers: []
})
export class AppModule {}