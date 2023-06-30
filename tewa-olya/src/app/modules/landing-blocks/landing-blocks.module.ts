import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopBlockComponent } from './main-top-block/main-top-block.component';



@NgModule({
    declarations: [
        MainTopBlockComponent
    ],
    exports: [
        MainTopBlockComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LandingBlocksModule { }
