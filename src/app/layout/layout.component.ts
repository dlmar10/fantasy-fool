import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { AsyncPipe } from '@angular/common'
import { Component, inject, ViewChild } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { LeagueComponent } from '../league/league.component'
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import { MenuComponent } from './menu/menu.component'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    LoginComponent,
    LeagueComponent,
    RouterOutlet,
    MenuComponent,
    HeaderComponent
  ]
})
export class LayoutComponent {
  @ViewChild('drawer', { static: true }) drawer: MatSidenav

  private breakpointObserver = inject(BreakpointObserver)

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
}
