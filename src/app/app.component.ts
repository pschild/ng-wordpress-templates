import {Component} from '@angular/core';
import {BarService} from '@ngWordpressTemplates';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    value$: Observable<string>;

    constructor(private bar: BarService) {
        this.value$ = bar.value;
    }

}
