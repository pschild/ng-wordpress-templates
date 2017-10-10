import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseTemplateComponent} from "./base-template/base-template.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BaseTemplateComponent
    ],
    exports: [
        BaseTemplateComponent
    ]
})
export class SharedModule {
}
