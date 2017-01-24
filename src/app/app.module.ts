import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
