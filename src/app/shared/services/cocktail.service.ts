import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ReplaySubject, catchError, retry, tap, take, interval } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {
  private subject = new ReplaySubject(1);

  constructor(private http: HttpClient) {
  }

  public get data$(): Observable<any> {
    return this.subject.asObservable();
  }

  public getCocktailsByIngredientName(text: string) {
    this.http.get<any>(environment.urlAddress + 'i=' + text).subscribe({
      next: (data: any) => {
        this.subject.next(data.drinks);
      }
    });
  }

  public getCocktailByName(name?: string): void {
    this.http.get<any>(environment.urlAddress + 's=' + name).subscribe({
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
