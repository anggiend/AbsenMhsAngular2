import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';

import { HomeComponent } from './home/home.component';
import { RekapComponent } from './rekap/rekap.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'rekapitulasi',  component: RekapComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
