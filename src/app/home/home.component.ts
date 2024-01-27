import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { map } from 'rxjs/operators'
import { SleeperService } from '../../services/sleeper.service'
import { LoginFormComponent } from '../components/login-form/login-form.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    LoginFormComponent
  ]
})
export class HomeComponent {
  private sleeperService: SleeperService = inject(SleeperService)
  private breakpointObserver = inject(BreakpointObserver)

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
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

  onLogin(leagueId: string): void {
    this.sleeperService.leagueIdChange(leagueId)
  }
}
