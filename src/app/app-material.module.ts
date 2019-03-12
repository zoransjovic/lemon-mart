import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class AppMaterialModule {}
