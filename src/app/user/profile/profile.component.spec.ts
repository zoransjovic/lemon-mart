import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileComponent } from './profile.component'
import {
  commonTestingProviders,
  commonTestingModules,
} from 'src/app/common/common.testing'
import { UserMaterialModule } from '../user-material.module'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: commonTestingProviders,
      imports: commonTestingModules.concat([UserMaterialModule]),
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
