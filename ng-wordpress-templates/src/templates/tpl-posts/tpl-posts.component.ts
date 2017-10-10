import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BaseTemplateComponent} from "../../shared/base-template/base-template.component";
import {PostService} from "../../services/post.service";

@Component({
    selector: 'ngwt-tpl-posts',
    template: `
        <ngwt-post-preview *ngFor="let postItem of postItems$ | async" [postItem]="postItem"></ngwt-post-preview>
    `,
    styleUrls: ['./tpl-posts.component.scss']
})
export class TplPostsComponent extends BaseTemplateComponent implements OnInit {

    postItems$: Observable<any>;

    constructor(private postService: PostService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.posts_of_categories) {
            this.postItems$ = this.postService.loadByCategoryIds(this.data.acf.posts_of_categories.map(category => category.term_id));
        }
    }

}
