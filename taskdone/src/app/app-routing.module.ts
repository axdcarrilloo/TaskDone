
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { ViewTaskComponent } from './components/task/view-task/view-task.component';

const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'listar-actividades', component: ViewTaskComponent },
    { path: 'listar-empleados', component: ViewEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }