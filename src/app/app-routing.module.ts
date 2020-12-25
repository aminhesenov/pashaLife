import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PersonalComponent } from './personal/personal.component';
import { PositionComponent } from './position/position.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'personal', component: PersonalInformationComponent},
  {path: 'position', component: PositionComponent},
  {path: 'structure', component: StructureComponent},
  {path: 'test', component: PersonalComponent},
  {path: 'dashboard1', component: DashboardOneComponent},
  {path: 'dashboard2', component: DashboardTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
