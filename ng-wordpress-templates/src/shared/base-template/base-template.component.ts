import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ngwt-base-template',
    template: ``,
    styles: []
})
export class BaseTemplateComponent implements OnInit {

    @Input() data: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
