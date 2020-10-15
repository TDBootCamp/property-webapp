import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';

const routes: Routes = [
  {
    path: 'e-commerce',
    component: ECommerceComponent
  },
  {
    path: 'e-commerce/left-sidebar/product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'e-commerce/checkout',
    component: CheckoutComponent
  },
  {
    path: 'e-commerce/checkout/success',
    component: SuccessComponent
  },
  {
    path: 'e-commerce/compare',
    component: CompareComponent
  },
  {
    path: 'e-commerce/cart',
    component: CartComponent
  },
  {
    path: 'e-commerce/left-sidebar/collection/:category',
    component: CollectionLeftSidebarComponent
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
