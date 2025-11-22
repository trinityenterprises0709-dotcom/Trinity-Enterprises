import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit {
  private isotope: any = null;
  private platformId = inject(PLATFORM_ID);
  @Input() showHeader: boolean = true; // Input to control header visibility

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const Isotope = (await import('isotope-layout')).default;
      const GLightbox = (await import('glightbox')).default;

      // Initialize Isotope
      this.isotope = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        percentPosition: true
      });

      // ✅ Initialize Glightbox
      GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        closeButton: true, // ensure close icon shows
      });

      // Handle filter clicks
      const filters = document.querySelectorAll('.portfolio-filters li');
      filters.forEach(filter => {
        filter.addEventListener('click', (event) => {
          event.preventDefault();

          filters.forEach(el => el.classList.remove('filter-active'));
          (event.target as HTMLElement).classList.add('filter-active');

          const filterValue = (event.target as HTMLElement).getAttribute('data-filter');
          this.isotope?.arrange({ filter: filterValue });
        });
      });
    }
  }
}
