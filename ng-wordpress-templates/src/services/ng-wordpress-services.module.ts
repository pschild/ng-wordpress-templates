import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {TimelineService} from "./timeline.service";
import {NGWT_CONFIG} from "../config/NgwtConfig";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ]
})
export class NgWordpressServicesModule {

    public static forRoot(config: any): ModuleWithProviders {

        return {
            ngModule: NgWordpressServicesModule,
            providers: [
                {
                    provide: NGWT_CONFIG,
                    useValue: config
                },
                // PageService,
                // PostService,
                // ProjectService,
                TimelineService
                // MediaService,
                // NavigationService
            ]
        };
    }

}
