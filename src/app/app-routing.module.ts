import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
    // children: [
    //   { path: '', component: NameComponent },
    //   { path: ':path', component: NameComponent },
    //   { path: ':path/:params', component: NameComponent }
    // ],
    // canActivate: [AuthenguardGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
