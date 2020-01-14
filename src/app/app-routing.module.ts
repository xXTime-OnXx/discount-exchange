import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './_core/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'codes', loadChildren: './pages/codes/codes.module#CodesPageModule', canActivate: [AuthGuard] },
  { path: 'discover', loadChildren: './pages/discover/discover.module#DiscoverPageModule', canActivate: [AuthGuard] },
  { path: 'add-discount', loadChildren: './pages/add-discount/add-discount.module#AddDiscountPageModule', canActivate: [AuthGuard] },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
