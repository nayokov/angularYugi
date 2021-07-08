import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHeaderComponent} from './components/app-header/app-header.component';


const routes: Routes = [
  {path: '', component: AppHeaderComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
