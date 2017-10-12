import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NGWT_CONFIG, NgwtConfig, TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule, TplTextGalleryModule, TplTextMediaSliderModule} from '@ngWordpressTemplates';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

const routes: Routes = [
    { path: '', component: AppComponent }
];

const libConfig: NgwtConfig = {
    apiUrl: environment.apiUrl,
    staticSharerUrl: environment.staticSharerUrl
};

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
            useValue: libConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
