import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeFourComponent } from './components/shop/home-four/home-four.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
     pathMatch: 'full'
  },
  {
    path: '',
    component: HomeFourComponent
  },
  {
    path: '',
    component: HomeFourComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)

      },
      {
        path: 'blog',
        loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home/one'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
