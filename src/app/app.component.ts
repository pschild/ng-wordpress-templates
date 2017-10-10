import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ngwt-tpl-projects [data]="projectsData" [params]="params"></ngwt-tpl-projects>
        <ngwt-tpl-posts [data]="postsData" [params]="params"></ngwt-tpl-posts>
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

    projectsData = {
        acf: {
            project_ids: [41, 42]
        }
    };

    postsData = {
        acf: {
            posts_of_categories: [{term_id: 42},{term_id: 43}]
        }
    };

    params = null;

    constructor() {
    }

}
