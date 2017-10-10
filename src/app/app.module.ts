import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TplTextModule} from '@ngWordpressTemplates';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TplTextModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
