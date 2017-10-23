import {Component, OnInit} from '@angular/core';
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";
import {MediaService} from "../../services/media.service";

@Component({
    selector: 'ngwt-tpl-gallery',
    template: `
        <ngwt-loading-indicator [size]="100" *ngIf="!hasLoaded"></ngwt-loading-indicator>
        <ngwt-gallery [imageItems]="imageItems" [activeItemId]="getImageIdFromUrl()" (onLoadNextPage)="loadNextPage()"
                     [ngStyle]="{'display': hasLoaded ? 'block' : 'none'}"></ngwt-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent extends BaseTemplateComponent implements OnInit {

    imageItems: Array<any> = [];
    page: number = 1;
    hasLoaded: boolean = false;

    constructor(private mediaService: MediaService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.gallery_images) {
            this.loadPage(1);
        }
    }

    loadNextPage() {
        this.page++;
        this.loadPage(this.page);
    }

    loadPage(page) {
        if (this.imageItems.length < this.data.acf.gallery_images.length) {
            this.mediaService.loadByIds(this.data.acf.gallery_images, page).subscribe(res => {
                this.imageItems = this.imageItems.concat(res);
                this.checkDeeplink();
            });
        }
    }

    checkDeeplink() {
        if (this.getImageIdFromUrl() && this.imageItems.map(item => item.id).indexOf(+this.params.imageId) < 0) {
            this.loadNextPage();
        } else {
            this.hasLoaded = true;
        }
    }

    getImageIdFromUrl() {
        if (this.params && this.params.imageId) {
            return this.params.imageId;
        }
    }

}
