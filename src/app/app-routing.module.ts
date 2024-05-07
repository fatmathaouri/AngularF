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


const routes: Routes = [
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
  {path:"profile/:id",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
