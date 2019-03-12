import { Component, OnInit } from '@angular/core'
import { Role as UserRole } from '../../auth/role.enum'
import { $enum } from 'ts-enum-util'
import { PhoneType, IUSState, USStateFilter } from './data'
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { UserService } from '../user/user.service'
import { AuthService } from 'src/app/auth/auth.service'
import { IUser, IPhone } from '../user/user'
import {
  BirthDateValidation,
  EmailValidation,
  RequiredTextValidation,
  OneCharValidation,
  OptionalTextValidation,
  USAZipCodeValidation,
  USAPhoneNumberValidation,
} from 'src/app/common/validations'
import { startWith, map } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  Role = UserRole
  PhoneTypes = $enum(PhoneType).getKeys()
  userForm: FormGroup
  states: Observable<IUSState[]>
  userError = ''
  currentUserRole = this.Role.None

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentUserRole = authStatus.userRole)
    )

    // for demo purposes only
    const draftUser = JSON.parse(localStorage.getItem('draft-user'))

    if (!draftUser) {
      // the if condition is for demo purposes only
      this.userService.getCurrentUser().subscribe(user => {
        this.buildUserForm(user)
      })
    }
    this.buildUserForm(draftUser) // draftUser is being passed in for demo purposes only
  }

  buildUserForm(user?: IUser) {
    this.userForm = this.formBuilder.group({
      email: [
        {
          value: (user && user.email) || '',
          disabled: this.currentUserRole !== this.Role.Manager,
        },
        EmailValidation,
      ],
      name: this.formBuilder.group({
        first: [(user && user.name.first) || '', RequiredTextValidation],
        middle: [(user && user.name.middle) || '', OneCharValidation],
        last: [(user && user.name.last) || '', RequiredTextValidation],
      }),
      role: [
        {
          value: (user && user.role) || '',
          disabled: this.currentUserRole !== this.Role.Manager,
        },
        [Validators.required],
      ],
      dateOfBirth: [(user && user.dateOfBirth) || '', BirthDateValidation],
      address: this.formBuilder.group({
        line1: [
          (user && user.address && user.address.line1) || '',
          RequiredTextValidation,
        ],
        line2: [
          (user && user.address && user.address.line2) || '',
          OptionalTextValidation,
        ],
        city: [(user && user.address && user.address.city) || '', RequiredTextValidation],
        state: [
          (user && user.address && user.address.state) || '',
          RequiredTextValidation,
        ],
        zip: [(user && user.address && user.address.zip) || '', USAZipCodeValidation],
      }),
      phones: this.formBuilder.array(this.buildPhoneArray(user ? user.phones : [])),
    })

    this.states = this.userForm
      .get('address')
      .get('state')
      .valueChanges.pipe(
        startWith(''),
        map(value => USStateFilter(value))
      )
  }

  addPhone() {
    this.phonesArray.push(
      this.buildPhoneFormControl(this.userForm.get('phones').value.length + 1)
    )
  }

  get phonesArray(): FormArray {
    return <FormArray>this.userForm.get('phones')
  }

  private buildPhoneArray(phones: IPhone[]) {
    const groups = []

    if (!phones || (phones && phones.length === 0)) {
      groups.push(this.buildPhoneFormControl(1))
    } else {
      phones.forEach(p => {
        groups.push(this.buildPhoneFormControl(p.id, p.type, p.number))
      })
    }
    return groups
  }

  private buildPhoneFormControl(id, type?: string, number?: string) {
    return this.formBuilder.group({
      id: [id],
      type: [type || '', Validators.required],
      number: [number || '', USAPhoneNumberValidation],
    })
  }

  get dateOfBirth() {
    return this.userForm.get('dateOfBirth').value || new Date()
  }

  get age() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

  async save(form: FormGroup) {
    this.userService
      .updateUser(form.value)
      .subscribe(res => this.buildUserForm(res), err => (this.userError = err))
  }
}
