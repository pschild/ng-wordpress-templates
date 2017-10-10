import {Component, OnInit} from '@angular/core';
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'ngwt-tpl-text',
    template: `
        <ngwt-text [data]="data"></ngwt-text>
    `,
    styleUrls: ['./tpl-text.component.scss']
})
export class TplTextComponent extends BaseTemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
