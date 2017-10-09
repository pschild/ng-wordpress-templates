import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyLibModule} from '@my/lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MyLibModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
