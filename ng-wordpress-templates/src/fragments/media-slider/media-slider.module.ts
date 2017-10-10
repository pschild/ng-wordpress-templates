import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaSliderComponent} from "./media-slider.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";

import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        MediaSliderComponent
    ],
    exports: [
        MediaSliderComponent
    ]
})
export class MediaSliderModule {
}