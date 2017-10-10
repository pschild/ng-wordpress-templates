import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text',
  template: `
      <h1>{{data.title.rendered}}</h1>
      <p [innerHtml]="data.acf.content | safeHtml"></p>
  `,
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
