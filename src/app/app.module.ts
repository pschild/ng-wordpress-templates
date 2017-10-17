import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

import {NGWT_CONFIG, NgwtConfig, TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule, TplTextGalleryModule, TplTextMediaSliderModule} from '@ngWordpressTemplates';
import {NGWS_CONFIG, NgwsConfig} from "ng-wordpress-services";

const routes: Routes = [
    { path: '', component: AppComponent }
];

export function ngwtConfigFactory(): NgwtConfig {
    return {
        apiUrl: environment.apiUrl,
        staticSharerUrl: environment.staticSharerUrl
    };
}

export function ngwsConfigFactory(): NgwsConfig {
    return {
        apiUrl: environment.apiUrl
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot(),
        TplProjectsModule.forRoot(),
        TplPostsModule.forRoot(),
        TplCodeblocksModule.forRoot(),
        TplGalleryModule.forRoot(),
        TplTextGalleryModule.forRoot(),
        TplTextMediaSliderModule.forRoot()
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        },
        {
            provide: NGWT_CONFIG,
            useFactory: ngwtConfigFactory
        },
        {
            provide: NGWS_CONFIG,
            useFactory: ngwsConfigFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
