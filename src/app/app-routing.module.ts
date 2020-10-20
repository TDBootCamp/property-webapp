import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ECommerceComponent } from './layouts/e-commerce/e-commerce.component';
import { EcommerceParallaxBannerComponent } from './layouts/e-commerce/ecommerce-parallax-banner/ecommerce-parallax-banner.component';
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
    component: ECommerceComponent,
    data: {
      title : "PROPERTY MARKET"
    }
  },
  {
    path : 'search',
    component: EcommerceSearchBarComponent ,
    data: {
      title : "PROPERTY MARKET"
    }
  },
  {
    path : 'landing',
    component: LandingComponent,
    data: {
      title : "PROPERTY MARKET"
    }
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
