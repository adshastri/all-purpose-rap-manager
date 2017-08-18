import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdGridListModule, MdCardModule, MdIconModule, MdDialogModule, MdInputModule } from '@angular/material';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { SongsService } from './songs.service';
import { AuthService } from './auth.service';
import { TokenManagerService } from './token-manager.service';

import { AppComponent } from './app.component';
import { DashboardComponent, PasswordDialog, AddDialog, RemoveDialog } from './dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PasswordDialog,
    AddDialog,
    RemoveDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
  ],
  entryComponents: [
  	PasswordDialog,
    AddDialog,
    RemoveDialog
  ],
  providers: [SongsService, AuthService, TokenManagerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
