// Import Module & Komponen dari Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import komponen halaman kita
import { Halaman1Component } from './components/halaman1/halaman1.component';
import { Halaman2Component } from './components/halaman2/halaman2.component';
import { Halaman3Component } from './components/halaman3/halaman3.component';

// Definisikan route yang diinginkan
const routes : Routes = [
    { path: '', component: Halaman1Component },
    { path: 'halaman1', component: Halaman1Component },
    { path: 'halaman2', component: Halaman2Component },
    { path: 'halaman3', component: Halaman3Component },
]

// Module ini akan di import ke app.module.ts
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouterModule{};

// Routed Component berisi komponen yang kemudian akan di masukkkan ke dalam declarations di app.module.ts
export const RoutedComponents = [
    Halaman1Component,
    Halaman2Component,
    Halaman3Component
]