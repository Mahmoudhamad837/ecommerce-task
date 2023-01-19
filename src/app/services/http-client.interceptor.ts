import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

const AUTH_URLS = [
  "cart"
];

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
      AUTH_URLS.forEach(ele=>{
        if(request.url.match(ele)){
          if (token) {
            // If we have a token, we set it to the header
            let headers = request.headers.set("Authorization", 'Bearer ' + localStorage.getItem('token'))
            request = request.clone({
               headers
            });
         }
        }
      })


    return next.handle(request)
    .pipe(
      catchError((err: any) => {
          if (err && err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
                this.router.navigate(['/']);
                localStorage.removeItem('token');
                break;

              default:
                const error = err.error.error || err.statusText;
            }
            return throwError(()=> err);
          }
          return null;
      })
     )
    }
  }
