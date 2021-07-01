import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeRoutingModule} from './home-routing.module';
import { ReplaceImagePipe } from './dashboard/pipe/replace-image.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    ReplaceImagePipe
  ],
})
export class HomeModule { }
