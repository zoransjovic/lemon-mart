import { TestBed } from '@angular/core/testing'

import { AuthGuardService } from './auth-guard.service'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'

describe('AuthGuardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuardService),
    })
  )

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService)
    expect(service).toBeTruthy()
  })
})
