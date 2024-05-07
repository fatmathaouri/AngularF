import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LoadingComponent } from './loading/loading.component';
import { AdminComponent } from './admin/admin.component';
import { TableauComponent } from './tableau/tableau.component';
import { WidgetComponent } from './widget/widget.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateActualiteComponent } from './update-actualite/update-actualite.component';
import { ProfileComponent } from './profile/profile.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  
    LoadingComponent,
       AdminComponent,
       TableauComponent,
       WidgetComponent,
       UpdateUserComponent,
       UpdateEventComponent,
       UpdateCommentComponent,
       UpdateArticleComponent,
       UpdateActualiteComponent,
       ProfileComponent,
       Navbar1Component,
       DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
