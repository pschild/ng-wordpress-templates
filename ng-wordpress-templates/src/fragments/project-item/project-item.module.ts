import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectItemComponent} from "./project-item.component";
import {PipesModule} from "../../pipes/pipes.module";
import {MediaSliderModule} from "../media-slider/media-slider.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        MediaSliderModule
    ],
    declarations: [
        ProjectItemComponent
    ],
    exports: [
        ProjectItemComponent
    ]
})
export class ProjectItemModule {
}