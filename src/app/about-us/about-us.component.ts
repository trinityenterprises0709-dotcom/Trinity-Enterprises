
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  // State for each "Read More" section
  showMore1: boolean = false;
  showMore2: boolean = false;
  showMore3: boolean = false;

  toggleDetails(event: Event, section: number): void {
    event.preventDefault(); // Prevent default anchor behavior

    // Toggle the respective section's state
    if (section === 1) {
      this.showMore1 = !this.showMore1;
    } else if (section === 2) {
      this.showMore2 = !this.showMore2;
    } else if (section === 3) {
      this.showMore3 = !this.showMore3;
    }
  }
}
