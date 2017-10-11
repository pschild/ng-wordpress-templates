import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplGalleryComponent} from "./tpl-gallery.component";
import {SharedModule} from "../../shared/shared.module";
import {GalleryModule} from "../../fragments/gallery/gallery.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        GalleryModule
    ],
    declarations: [
        TplGalleryComponent
    ],
    exports: [
        TplGalleryComponent
    ]
})
export class TplGalleryModule {
}