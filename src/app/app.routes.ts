import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LeagueComponent } from './league/league.component'
import { ScoringComponent } from './scoring/scoring.component'
import { TeamsComponent } from './teams/teams.component'
import { TradesComponent } from './trades/trades.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'league', component: LeagueComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'trades', component: TradesComponent }
]
