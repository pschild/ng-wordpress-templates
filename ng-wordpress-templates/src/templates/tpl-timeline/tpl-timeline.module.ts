import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTimelineComponent} from "./tpl-timeline.component";
import {TimelineItemModule} from "../../fragments/timeline-item/timeline-item.module";
import {TimelineService} from "../../fragments/timeline-item/timeline.service";
import {ConfigService} from "../../config/config.service";

export const BASE_URL = new InjectionToken<string>('BASE_URL');
export const STATIC_SHARER_URL = new InjectionToken<string>('STATIC_SHARER_URL');

export function wpConfigFactory(url: string, staticSharerUrl: string) {
    return new ConfigService(url, staticSharerUrl);
}

@NgModule({
    imports: [
        CommonModule,
        TimelineItemModule
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
            providers: [
                TimelineService
            ]
        };
    }
}
