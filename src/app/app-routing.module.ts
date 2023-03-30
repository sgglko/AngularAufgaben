import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  // default routes
  { path: '', component: HomeComponent },
  // home routes
  {path: 'home', component: HomeComponent },
  // sayingHello routes
  { path: 'sayingHello', loadChildren: () => import('./saying-hello/saying-hello.module').then(m => m.SayingHelloModule) },
  // countingCharacters routes
  { path: 'countingCharacters', loadChildren: () => import('./counting-characters/counting-characters.module').then(m => m.CountingCharactersModule) },
  // rectangularRoom routes
  { path: 'RectangularRoom', loadChildren: () => import('./rectangular-room/rectangular-room.module').then(m => m.RectangularRoomModule) },
  // Human in Space routes
  { path: 'HumanInSpace', loadChildren: () => import('./human-in-space/human-in-space.module').then(m => m.HumanInSpaceModule) },
  // page not found routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
