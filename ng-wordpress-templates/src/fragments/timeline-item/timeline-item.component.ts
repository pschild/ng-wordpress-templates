import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ngwt-timeline-item',
    templateUrl: './timeline-item.component.html',
    styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {

    @Input() timelineItem: any;
    @Input() direction: string;

    dateFromStr: string;
    dateToStr: string;
    description: string;

    constructor() {
    }

    ngOnInit() {
        this.dateFromStr = this.timelineItem.acf.date_from;
        this.dateToStr = this.timelineItem.acf.date_to;
        this.description = this.timelineItem.acf.description;
    }

}
