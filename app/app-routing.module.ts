import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export class AppRoutingModule {}
