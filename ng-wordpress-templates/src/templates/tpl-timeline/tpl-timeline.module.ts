import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTimelineComponent} from "./tpl-timeline.component";
import {TimelineItemModule} from "../../fragments/timeline-item/timeline-item.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        TimelineItemModule,
        SharedModule
    ],
    declarations: [
        TplTimelineComponent
    ],
    exports: [
        TplTimelineComponent
    ]
})
export class TplTimelineModule {

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: TplTimelineModule,
            providers: []
        };
    }
}
