import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTopBlockComponent } from './main-top-block/main-top-block.component';
import { ProfileBlockComponent } from './profile-block/profile-block.component';



@NgModule({
    declarations: [
        MainTopBlockComponent,
        ProfileBlockComponent
    ],
    exports: [
        MainTopBlockComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LandingBlocksModule { }
