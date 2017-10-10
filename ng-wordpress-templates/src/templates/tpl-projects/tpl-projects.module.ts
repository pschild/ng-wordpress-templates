import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplProjectsComponent} from "./tpl-projects.component";
import {ProjectItemModule} from "../../fragments/project-item/project-item.module";

@NgModule({
    imports: [
        CommonModule,
        ProjectItemModule
    ],
    declarations: [
        TplProjectsComponent
    ],
    exports: [
        TplProjectsComponent
    ]
})
export class TplProjectsModule {
}
