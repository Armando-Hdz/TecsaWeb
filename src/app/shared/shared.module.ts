import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SocialComponent } from "./social/social.component";

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SocialComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class SharedModule{
}
