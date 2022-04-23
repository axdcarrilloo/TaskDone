
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTaskComponent } from './components/task/view-task/view-task.component';

const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'listar-actividades', component: ViewTaskComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }