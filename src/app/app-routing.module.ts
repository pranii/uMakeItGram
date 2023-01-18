import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PathComponent } from './path/path.component';
import { TextViewComponent } from './text-view/text-view.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'path', component: PathComponent },
  { path: 'text-game', component: TextViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
