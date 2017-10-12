import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConfigService, TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule, TplTextGalleryModule, TplTextMediaSliderModule} from '@ngWordpressTemplates';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

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
            provide: ConfigService,
            useValue: {
                baseUrl: 'http://wp.pschild.de/wp-json',
                staticSharerUrl: 'http://wp.pschild.de/wp-content/themes/pschild-angular/sharer/sharer.php'
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
