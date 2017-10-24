import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

import {NgWordpressServicesModule, TplTimelineModule, TplTextModule, TplPostsModule} from '@ngWordpressTemplates';

const routes: Routes = [
    { path: '', component: AppComponent }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot({}),
        NgWordpressServicesModule.forRoot({
            apiUrl: environment.apiUrl,
            staticSharerUrl: environment.staticSharerUrl,
            menuName: 'main'
        }),
        // TplProjectsModule.forRoot(),
        TplPostsModule.forRoot()
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
