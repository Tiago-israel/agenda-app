import { LoadingIndicatorService } from './../loading-indicator.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";


@Component({
    selector: 'loading-indicator',
    templateUrl: './loading-indicator.component.html',
    styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
    visible: boolean = false;
    subscription: Subscription;

    constructor(private loadingIndicatorService: LoadingIndicatorService) { }

    ngOnInit() {
        this.subscription = this.loadingIndicatorService.loaderStatus$
            .subscribe(status => this.visible = status)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

