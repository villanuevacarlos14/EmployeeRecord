import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Employees',
    loadChildren: () => import('./Employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: '**',
    redirectTo: 'Employees'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
