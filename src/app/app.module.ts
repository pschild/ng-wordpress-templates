import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TplTextModule, TplTimelineModule, TplProjectsModule, TplPostsModule, TplCodeblocksModule} from '@ngWordpressTemplates';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot('http://wp.pschild.de/wp-json', 'na'),
        TplProjectsModule,
        TplPostsModule.forRoot(),
        TplCodeblocksModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
