import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:"display",component:DisplayComponent},
{path:"search",component:SearchComponent},
{path:"delete",component: DeleteComponent},
{path:"insert",component:CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
