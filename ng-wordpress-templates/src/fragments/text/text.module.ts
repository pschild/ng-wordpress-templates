import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextComponent} from "./text.component";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        TextComponent
    ],
    exports: [
        TextComponent
    ]
})
export class TextModule {
}