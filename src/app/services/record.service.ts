import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Record } from '../model/record';
import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private recordsUrl = 'api/records';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getRecords(): Observable<Record[]> {
    // TODO: send the message _after_ fetching the Recordes
    // this.messageService.add('RecordService: fetched Recordes');
    // return of(RecordES);
    return this.http.get<Record[]>(this.recordsUrl)
      .pipe(
        tap(_ => this.log('fetched Recordes')),
        catchError(this.handleError('getRecords', []))
      );
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RecordService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
