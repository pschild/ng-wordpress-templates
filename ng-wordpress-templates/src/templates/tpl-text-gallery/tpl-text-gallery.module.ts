import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextGalleryComponent} from "./tpl-text-gallery.component";
import {TplGalleryModule} from "../tpl-gallery/tpl-gallery.module";
import {TplTextModule} from "../tpl-text/tpl-text.module";

@NgModule({
    imports: [
        CommonModule,
        TplTextModule,
        TplGalleryModule
    ],
    declarations: [
        TplTextGalleryComponent
    ],
    exports: [
        TplTextGalleryComponent
    ]
})
export class TplTextGalleryModule {

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: TplTextGalleryModule,
            providers: []
        };
    }
}
