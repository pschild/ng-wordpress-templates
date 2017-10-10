export class ConfigService {

    baseUrl: string;

    constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error(`[NgWordpressTemplates]: Please enter your WordPress base URL e.g.[MyTemplateModule.forRoot('http://some-url.com')]`);
        }

        this.baseUrl = baseUrl;
    }

}