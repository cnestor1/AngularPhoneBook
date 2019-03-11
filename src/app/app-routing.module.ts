import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "detail", component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
