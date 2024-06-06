import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { ReversePipe } from './reverse.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    RandomNumbersComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
