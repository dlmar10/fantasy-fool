import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { map } from 'rxjs/operators'
import { SleeperService } from '../../services/sleeper.service'
import { ISleeperLeague } from '../../types/Sleeper'

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    JsonPipe
  ]
})
export class LeagueComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver)
  private sleeperService: SleeperService = inject(SleeperService)

  public league?: ISleeperLeague = undefined

  public ngOnInit() {
    this.sleeperService.league.subscribe(league => {
      this.league = league
    })
  }

  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ]
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ]
    })
  )
}
