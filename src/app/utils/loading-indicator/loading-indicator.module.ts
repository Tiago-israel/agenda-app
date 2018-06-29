import { LoadingIndicatorService } from './loading-indicator.service';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        LoadingIndicatorComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        LoadingIndicatorService
    ],
    exports:[
        LoadingIndicatorComponent        
    ]
})
export class LoadingIndicatorModule { }
