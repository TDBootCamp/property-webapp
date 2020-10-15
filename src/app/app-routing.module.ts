import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ECommerceComponent } from './layouts/e-commerce/e-commerce.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/e-commerce',
    pathMatch: 'full',
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
