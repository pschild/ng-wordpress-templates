import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

import {NgWordpressServicesModule, TplTimelineModule} from '@ngWordpressTemplates';
import Config from "./config";

const routes: Routes = [
    { path: '', component: AppComponent }
];

export function ngwtConfigFactory(): any {
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
        // TplTextModule.forRoot(),
        TplTimelineModule.forRoot({}),
        NgWordpressServicesModule.forRoot({apiUrl: 'tbd'})
        // TplProjectsModule.forRoot(),
        // TplPostsModule.forRoot(),
        // TplCodeblocksModule.forRoot(),
        // TplGalleryModule.forRoot(),
        // TplTextGalleryModule.forRoot(),
        // TplTextMediaSliderModule.forRoot()
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
