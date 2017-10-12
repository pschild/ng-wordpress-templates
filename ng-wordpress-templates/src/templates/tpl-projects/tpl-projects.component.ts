import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Observable} from "rxjs/Observable";
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";

@Component({
    selector: 'ngwt-tpl-projects',
    template: `
        <div>FILTERCOMPONENT</div>
        <ngwt-project-item *ngFor="let projectItem of projectItems$ | async" [projectItem]="projectItem"></ngwt-project-item>
    `,
    styleUrls: ['./tpl-projects.component.scss']
})
export class TplProjectsComponent extends BaseTemplateComponent implements OnInit {

    projectItems$: Observable<any>;

    constructor(private projectService: ProjectService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.project_ids) {
            this.projectItems$ = this.projectService.loadByIds(this.data.acf.project_ids);
        }
    }

}
