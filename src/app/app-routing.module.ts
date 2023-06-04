import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ExampleComponent } from './pages/home-page/example/example.component';
import { ListingComponent } from './pages/home-page/listing/listing.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomePageComponent, children: [
    { path: "example", component: ExampleComponent },
    { path: "listing", component: ListingComponent },
    { path: "**", redirectTo: "example"}
  ] },
  { path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
