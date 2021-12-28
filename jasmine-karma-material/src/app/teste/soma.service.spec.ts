import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';

describe('SomaService', () => {
  let service: SomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar a soma dos dois números, chegando ao resultado correto', ()=>{
    expect(service.soma(1,2)).toBe(3);
  })

  it ('Deve retornar a media dos dois números', () =>{
    expect (service.media(10, 8)).toBe(9);
  })
});
