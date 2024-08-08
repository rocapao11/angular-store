import { Routes } from '@angular/router';

import{ ListComponent } from '@products/pages/list/list.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { ProductComponent } from '@products/components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
];
