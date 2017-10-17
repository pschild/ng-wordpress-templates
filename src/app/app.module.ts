import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NGWT_CONFIG, TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule, TplTextGalleryModule, TplTextMediaSliderModule} from '@ngWordpressTemplates';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";
import {NgwtConfig} from "../../ng-wordpress-templates/src/config/NgwtConfig";

const routes: Routes = [
    { path: '', component: AppComponent }
];

export function ngwtConfigFactory(): NgwtConfig {
    return {
        apiUrl: environment.apiUrl,
        staticSharerUrl: environment.staticSharerUrl
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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
