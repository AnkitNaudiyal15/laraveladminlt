import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareComponent } from './share/share.component';


const routes: Routes = [
{
  path:'share',
  component: ShareComponent,
  data :{title:'Share market'}
}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
