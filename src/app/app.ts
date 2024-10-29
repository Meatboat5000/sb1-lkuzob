import { Application } from '@nativescript/core';
import { AppRootComponent } from './app-root.component';

Application.run({ create: () => new AppRootComponent().$start() });