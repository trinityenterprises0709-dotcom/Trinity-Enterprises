import { bootstrapApplication as bootstrapApplicationWithContext, type BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideServerRendering } from '@angular/platform-server';

export default function bootstrapServer(context: BootstrapContext) {
    return bootstrapApplicationWithContext(AppComponent, {
        ...appConfig,
        providers: [
            provideServerRendering(),
            ...(appConfig.providers || []),
        ],
    }, context);
}
