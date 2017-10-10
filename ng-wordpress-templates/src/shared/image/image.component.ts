import {Component, Input, OnInit} from '@angular/core';
import {MediaComponent} from "../media/media.component";

@Component({
    selector: 'ngwt-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent extends MediaComponent implements OnInit {

    @Input() useAsBackground: boolean = false;
    @Input() backgroundProps: {'background-position-x': any, 'background-position-y': any} = null;
    @Input() height: string = '200px';
    @Input() useFullVersion: boolean = false;
    @Input() center: boolean = false;

    ngOnInit() {
        super.ngOnInit();
    }

    onDataLoadedById() {
        this._setBackgroundProps();
        super.onDataLoadedById();
    }

    private _setBackgroundProps() {
        if (this.loadedMediaItem$.getValue() && this.loadedMediaItem$.getValue().acf) {
            this.backgroundProps = {
                'background-position-x': this.loadedMediaItem$.getValue().acf['background-x'] + '%',
                'background-position-y': this.loadedMediaItem$.getValue().acf['background-y'] + '%'
            };
        }
    }

    getBackgroundStyle() {
        return Object.assign({'background-image': `url(${this.getSourceUrl()})`}, this.backgroundProps, {'height': this.height});
    }

    getSourceUrl() {
        if (!this.loadedMediaItem$.getValue()) {
            return;
        }

        let mediaDetails = this.loadedMediaItem$.getValue().media_details;
        if (!mediaDetails) {
            return;
        }

        if (this.useFullVersion) {
            return mediaDetails.sizes.full.source_url;
        }

        if (mediaDetails.height > mediaDetails.width) {
            return mediaDetails.sizes.image_grid_portrait.source_url;
        } else {
            return mediaDetails.sizes.image_grid_landscape.source_url;
        }
    }

}
