import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-tpl-text [data]="data" [params]="params"></app-tpl-text>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    data = {
        title: {
            rendered: 'This... is a test!'
        },
        acf: {
            content: 'Hello World'
        }
    };

    params = null;

    constructor() {
    }

}
