import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DuckService } from "./duck.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DuckService],
  bootstrap: [AppComponent],
})
export class AppModule {}
