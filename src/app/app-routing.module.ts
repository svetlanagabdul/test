import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'document', pathMatch: 'full', },
  { path: 'document', component: DocumentComponent, canActivate: [AuthGuard], },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }