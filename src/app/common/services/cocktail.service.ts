import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public subject = new Subject<any>();
  public subject$ = this.subject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  public getCocktailsByIngredientByName(text: string): void {
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + text).subscribe({
      next: (data: any) => {
        this.subject.next(data.drinks);
      }, error: (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    });
  }

  getCocktailByName(name?: string): void {
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name).subscribe({
      next: (data: any) => {
        this.subject.next(data.drinks);
      }, error: (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    });
  }

  //
  // getBeverageByCategory(category?: string): Observable<any> {
  //   this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category).subscribe({
  //     next: (data: any) => {
  //       this.cache.next(data);
  //     }, error: (err: HttpErrorResponse) => {
  //       this.handleError(err);
  //     }
  //   });
  //
  //   return this.cache.asObservable();
  // }
  //
  // getCocktailById(id?: number): Observable<any> {
  //   this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id).subscribe({
  //     next: (data: any) => {
  //       this.cache.next(data);
  //     }, error: (err: HttpErrorResponse) => {
  //       this.handleError(err);
  //     }
  //   });
  //
  //   return this.cache.asObservable();
  // }

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
  }
}
