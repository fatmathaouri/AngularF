import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component';
import { AdminComponent } from './admin/admin.component';
import { TableauComponent } from './tableau/tableau.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateActualiteComponent } from './update-actualite/update-actualite.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';

import { Home2Component } from './home2/home2.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path: "login",component:LoginComponent},
  {path : "register",component:RegisterComponent},
  {path : "loading",component:LoadingComponent},
  {path : "admin",component:AdminComponent},
  {path : "table",component:TableauComponent},
  {path:"update/:idevenement",component:UpdateEventComponent},
  {path:"updatee/:id_article",component:UpdateArticleComponent},
  {path:"updateee/:id_actualite",component:UpdateActualiteComponent},
  {path:"updateuser/:id",component:UpdateUserComponent},
  {path:"updateComment/:commentId",component:UpdateCommentComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path : "article",component:ArticleComponent},
  {path :"event",component:EventComponent},
  {path:"homee",component:Home2Component},
  {path:"details",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
