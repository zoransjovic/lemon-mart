import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerComponent } from './manager.component'
import { ManagerMaterialModule } from './manager-material.module'
import { AppMaterialModule } from '../app-material.module'
import { UserManagementComponent } from './user-management/user-management.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { AuthGuardService } from '../auth/auth-guard.service'
import { AuthService } from '../auth/auth.service'
import { SharedComponentsModule } from '../shared-components.module'
import { UserTableComponent } from './user-table/user-table.component'
import { UserService } from '../user/user/user.service'
import { UserResolve } from '../user/user/user.resolve'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    AppMaterialModule,
    SharedComponentsModule,
    ManagerMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [AuthGuardService, AuthService, UserService, UserResolve],
})
export class ManagerModule {}
