import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextMediaSliderComponent} from "./tpl-text-media-slider.component";
import {MediaSliderModule} from "../../fragments/media-slider/media-slider.module";
import {TplTextModule} from "../tpl-text/tpl-text.module";

@NgModule({
    imports: [
        CommonModule,
        TplTextModule,
        MediaSliderModule
    ],
    declarations: [
        TplTextMediaSliderComponent
    ],
    exports: [
        TplTextMediaSliderComponent
    ]
})
export class TplTextMediaSliderModule {
}
