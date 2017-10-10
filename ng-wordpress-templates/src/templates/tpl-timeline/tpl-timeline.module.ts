import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTimelineComponent} from "./tpl-timeline.component";
import {TimelineItemModule} from "../../fragments/timeline-item/timeline-item.module";
import {TimelineService} from "../../fragments/timeline-item/timeline.service";
import {ConfigService} from "../../config/config.service";

export const BASE_URL = new InjectionToken<string>('BASE_URL');

export function wpConfigFactory(url: string) {
    return new ConfigService(url);
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

    public static forRoot(baseUrl: string): ModuleWithProviders {

        return {
            ngModule: TplTimelineModule,
            providers: [
                TimelineService,
                { provide: BASE_URL, useValue: baseUrl },
                {
                    provide: ConfigService,
                    useFactory: wpConfigFactory,
                    deps: [BASE_URL]
                }
            ]
        };
    }
}
