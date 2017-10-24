This library contains different templates that can be used by a headless Wordpress application with Angular.

## How to use

The templates provided with this library are supposed to work with the corresponding theme/templates on the server side.
Therefore, download [pschild-angular-wordpress-theme](https://github.com/pschild/pschild-angular-wordpress-theme) and use it in your Wordpress installation.

First, install the library using
```
npm i ng-wordpress-templates --save
```

After that you can import the main module (```NgWordpressServicesModule```) and any of the template modules you want to use into your AppModule.

The ```NgWordpressServicesModule``` expects a configuration (containing URLs etc.) to be passed via ```forRoot()``` method.
You can either use static values or values read from your environment when you want to provide different values for different build types.

Important: the template modules use the configuration passed via ```NgWordpressServicesModule.forRoot()``` and also rely on services provided by this module, so don't forget to call the method.

```typescript
...
import {
    NgWordpressServicesModule,
    TplTextModule,
    TplGalleryModule,
    ...
} from '@ngWordpressTemplates';

@NgModule({
    ...
    imports: [
        ...
        NgWordpressServicesModule.forRoot({
            apiUrl: environment.apiUrl,
            staticSharerUrl: environment.staticSharerUrl,
            menuName: 'main'
        }),
        TplTextModule,
        TplGalleryModule,
        ...
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

## Services
* ```PageService```
* ```PostService```
* ```MediaService```
* ```ProjectsService```
* ```TimelineService```
* ```NavigationService```