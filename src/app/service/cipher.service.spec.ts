import { TestBed } from '@angular/core/testing';

import { CipherService } from './cipher.service';

describe('CipherService', () => {
  let service: CipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encode test message', () => {
    let input = "Test input 1";
    let key = "Good fortune";
    let expectedOutput = "ZS6W)N16!!M5";

    expect(service.encode(input, key)).toBe(expectedOutput);
  });

  it('should decode test message', () => {
    let input = "ZS6W)N16!!M5";
    let key = "Good fortune";
    let expectedOutput = "test input 1";

    expect(service.decode(input, key)).toBe(expectedOutput);
  });
});
