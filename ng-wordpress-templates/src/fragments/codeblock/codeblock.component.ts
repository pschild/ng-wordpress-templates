import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

declare var hljs: any;

@Component({
    selector: 'ngwt-codeblock',
    template: `
        <h2>{{postItem.title.rendered}}</h2>
        <p [innerHtml]="postItem.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./codeblock.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CodeblockComponent implements OnInit, AfterViewInit {

    @Input() postItem: any;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        require("style-loader!../../../node_modules/highlight.js/styles/vs2015.css");
        require("script-loader!../../../node_modules/highlight.js/lib/highlight.js");
    }

    ngAfterViewInit(): void {
        let codeBlockElements = [].slice.call(this.el.nativeElement.querySelectorAll('.code-highlight'));
        codeBlockElements.map(codeBlockEl => hljs.highlightBlock(codeBlockEl));
    }

}
