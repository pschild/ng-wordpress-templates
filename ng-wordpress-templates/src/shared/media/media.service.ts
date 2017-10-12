import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../../config/NgwtConfig";
import "rxjs/add/operator/map";

@Injectable()
export class MediaService {

    static MIME_TYPE = {
        IMAGE_JPEG: 'image/jpeg',
        IMAGE_PNG: 'image/png',
        IMAGE_GIF: 'image/gif',
        IMAGE_BMP: 'image/bmp',
        VIDEO_MP4: 'video/mp4'
    };

    private itemsPerPage = 30;

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadByIds(ids: Array<number>, page: number = 1): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/media/?page=${page}&per_page=${this.itemsPerPage}&include=${ids.join(',')}&orderby=include&order=asc`)
            .map(res => res.json());
    }

}
