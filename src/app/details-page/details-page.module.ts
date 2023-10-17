import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DetailsPageComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatSelectModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    exports: [RouterModule]
})

export class DetailsPageModule { }