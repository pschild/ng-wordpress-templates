import {Component, OnInit} from '@angular/core';
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'app-tpl-text',
    template: `
        <app-text [data]="data"></app-text>
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
