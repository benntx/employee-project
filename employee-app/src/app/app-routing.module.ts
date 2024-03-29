import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRoutingComponent } from './employee-routing/employee-routing.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const routes: Routes = [
 { path: 'employees', component: EmployeeComponent },
 { path: 'dashboard', component: DashboardComponent},
 { path: 'employee-routing', component: EmployeeRoutingComponent},
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'detail/:id', component: EmployeeDetailComponent}
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
