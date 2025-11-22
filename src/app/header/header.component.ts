import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  onMobileMode() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyClass();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.toggleBodyClass();
    // Close all open dropdowns
    const openDropdowns = document.querySelectorAll('.dropdown-active');
    openDropdowns.forEach(el => el.classList.remove('dropdown-active'));
  }

  toggleDropdown(event: Event, dropdown: HTMLElement) {
    event.preventDefault();

    const parentLi = (event.currentTarget as HTMLElement).parentElement as HTMLElement;

    // Close sibling dropdowns at the same level
    const siblingLis = parentLi.parentElement?.children;
    if (siblingLis) {
      Array.from(siblingLis).forEach(li => {
        if (li !== parentLi && li.classList.contains('dropdown-open')) {
          li.classList.remove('dropdown-open');
        }
      });
    }

    // Toggle current dropdown
    parentLi.classList.toggle('dropdown-open');
  }

  // Only close mobile menu on real page link clicks
  onLinkClick(event: Event) {
    this.closeMenu(); // closes mobile menu

    // Also close any open dropdown (desktop)
    const openDropdowns = document.querySelectorAll('.dropdown-open');
    openDropdowns.forEach(el => el.classList.remove('dropdown-open'));
  }

  private toggleBodyClass() {
    if (this.isMenuOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }
}
