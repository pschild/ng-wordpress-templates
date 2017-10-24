import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {TimelineService} from "./timeline.service";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";
import {PostService} from "./post.service";
import {ProjectService} from "./project.service";
import {MediaService} from "./media.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ]
})
export class NgWordpressServicesModule {

    public static forRoot(config: NgwtConfig): ModuleWithProviders {

        return {
            ngModule: NgWordpressServicesModule,
            providers: [
                {
                    provide: NGWT_CONFIG,
                    useValue: config
                },
                // PageService,
                PostService,
                ProjectService,
                TimelineService,
                MediaService
                // NavigationService
            ]
        };
    }

}
