import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { ProfileComponent } from './profile/profile.component'
import { LogoutComponent } from './logout/logout.component'
import { UserMaterialModule } from './user-material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppMaterialModule } from '../app-material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SharedComponentsModule } from '../shared-components.module'

@NgModule({
  declarations: [ProfileComponent, LogoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentsModule,
  ],
})
export class UserModule {}
