import { Component, inject, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router'
import { CookieService } from '../services/cookie.service'
import { SleeperService } from '../services/sleeper.service'
import { LayoutComponent } from './layout/layout.component'
import { LoginComponent } from './layout/login/login.component'
import { LeagueComponent } from './league/league.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, MatButtonModule, MatToolbarModule, MatIconModule, LoginComponent, LeagueComponent, MatSidenavModule, MatListModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  platformId: Object = inject(PLATFORM_ID)
  sleeperService: SleeperService = inject(SleeperService)
  cookieService: CookieService = inject(CookieService)

  title = 'fantasy-fool'
  leagueId: string | null = null

  constructor() {}

  public ngOnInit() {
    this.sleeperService.leagueId.subscribe(id => {
      this.leagueId = id

      if (id) {
        if (isPlatformBrowser(this.platformId)) {
          // If League ID exists, set it to session and fetch league settings
          this.cookieService.setSession('leagueId', id)
        }

        this.getLeague(id)
      } else {
        if (isPlatformBrowser(this.platformId)) {
          // Else, remove it from session and clear league settings
          this.cookieService.removeSession('leagueId')
        }

        this.sleeperService.leagueChange(undefined)
      }
    })

    if (isPlatformBrowser(this.platformId)) {
      // Check session on init for pre-existing League ID
      const sessionLeagueId = this.cookieService.getSession<string>('leagueId')

      if (sessionLeagueId) {
        this.sleeperService.leagueIdChange(sessionLeagueId)
      }
    }
  }

  getLeague(leagueId: string) {
    this.sleeperService.getLeague(leagueId).subscribe(league => {
      this.sleeperService.leagueChange(league)
    })
  }
}
