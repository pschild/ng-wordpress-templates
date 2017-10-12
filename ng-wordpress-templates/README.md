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

Additionally the library expects a configuration (containing URLs etc.) to be provided within the app. To do that, you only have to provide ```NGWT_CONFIG``` as configuration with an object of type ```NgwtConfig``` as the value.

```typescript
...
import {
    NGWT_CONFIG,
    NgwtConfig,
    ...
} from '@ngWordpressTemplates';

const libConfig: NgwtConfig = {
    apiUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-json',
    staticSharerUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-content/themes/pschild-angular/sharer/sharer.php'
};

@NgModule({
    ...
    imports: [
        ...
    ],
    providers: [
        ...
        {
            provide: NGWT_CONFIG,
            useValue: libConfig
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