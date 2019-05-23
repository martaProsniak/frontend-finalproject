import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AddHeadersInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone request to add the header
    const clonedRequest = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    });
    return next.handle(clonedRequest);
  }
}
