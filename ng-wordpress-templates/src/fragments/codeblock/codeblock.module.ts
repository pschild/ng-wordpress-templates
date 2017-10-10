import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeblockComponent} from "./codeblock.component";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        CodeblockComponent
    ],
    exports: [
        CodeblockComponent
    ]
})
export class CodeblockModule {
}