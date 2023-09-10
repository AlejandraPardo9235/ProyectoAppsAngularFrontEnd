import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoriasComponent } from './categorias/categorias.component';


const routes: Routes = [{path:'inicio', component: MainComponent},
{path:'categorias', component:CategoriasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
