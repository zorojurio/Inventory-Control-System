import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {EditCustomerComponent} from './customers/edit-customer/edit-customer.component';
import {CustomerComponent} from './customers/customer/customer.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CustomerService} from './customers/customer.service';
import {AuthUserInterceptorService} from './auth-user-interceptor.service';
import {DataTablesModule} from 'angular-datatables';
import { EmailComponent } from './communication/email/email.component';
import { SmsComponent } from './communication/sms/sms.component';
import { FileuploadComponent } from './files/fileupload/fileupload.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { FileEditComponent } from './files/file-edit/file-edit.component';
import { FileDetailComponent } from './files/file-detail/file-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    EditCustomerComponent,
    CustomerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    CustomerAddComponent,
    EmailComponent,
    SmsComponent,
    FileuploadComponent,
    FileListComponent,
    FileEditComponent,
    FileDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  bootstrap: [AppComponent],
  providers: [ CustomerService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptorService, multi: true},

  ]
})
export class AppModule {
}
