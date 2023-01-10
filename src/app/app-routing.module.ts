import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./manager/user/user.component";
import {AdminComponent} from "./manager/admin/admin.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home/manager',
    loadChildren: () =>
      import('./manager/manager.module').then((m) => m.ManagerModule),
  },
  {path:'home/manager/user',component:UserComponent},
  {path:'home/manager/admin',component:AdminComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
