import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './components/owners-list/owners-list.component';
import { HomeComponent } from './components/home/home.component';
import { VetsComponent } from './components/vets/vets.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { OwnerInfoComponent } from './components/owner-info/owner-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableComponent } from './components/misc/editable/editable.component';
import { EditableSelectComponent } from './components/misc/editable-select/editable-select.component';


const routes: Routes = [
  {path: 'owners/:id', component: OwnerInfoComponent},
  {path: 'owners', component: OwnersListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vets', component: VetsComponent},
  {path: 'add-owner', component: AddOwnerComponent},
  {path: 'search/:keyword', component: OwnersListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    OwnersListComponent,
    HomeComponent,
    VetsComponent,
    AddOwnerComponent,
    OwnerInfoComponent,
    EditableComponent,
    EditableSelectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
