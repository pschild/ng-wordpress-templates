import {InjectionToken} from "@angular/core";
import {NgwtConfig} from "./NgwtConfig";

export interface NgwtConfig {
    baseUrl: string;
    staticSharerUrl: string;
}

export const NGWT_CONFIG = new InjectionToken<NgwtConfig>('ngwt.config');