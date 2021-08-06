import { TestBed } from '@angular/core/testing';

import { HidebarService } from './hidebar.service';

describe('HidebarService', () => {
  let service: HidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
