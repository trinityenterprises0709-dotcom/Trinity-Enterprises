import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    DetailsComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
