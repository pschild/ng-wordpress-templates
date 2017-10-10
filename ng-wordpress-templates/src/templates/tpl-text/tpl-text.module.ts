import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplTextComponent} from "./tpl-text.component";
import {TextModule} from "../../fragments/text/text.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TextModule
    ],
    declarations: [
        TplTextComponent
    ],
    exports: [
        TplTextComponent
    ]
})
export class TplTextModule {

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: TplTextModule,
            providers: [
                // SomeService
            ]
        };
    }
}
