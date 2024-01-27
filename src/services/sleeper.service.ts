import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, of, Subject, tap } from 'rxjs'
import { ISleeperLeague } from '../types/Sleeper'
import { MessageService } from './message.service'

const SLEEPER_URL = 'https://api.sleeper.app/v1'

@Injectable({
  providedIn: 'root'
})
export class SleeperService {
  leagueId: Subject<string | null> = new Subject<string | null>()
  league: Subject<ISleeperLeague | undefined> = new Subject<ISleeperLeague | undefined>()

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  leagueIdChange(data: string | null) {
    this.leagueId.next(data)
  }

  leagueChange(data: ISleeperLeague | undefined) {
    this.league.next(data)
  }

  getLeague(leagueId: string) {
    return this.http.get<ISleeperLeague>(`${SLEEPER_URL}/league/${leagueId}`)
      .pipe(
        tap(_ => this.log(`fetched league ${leagueId}`)),
        catchError(this.handleError<ISleeperLeague>('getLeague', undefined))
      )
  }

  getUsers(leagueId: string) {
    return this.http.get<any>(`${SLEEPER_URL}/league/${leagueId}/users`)
      .pipe(
        tap(_ => this.log(`fetched users for league ${leagueId}`)),
        catchError(this.handleError<any>('getUsers', undefined))
      )
  }

  getRosters(leagueId: string) {
    return this.http.get<any>(`${SLEEPER_URL}/league/${leagueId}/rosters`)
      .pipe(
        tap(_ => this.log(`fetched rosters for league ${leagueId}`)),
        catchError(this.handleError<any>('getRosters', undefined))
      )
  }

  private log(message: string) {
    this.messageService.add(`SleeperService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
