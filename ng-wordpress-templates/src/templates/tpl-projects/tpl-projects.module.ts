import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplProjectsComponent} from "./tpl-projects.component";
import {ProjectItemModule} from "../../fragments/project-item/project-item.module";
import {ProjectService} from "ng-wordpress-services";

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

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: TplProjectsModule,
            providers: [
                ProjectService
            ]
        };
    }
}
