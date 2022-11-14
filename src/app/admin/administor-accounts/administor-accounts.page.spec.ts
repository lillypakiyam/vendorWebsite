import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
// import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AdministorAccountsPage } from './administor-accounts.page';

describe('AdministorAccountsPage', () => {
  let component: AdministorAccountsPage;
  let fixture: ComponentFixture<AdministorAccountsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministorAccountsPage ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministorAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
