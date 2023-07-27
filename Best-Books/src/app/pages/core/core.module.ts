import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [HomeComponent , HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent, SpinnerComponent],
})
export class CoreModule { }