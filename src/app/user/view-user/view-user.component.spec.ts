import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ViewUserComponent } from './view-user.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppMaterialModule } from 'src/app/app-material.module'
import { RouterTestingModule } from '@angular/router/testing'

describe('ViewUserComponent', () => {
  let component: ViewUserComponent
  let fixture: ComponentFixture<ViewUserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FlexLayoutModule,
        AppMaterialModule,
        RouterTestingModule,
      ],
      declarations: [ViewUserComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
