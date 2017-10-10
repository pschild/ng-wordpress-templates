import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
    selector: 'app-codeblock',
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
    }

    ngAfterViewInit(): void {
        let codeBlockElements = [].slice.call(this.el.nativeElement.querySelectorAll('.code-highlight'));
        codeBlockElements.map(codeBlockEl => hljs.highlightBlock(codeBlockEl));
    }

}
