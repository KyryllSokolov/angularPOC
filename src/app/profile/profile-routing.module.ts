import { RouterModule, Routes } from '@angular/router';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PasswordComponent } from './password/password.component';
import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '', component: ProfilePageComponent, children: [
      { path: 'basic-info', component: BasicInformationComponent },
      { path: 'services', component: MyServicesComponent },
      { path: 'password', component: PasswordComponent },
      { path: '', redirectTo: 'basic-info', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule {}
