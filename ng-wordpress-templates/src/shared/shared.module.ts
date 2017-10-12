import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseTemplateComponent} from "./base-template/base-template.component";
import {ImageComponent} from "./image/image.component";
import {VideoComponent} from "./video/video.component";
import {LoadingIndicatorComponent} from "./loading-indicator/loading-indicator.component";
import {MediaComponent} from "./media/media.component";
import {MediaService} from "../services/media.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        BaseTemplateComponent,
        ImageComponent,
        VideoComponent,
        LoadingIndicatorComponent,
        MediaComponent
    ],
    exports: [
        BaseTemplateComponent,
        ImageComponent,
        VideoComponent,
        LoadingIndicatorComponent
    ],
    providers: [
        MediaService
    ]
})
export class SharedModule {
}
