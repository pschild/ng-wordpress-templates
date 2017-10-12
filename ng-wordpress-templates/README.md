# ```ng-wordpress-templates```

This library contains different templates that can be used by a headless Wordpress application with Angular.

## How to use
```typescript
...
import {ConfigService, TplTextModule, ...} from '@ngWordpressTemplates';

@NgModule({
    ...
    imports: [
        ...
        TplTextModule.forRoot(),
        TplTimelineModule.forRoot(),
        TplProjectsModule,
        TplPostsModule.forRoot(),
        TplCodeblocksModule,
        TplGalleryModule,
        TplTextGalleryModule,
        TplTextMediaSliderModule
    ],
    providers: [
        ...
        {
            provide: ConfigService,
            useValue: {
                baseUrl: 'http://wp.pschild.de/wp-json',
                staticSharerUrl: 'http://wp.pschild.de/wp-content/themes/pschild-angular/sharer/sharer.php'
            }
        }
    ],
    ...
})
```

## Templates
* tbd