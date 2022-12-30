import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';

import {AnimalListComponent} from "./animals/animal-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import { StarComponent } from './star/star.component';
import { CartComponent } from './cart/cart.component';
import { RepeatPipe } from './repeat.pipe';
import {HttpClientModule} from "@angular/common/http";
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event/event-details.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataBaseService} from "../../Service/inMemoryDataBase.service";
import { EmojiDirective } from './emoji.directive';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
    declarations: [
        AppComponent,
        PentHouseComponent,
        WelcomeComponent,
        FlatListComponent,
        AnimalListComponent,
        ProductComponent,
        StarComponent,
        CartComponent,
        RepeatPipe,
        NavbarcomponentComponent,
        EventComponent,
        EventDetailsComponent,
        EmojiDirective,
        TrusteeComponent,
        BookComponent,
        StudentComponent,
        HomeComponent,
        PagenotfoundComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBaseService),
    ReactiveFormsModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
