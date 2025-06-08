import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Import core services and interceptors
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
} 