import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplPostsComponent} from "./tpl-posts.component";
import {PostPreviewModule} from "../../fragments/post-preview/post-preview.module";
import {PostService} from "../../services/post.service";

@NgModule({
    imports: [
        CommonModule,
        PostPreviewModule
    ],
    declarations: [
        TplPostsComponent
    ],
    exports: [
        TplPostsComponent
    ]
})
export class TplPostsModule {

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: TplPostsModule,
            providers: [
                PostService
            ]
        };
    }
}
