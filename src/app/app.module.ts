import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";

import {
    NgWordpressServicesModule,
    TplTimelineModule,
    TplTextModule,
    TplPostsModule,
    TplProjectsModule,
    TplCodeblocksModule,
    TplGalleryModule,
    TplTextGalleryModule,
    TplTextMediaSliderModule
} from '@ngWordpressTemplates';

const routes: Routes = [
    {path: '', component: AppComponent}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        NgWordpressServicesModule.forRoot({
            apiUrl: environment.apiUrl,
            staticSharerUrl: environment.staticSharerUrl,
            menuName: 'main'
        }),
        TplTextModule,
        TplTimelineModule,
        TplProjectsModule,
        TplPostsModule,
        TplCodeblocksModule,
        TplGalleryModule,
        TplTextGalleryModule,
        TplTextMediaSliderModule
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
