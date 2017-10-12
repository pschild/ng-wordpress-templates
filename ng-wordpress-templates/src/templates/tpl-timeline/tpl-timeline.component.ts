import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TimelineService} from "../../services/timeline.service";
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'ngwt-tpl-timeline',
    template: `
        <ul>
            <ngwt-timeline-item *ngFor="let timelineItem of timelineItems$ | async; let odd=odd;" [timelineItem]="timelineItem" [direction]="odd ? 'left' : 'right'"></ngwt-timeline-item>
        </ul>
    `,
    styleUrls: ['./tpl-timeline.component.scss']
})
export class TplTimelineComponent extends BaseTemplateComponent implements OnInit {

    timelineItems$: Observable<any>;

    constructor(private timelineService: TimelineService) {
        super();
    }

    ngOnInit() {
        this.timelineItems$ = this.timelineService.loadAll().map((data) => {
            data.sort((a, b) => {
                return a.acf.date_from > b.acf.date_from ? -1 : 1;
            });
            return data;
        });
    }

}
