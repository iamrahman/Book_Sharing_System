// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarnonlineComponent } from './earnonline/earnonline.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostbookComponent } from './dashboard/postbook/postbook.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { UserdetailsComponent } from './dashboard/userdetails/userdetails.component';
import { AgmCoreModule } from '@agm/core';
import {FileUploadModule} from 'ng2-file-upload';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    DashboardComponent,
    EarnonlineComponent,
    HomepageComponent,
    PostbookComponent,
    HistoryComponent,
    SinglebookComponent,
    UserdetailsComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FileUploadModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI_p90tnoUaols1x78fIOehxYt3AbgXg0'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
