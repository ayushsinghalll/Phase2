import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagerComponent} from "./manager.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";

const routes:Routes=[
  {path:'',component:ManagerComponent},

]
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})

export class ManagerRoutingModule{}
