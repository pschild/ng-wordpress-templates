import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NGWT_CONFIG, NgwtConfig, TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule, TplTextGalleryModule, TplTextMediaSliderModule} from '@ngWordpressTemplates';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
    { path: '', component: AppComponent }
];

const libConfig: NgwtConfig = {
    baseUrl: 'http://wp.pschild.de/wp-json',
    staticSharerUrl: 'http://wp.pschild.de/wp-content/themes/pschild-angular/sharer/sharer.php'
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
        TplProjectsModule,
        TplPostsModule.forRoot(),
        TplCodeblocksModule,
        TplGalleryModule,
        TplTextGalleryModule,
        TplTextMediaSliderModule
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
