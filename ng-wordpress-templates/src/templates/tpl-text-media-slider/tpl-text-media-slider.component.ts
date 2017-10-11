import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../shared/media/media.service";
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'ngwt-tpl-text-media-slider',
    template: `
        <h2>{{data.title.rendered}}</h2>
        <ngwt-media-slider [mediaItems]="mediaItems$ | async"></ngwt-media-slider>
        <ngwt-tpl-text [data]="data" [params]="params"></ngwt-tpl-text>
    `,
    styleUrls: ['./tpl-text-media-slider.component.scss']
})
export class TplTextMediaSliderComponent extends BaseTemplateComponent implements OnInit {

    mediaItems$: Observable<any[]>;

    constructor(private mediaService: MediaService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.gallery_images) {
            this.mediaItems$ = this.mediaService.loadByIds(this.data.acf.gallery_images);
        }
    }

}
