
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, Renderer2, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { ClientsComponent } from "../clients/clients.component";

@Component({
  selector: 'app-details',
  imports: [RouterModule, GalleryComponent, ClientsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements AfterViewInit {
  private isotope: any = null;
  private platformId: any;

  // State for each "Read More" section
  showMore1: boolean = false;
  showMore2: boolean = false;
  showMore3: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    private renderer: Renderer2 // Injecting Renderer2
  ) {
    this.platformId = platformId;
  }

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

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const Isotope = (await import('isotope-layout')).default;

      // Initialize Isotope
      this.isotope = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        percentPosition: true
      });

      // Use Renderer2 to add event listeners
      const filters = document.querySelectorAll('.portfolio-filters li');
      filters.forEach((filter: HTMLElement) => {
        this.renderer.listen(filter, 'click', (event) => {
          event.preventDefault();

          filters.forEach((el: HTMLElement) => el.classList.remove('filter-active'));
          filter.classList.add('filter-active');

          const filterValue = filter.getAttribute('data-filter');
          this.isotope.arrange({ filter: filterValue });
        });
      });
    }
  }

  scrollToSection() {
    const element = document.getElementById('get-started');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

}
