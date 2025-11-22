import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import and register Swiper web components
import { register } from 'swiper/element/bundle';
register();

// Bootstrap the Angular app
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
