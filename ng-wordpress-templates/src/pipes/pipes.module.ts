import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlPipe} from "./safe-html/safe-html.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SafeHtmlPipe
    ],
    declarations: [
        SafeHtmlPipe
    ]
})
export class PipesModule {
}
