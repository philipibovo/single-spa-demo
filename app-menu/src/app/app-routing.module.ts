import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: '', component: SideBarComponent },
  {
    path: 'cadastros',
    component: SideBarComponent,
    children: [{ path: 'usuario', component: EmptyRouteComponent }],
  },
  {
    path: 'relatorios',
    component: SideBarComponent,
    children: [{ path: 'usuarios', component: EmptyRouteComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
