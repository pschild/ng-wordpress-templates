import {Component, OnInit} from '@angular/core';
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'ngwt-tpl-codeblocks',
    template: `
        <ngwt-codeblock [postItem]="data"></ngwt-codeblock>
    `,
    styleUrls: ['./tpl-codeblocks.component.scss']
})
export class TplCodeblocksComponent extends BaseTemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
