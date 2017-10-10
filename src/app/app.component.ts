import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ngwt-tpl-text [data]="textData" [params]="params"></ngwt-tpl-text>
        <ngwt-tpl-timeline [data]="timelineData" [params]="params"></ngwt-tpl-timeline>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    textData = {
        title: {
            rendered: 'This... is a test!'
        },
        acf: {
            content: 'Hello World'
        }
    };

    timelineData = {};

    params = null;

    constructor() {
    }

}
