import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from './services/common-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptorInterceptor } from './interceptor/common-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    NgxPaginationModule,
    
  ],
  providers: [CommonServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
