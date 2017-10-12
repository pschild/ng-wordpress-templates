This library contains different templates that can be used by a headless Wordpress application with Angular.

## How to use

The templates provided with this library are supposed to work with the corresponding theme/templates on the server side.
Therefore, download [pschild-angular-wordpress-theme](https://github.com/pschild/pschild-angular-wordpress-theme) and use it in your Wordpress installation.

```typescript
...
import {
    NGWT_CONFIG,
    NgwtConfig,
    TplTextModule,
    TplGalleryModule
} from '@ngWordpressTemplates';

const libConfig: NgwtConfig = {
    baseUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-json',
    staticSharerUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-content/themes/pschild-angular/sharer/sharer.php'
};

@NgModule({
    ...
    imports: [
        ...
        TplTextModule.forRoot(),
        TplGalleryModule.forRoot()
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