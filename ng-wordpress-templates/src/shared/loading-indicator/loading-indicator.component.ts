import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ngwt-loading-indicator',
    template: `
        <!--<div class="loading-indicator" [ngStyle]="{'width': size + 'px', 'height': size + 'px'}">-->
            <!--<div class="spinner">-->
                <!--<div class="double-bounce1"></div>-->
                <!--<div class="double-bounce2"></div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="loading-indicator-container" [ngStyle]="{'height': size + 'px'}">
            <svg class="lds-camera" [ngStyle]="{'width': size + 'px', 'height': size + 'px'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(50,50)">
                    <g transform="scale(0.8)">
                        <g transform="translate(-50,-50)">
                            <g transform="rotate(246.467 50 50)">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="360 50 50;0 50 50" keyTimes="0;1" dur="3s" keySplines="0.5 0.5 0.5 0.5" calcMode="spline"></animateTransform>
                                <path fill="#505050" d="M54.3,28.1h34.2c-4.5-9.3-12.4-16.7-21.9-20.8L45.7,28.1L54.3,28.1L54.3,28.1z"></path>
                                <path fill="#6c6c6c" d="M61.7,7.3C51.9,4,41.1,4.2,31.5,8.1v29.5l6.1-6.1L61.7,7.3C61.7,7.3,61.7,7.3,61.7,7.3z"></path>
                                <path fill="#919191" d="M28.1,11.6c-9.3,4.5-16.7,12.4-20.8,21.9l20.8,20.8v-8.6L28.1,11.6C28.1,11.6,28.1,11.6,28.1,11.6z"></path>
                                <path fill="#c8c8c8" d="M31.5,62.4L7.3,38.3c0,0,0,0,0,0C4,48.1,4.2,58.9,8.1,68.5h29.5L31.5,62.4z"></path>
                                <path fill="#505050" d="M45.7,71.9H11.5c0,0,0,0,0,0c4.5,9.3,12.4,16.7,21.9,20.8l20.8-20.8H45.7z"></path>
                                <path fill="#6c6c6c" d="M62.4,68.5L38.3,92.6c0,0,0,0,0,0c9.8,3.4,20.6,3.1,30.2-0.8V62.4L62.4,68.5z"></path>
                                <path fill="#919191" d="M71.9,45.7v8.6v34.2c0,0,0,0,0,0c9.3-4.5,16.7-12.4,20.8-21.9L71.9,45.7z"></path>
                                <path fill="#c8c8c8" d="M91.9,31.5C91.9,31.5,91.9,31.5,91.9,31.5l-29.5,0l0,0l6.1,6.1l24.1,24.1c0,0,0,0,0,0 C96,51.9,95.8,41.1,91.9,31.5z"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    `,
    styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

    @Input() size: number = 40;

    constructor() {
    }

    ngOnInit() {
    }

}