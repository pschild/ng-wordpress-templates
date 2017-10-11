import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule, TplGalleryModule} from '@ngWordpressTemplates';
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
        TplTimelineModule.forRoot('http://wp.pschild.de/wp-json', 'na'),
        TplProjectsModule,
        TplPostsModule.forRoot(),
        TplCodeblocksModule,
        TplGalleryModule
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
