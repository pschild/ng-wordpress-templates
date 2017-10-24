import {Component, Input, OnInit} from '@angular/core';
import {KeyCode} from "../../enums/key-code.enum";
import {MediaService} from "../../services/media.service";

@Component({
    selector: 'ngwt-media-slider',
    host: {'(window:keyup)': 'handleKeyDown($event)'},
    templateUrl: './media-slider.component.html',
    styleUrls: ['./media-slider.component.scss']
})
export class MediaSliderComponent implements OnInit {

    @Input() mediaItems: Array<any> = [];

    activeSlideIndex: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    setActiveIndex(newIndex) {
        if (newIndex === this.mediaItems.length || newIndex < 0) {
            return;
        }
        this.activeSlideIndex = newIndex;
    }

    calcSliderWidth() {
        if (this.mediaItems) {
            return (this.mediaItems.length * 100) + '%';
        }
    }

    calcItemWidth() {
        if (this.mediaItems) {
            return (100 / this.mediaItems.length) + '%';
        }
    }

    handleKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.LEFT_ARROW:
                this.setActiveIndex(this.activeSlideIndex - 1);
                break;
            case KeyCode.RIGHT_ARROW:
                this.setActiveIndex(this.activeSlideIndex + 1);
                break;
        }
    }

    isImage(mediaItem) {
        return mediaItem.mime_type ===
            MediaService.MIME_TYPE.IMAGE_JPEG
            || MediaService.MIME_TYPE.IMAGE_PNG
            || MediaService.MIME_TYPE.IMAGE_GIF
            || MediaService.MIME_TYPE.IMAGE_BMP;
    }

    isVideo(mediaItem) {
        return mediaItem.mime_type === MediaService.MIME_TYPE.VIDEO_MP4;
    }

}
