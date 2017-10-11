import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {GalleryComponent} from "./gallery.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {Ng2DeviceDetectorModule} from "ng2-device-detector";
import {PipesModule} from "../../pipes/pipes.module";

import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PipesModule,
        InfiniteScrollModule,
        Ng2DeviceDetectorModule.forRoot()
    ],
    declarations: [
        GalleryComponent
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule {
}