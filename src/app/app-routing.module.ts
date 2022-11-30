import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { LocalnewsComponent } from './localnews/localnews.component';
import { NewestComponent } from './newest/newest.component';

const routes: Routes = [
  //--- Home ---
  {path:'',component:TopheadingComponent},
  //--- Local news ---
   {path:'Local',component:LocalnewsComponent},  
  //--- Newest ---
  {path:'Newest',component:NewestComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
