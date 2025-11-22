import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-heavy-fabrication-service',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './heavy-fabrication-service.component.html',
  styleUrls: ['./heavy-fabrication-service.component.css']
})

export class HeavyFabricationServiceComponent {
}
