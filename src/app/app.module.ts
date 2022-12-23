import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';

import {AnimalListComponent} from "./animals/animal-list.component";
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { StarComponent } from './star/star.component';

@NgModule({
    declarations: [
        AppComponent,
        PentHouseComponent,
        WelcomeComponent,
        FlatListComponent,
        AnimalListComponent,
        ProductComponent,
        StarComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
