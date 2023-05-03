import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private cache = new BehaviorSubject('');

  constructor(private httpClient: HttpClient) {
  }

  getCocktailsByIngredient(text?: string): Observable<any> {
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + text).subscribe({
      next: (data: any) => {
        this.cache.next(data);
      }, error: (err: HttpErrorResponse) => {
        this.cache.error(err);
      }
    });

    return this.cache.asObservable();
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
