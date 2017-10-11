import {Component, OnInit} from '@angular/core';
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'ngwt-tpl-text-gallery',
    template: `
        <ngwt-tpl-text [data]="data" [params]="params"></ngwt-tpl-text>
        <ngwt-tpl-gallery [data]="data" [params]="params"></ngwt-tpl-gallery>
    `,
    styleUrls: ['./tpl-text-gallery.component.scss']
})
export class TplTextGalleryComponent extends BaseTemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
