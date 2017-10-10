import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostPreviewComponent} from "./post-preview.component";
import {SharedModule} from "../../shared/shared.module";
import {PipesModule} from "../../pipes/pipes.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        PostPreviewComponent
    ],
    exports: [
        PostPreviewComponent
    ]
})
export class PostPreviewModule {
}