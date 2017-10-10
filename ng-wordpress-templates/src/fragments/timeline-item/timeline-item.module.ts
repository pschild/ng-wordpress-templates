import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineItemComponent} from "./timeline-item.component";
import {PipesModule} from "../../pipes/pipes.module";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        PipesModule
    ],
    declarations: [
        TimelineItemComponent
    ],
    exports: [
        TimelineItemComponent
    ]
})
export class TimelineItemModule {
}