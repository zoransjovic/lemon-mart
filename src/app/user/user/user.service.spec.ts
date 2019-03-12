import { TestBed } from '@angular/core/testing'

import { UserService } from './user.service'
import { AuthService } from 'src/app/auth/auth.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthServiceFake } from 'src/app/auth/auth.service.fake'

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [UserService, { provide: AuthService, useClass: AuthServiceFake }],
      imports: [HttpClientTestingModule],
    })
  )

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService)
    expect(service).toBeTruthy()
  })
})
