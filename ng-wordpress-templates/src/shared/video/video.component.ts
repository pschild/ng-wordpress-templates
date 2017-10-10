import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaComponent} from "../media/media.component";

@Component({
    selector: 'ngwt-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent extends MediaComponent implements OnInit {

    @Input() showControls: boolean = true;
    @Input() enableAutoplay: boolean = false;

    @Output() onVideoPlay: EventEmitter<any> = new EventEmitter();
    @Output() onVideoPause: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        super.ngOnInit();
    }

    getSourceUrl() {
        return this.loadedMediaItem$.getValue().source_url;
    }

    onPlay() {
        this.onVideoPlay.emit();
    }

    onPause() {
        this.onVideoPause.emit();
    }

    onSwipeLeft() {
        this.el.nativeElement.querySelector('video').pause();
        super.onSwipeLeft();
    }

    onSwipeRight() {
        this.el.nativeElement.querySelector('video').pause();
        super.onSwipeRight();
    }

}
