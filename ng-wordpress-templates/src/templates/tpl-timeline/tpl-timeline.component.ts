import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";
import {TimelineService} from "../../services/timeline.service";
import {NGWT_CONFIG} from "../../config/NgwtConfig";

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

    constructor(private timelineService: TimelineService, @Inject(NGWT_CONFIG) private config: any) {
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
