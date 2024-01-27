import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { SleeperService } from '../../../services/sleeper.service'
import { ISleeperLeague } from '../../../types/Sleeper'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../layout.component.scss', './login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  private router: Router = inject(Router)
  private sleeperService: SleeperService = inject(SleeperService)

  public league?: ISleeperLeague = undefined

  public ngOnInit() {
    this.sleeperService.league.subscribe(league => {
      this.league = league
    })
  }

  public async handleLogin(): Promise<void> {
    await this.router.navigate([''])
  }

  public handleLogout(): void {
    this.sleeperService.leagueIdChange(null)
  }
}
