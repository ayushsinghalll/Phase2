import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list.component';
import { StarComponent } from './star/star.component';
import { C1Component } from './c1/c1.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { RepeatPipe } from './repeat.pipe';
import { ProductService } from 'src/app/shared/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from 'src/app/inmeoryeventdbservice';
import { ProductAddComponent } from './products/product-add.component';
import { CreateTrusteeComponent } from './trustees/create-trustee.component';
import { EditTrusteeComponent } from './trustees/edit-trustee.component';
import { HeaderComponent } from './trustees/header.component';
import { SidebarComponent } from './trustees/sidebar.component';
import { TrusteeListComponent } from './trustees/trustee-list.component';
import { ViewTrusteeComponent } from './trustees/view-trustee.component';
import { EmojiDirective } from './emoji.directive';
import { EmployeeComponent } from './employee/employee.component';
import { GetValidatorDirective } from './employee/get-validator.directive';
import { StudentAddComponent } from './student/student-add.component';
import { EmployeeArrayComponent } from './employee/employee-array.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeLeaveComponent } from './employee/employee-leave.component';
import { EmployeeSuggestionsComponent } from './employee/employee-suggestions.component';
import { GreetComponent } from './greet/greet.component';
import { MenuComponent } from './home/menu.component';
import { ShellComponent } from './home/shell.component';
import { LoginComponent } from './user/login.component';
import { AnimalsComponent } from './animals/animals.component';
import { GreetingsComponent } from './greetings/greetings.component';
import {CardListComponent} from "./cards/cardlist.component";
import { CardComponent } from './cards/card.component';
import {TodoModule} from "./todo/todo.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({

    declarations: [
        AppComponent,
        PentHouseComponent,
        WelcomeComponent,
        FlatListComponent,
        ProductsListComponent,
        StarComponent,

        C1Component,
        AComponent,
        BComponent,
        CartComponent,
        TransformDataPipe,
        RepeatPipe,
        NavBarComponent,
        EventsListComponent,
        EventDetailComponent,
        ProductAddComponent,
        CreateTrusteeComponent,
        EditTrusteeComponent,
        HeaderComponent,
        SidebarComponent,
        TrusteeListComponent,
        ViewTrusteeComponent,
        EmojiDirective,
        EmployeeComponent,
        GetValidatorDirective,
        StudentAddComponent,
        EmployeeArrayComponent,
        HomeComponent,
        DashBoardComponent,
        AboutUsComponent,
        PagenotfoundComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        EmployeeLeaveComponent,
        EmployeeSuggestionsComponent,
        GreetComponent,
        MenuComponent,
        ShellComponent,
        LoginComponent,
        AnimalsComponent,
        GreetingsComponent,
        CardListComponent,
        CardComponent,

    ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
