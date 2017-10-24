import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--<ngwt-tpl-text-media-slider [data]="textMediaSliderData" [params]="params"></ngwt-tpl-text-media-slider>-->
        <ngwt-tpl-text-gallery [data]="textGalleryData" [params]="params"></ngwt-tpl-text-gallery>
        <ngwt-tpl-gallery [data]="galleryData" [params]="params"></ngwt-tpl-gallery>
        <ngwt-tpl-codeblocks [data]="codeblocksData" [params]="params"></ngwt-tpl-codeblocks>
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
            rendered: 'My Text'
        },
        acf: {
            content: 'Hello World!'
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

    codeblocksData = {
        title: {
            rendered: 'My Code'
        },
        acf: {
            content: '<div class="code-highlight">some source code</div>'
        }
    };

    galleryData = {
        acf: {
            gallery_images: [493, 542]
        }
    };

    textGalleryData = {
        title: {
            rendered: 'My Gallery Title'
        },
        acf: {
            content: 'Hello World',
            gallery_images: [493, 542]
        }
    };

    textMediaSliderData = {
        title: {
            rendered: 'My Media Slider Title'
        },
        acf: {
            content: 'Hello World',
            gallery_images: [493, 542]
        }
    };

    params = null;

    constructor() {
    }

}
