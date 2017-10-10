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
        TplTimelineModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
