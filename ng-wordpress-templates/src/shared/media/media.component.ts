import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {MediaService} from "../../services/media.service";

@Component({
    template: `MediaComponent does not have a template. Use specific derived components instead.`,
    styles: []
})
export class MediaComponent implements OnInit {

    @Input() mediaId: number;
    @Input() mediaItem: any;

    @Output() onLoaded: EventEmitter<any> = new EventEmitter();
    @Output() onMediaSwipeLeft: EventEmitter<any> = new EventEmitter();
    @Output() onMediaSwipeRight: EventEmitter<any> = new EventEmitter();

    loadedMediaItem$: BehaviorSubject<any> = new BehaviorSubject(null);
    dataHasLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    mediaHasLoaded: boolean = false;

    constructor(protected el: ElementRef, private mediaService: MediaService) {
    }

    ngOnInit() {
        if (this.mediaId) {
            this.mediaService.loadByIds([this.mediaId]).subscribe(res => {
                this.loadedMediaItem$.next(res[0]);
                this.dataHasLoaded$.next(true);
                this.onDataLoadedById();
            });
        } else if (this.mediaItem) {
            this.loadedMediaItem$.next(this.mediaItem);
            this.dataHasLoaded$.next(true);
        } else {
            throw new Error(`No mediaId and no mediaItem could be found.`);
        }
    }

    onDataLoadedById() {}

    getMimeType() {
        return this.loadedMediaItem$.getValue().mime_type;
    }

    onMediaLoaded() {
        this.mediaHasLoaded = true;
        this.onLoaded.emit();
    }

    onSwipeLeft() {
        this.onMediaSwipeLeft.emit();
    }

    onSwipeRight() {
        this.onMediaSwipeRight.emit();
    }

}
