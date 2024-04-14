import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildParentRoutingModule } from './child-parent-routing.module';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    ChildParentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChildParentModule { }
