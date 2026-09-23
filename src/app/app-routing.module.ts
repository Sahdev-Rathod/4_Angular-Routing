import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductComponent } from './Components/product/product.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { AuthGuard } from './Components/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'product',
    component: ProductComponent,

    children: [

      {
        path: 'list',
        component: ProductListComponent
      },

      {
        path: 'add',
        component: ProductAddComponent
      }

    ]
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  { path: 'admin', loadChildren: () => import('./Components/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
