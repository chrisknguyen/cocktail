import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, share, ReplaySubject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {
  public subject = new BehaviorSubject<any>(1);
  public subject$ = this.subject;

  constructor(private httpClient: HttpClient) {
  }

  public getCocktailsByIngredientName(text: string): Observable<any> {
    this.httpClient.get(environment.urlAddress + text).subscribe({
      next: (data: any) => {
        this.subject.next(data.drinks);
      }
    });

    return this.subject.asObservable();
  }

  // public getCocktailsByIngredientName(text?: string): Observable<any> {
  //   return this.httpClient.get(environment.urlAddress + text);
  // }

  // public getCocktailsByIngredientName(text?: string): Observable<any> {
  //   this.httpClient.get(environment.urlAddress + text).subscribe({
  //     next: (data: any) => {
  //       this.subject.next(data.drinks);
  //     },
  //   });
  //
  //   return this.subject.asObservable();
  // }

  // public getCocktailsByIngredientName(text: string): void {
  //   this.httpClient.get(environment.urlAddress + text).subscribe({
  //     next: (data: any) => {
  //       this.subject.next(data.drinks);
  //     }
  //   });
  // }

  getCocktailByName(name?: string): void {
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name).subscribe({
      next: (data: any) => {
        this.subject.next(data.drinks);
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
