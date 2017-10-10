import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TplTextModule, TplTimelineModule} from '@ngWordpressTemplates';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot('http://wp.pschild.de/wp-json')
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
