import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ECommerceComponent } from './layouts/e-commerce/e-commerce.component';
import { EcommerceSearchBarComponent } from './layouts/e-commerce/ecommerce-search-bar/ecommerce-search-bar.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/e-commerce',
    pathMatch: 'full', data: {
      title : "PROPERTY MARKET"
    }
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent
  },
  {
    path : 'search',
    component: EcommerceSearchBarComponent 
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
