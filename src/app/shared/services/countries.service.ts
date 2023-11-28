import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private subject = new ReplaySubject(1);

  constructor(private http: HttpClient) {
  }

  public get data$(): Observable<any> {
    return this.subject.asObservable();
  }

  public getAllCountries(): Observable<any> {
    this.http.get<any>(environment.urlAddress).subscribe({
      next: (data: any) => {
        this.subject.next(data);
      }, error: (error) => {
        this.handleError(error);
      }
    });
    return this.subject;
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
  }
}
