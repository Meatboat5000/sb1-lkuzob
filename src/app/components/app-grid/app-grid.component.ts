import { Component, Input } from '@angular/core';
import { AppItem } from '../../models/app-item.model';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-grid',
    template: `
        <ScrollView>
            <GridLayout class="app-grid" columns="*, *" rows="auto, auto, auto, auto">
                <StackLayout *ngFor="let app of apps; let i = index"
                    [row]="getRow(i)"
                    [col]="getColumn(i)"
                    class="app-item"
                    (tap)="openApp(app)">
                    <Image [src]="app.icon" class="app-icon"></Image>
                    <Label [text]="app.name" class="app-name"></Label>
                    <Label [text]="app.type" class="app-type"></Label>
                </StackLayout>
            </GridLayout>
        </ScrollView>
    `
})
export class AppGridComponent {
    @Input() apps: AppItem[] = [];

    constructor(private appService: AppService) {}

    getRow(index: number): number {
        return Math.floor(index / 2);
    }

    getColumn(index: number): number {
        return index % 2;
    }

    openApp(app: AppItem) {
        this.appService.openApp(app);
    }
}