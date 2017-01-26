import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import  { FirebaseService } from './services/firebase.service';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyA2RWTnKJ3zJgHF62fqxI1ArrS-3UlRlDM",
  authDomain: "businesscontacts-e8369.firebaseapp.com",
  databaseURL: "https://businesscontacts-e8369.firebaseio.com",
  storageBucket: "businesscontacts-e8369.appspot.com",
  messagingSenderId: "239601150773"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
