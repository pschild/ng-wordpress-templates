This library contains different templates that can be used by a headless Wordpress application with Angular.

## How to use

The templates provided with this library are supposed to work with the corresponding theme/templates on the server side.
Therefore, download [pschild-angular-wordpress-theme](https://github.com/pschild/pschild-angular-wordpress-theme) and use it in your Wordpress installation.

First, install the library using
```
npm i ng-wordpress-templates --save
```

After that you can import the template modules you want to use into your AppModule.
```typescript
...
import {
    TplTextModule,
    TplGalleryModule
} from '@ngWordpressTemplates';

@NgModule({
    ...
    imports: [
        ...
        TplTextModule.forRoot(),
        TplGalleryModule.forRoot()
    ],
    ...
})
```

Additionally the library expects a configuration (containing URLs etc.) to be provided within the app. To do that, you only have to provide ```NGWT_CONFIG``` as configuration by using a factory method returning an object of type ```NgwtConfig```.
You can either use static values or values read from your environment when you want to provide different values for different build types.

```typescript
...
import {
    NGWT_CONFIG,
    NgwtConfig,
    ...
} from '@ngWordpressTemplates';

export function ngwtConfigFactory(): NgwtConfig {
    return {
        apiUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-json',
        staticSharerUrl: environment.sharerUrl
    };
}

@NgModule({
    ...
    imports: [
        ...
    ],
    providers: [
        ...
        {
            provide: NGWT_CONFIG,
            useFactory: ngwtConfigFactory
        }
    ],
    ...
})
```

## Templates
* Text: ```TplTextModule```
* Timeline: ```TplTimelineModule```
* Projects: ```TplProjectsModule```
* Posts: ```TplPostsModule```
* Codeblocks: ```TplCodeblocksModule```
* Gallery: ```TplGalleryModule```
* TextGallery: ```TplTextGalleryModule```
* TextMediaSlider: ```TplTextMediaSliderModule```