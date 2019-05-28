import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { PasswordComponent } from './password/password.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { DemoMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicInformationComponent,
    PasswordComponent,
    MyServicesComponent,
    ProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }
