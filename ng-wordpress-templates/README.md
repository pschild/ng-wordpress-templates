# ```ng-wordpress-templates```

This library contains different templates that can be used by a headless Wordpress application with Angular.

## How to use
```typescript
...
import {NGWT_CONFIG, NgwtConfig, TplTextModule, ...} from '@ngWordpressTemplates';

const libConfig: NgwtConfig = {
    baseUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-json',
    staticSharerUrl: 'http://YOUR-WORDPRESS-INSTALLATION/wp-content/themes/pschild-angular/sharer/sharer.php'
};

@NgModule({
    ...
    imports: [
        ...
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot(),
        TplProjectsModule.forRoot(),
        TplPostsModule.forRoot(),
        TplCodeblocksModule.forRoot(),
        TplGalleryModule.forRoot(),
        TplTextGalleryModule.forRoot(),
        TplTextMediaSliderModule.forRoot()
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
* Text
* Timeline
* Projects
* Posts
* Codeblocks
* Gallery
* TextGallery
* TextMediaSlider