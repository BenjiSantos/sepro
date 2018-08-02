import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeproReportsComponent } from './sepro-reports/sepro-reports.component';
import { HeaderComponent } from './sepro-reports/header/header.component';
import { FooterComponent } from './sepro-reports/footer/footer.component';
import { ReportsComponent } from './sepro-reports/reports/reports.component';
import { LoginComponent } from './sepro-reports/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SeproReportsComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
