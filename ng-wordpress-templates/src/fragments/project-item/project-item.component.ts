import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MediaService} from "../../services/media.service";

@Component({
    selector: 'ngwt-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

    @Input() projectItem: any;

    mediaItems$: Observable<any[]>;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.projectItem.acf.media_ids) {
            this.mediaItems$ = this.mediaService.loadByIds(this.projectItem.acf.media_ids);
        }
    }

}
