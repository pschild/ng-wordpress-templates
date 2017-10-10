import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TplCodeblocksComponent} from "./tpl-codeblocks.component";
import {CodeblockModule} from "../../fragments/codeblock/codeblock.module";

@NgModule({
    imports: [
        CommonModule,
        CodeblockModule
    ],
    declarations: [
        TplCodeblocksComponent
    ],
    exports: [
        TplCodeblocksComponent
    ]
})
export class TplCodeblocksModule {
}