import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MainComponent } from './pages/main/main.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  // {
  //   path: 'name', component: NameComponent
  //   children: [
  //     { path: '', component: NameComponent },
  //     { path: ':path', component: NameComponent },
  //     { path: ':path/:params', component: NameComponent }
  //   ],
  //   canActivate: [AuthenguardGuard]
  // },
  { path: 'main', component: MainComponent },
  { path: 'post', component: PagenotfoundComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
