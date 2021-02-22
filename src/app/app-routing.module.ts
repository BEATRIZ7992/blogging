import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'blog' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
