export interface ISleeperLeague {
  total_rosters: number
  roster_positions: IRosterPositions[]
  loser_bracket_id?: string
  group_id?: string
  bracket_id?: string
  previous_league_id: string
  league_id: string
  draft_id: string
  avatar?: string
  company_id?: string
  scoring_settings: IScoringSettings
  sport: string
  season_type: string
  season: string
  shard?: number
  settings: ILeagueSettings
  status: string
  name: string
}

export interface ILeagueSettings {
  reserve_allow_cov: number
  reserve_slots: number
  leg: number
  offseason_adds: number
  bench_lock: number
  trade_review_days: number
  league_average_match: number
  waiver_type: number
  max_keepers: number
  type: number
  pick_trading: number
  disable_trades: number
  daily_waivers: number
  taxi_years: number
  trade_deadline: number
  veto_show_votes: number
  reserve_allow_sus: number
  reserve_allow_out: number
  playoff_round_type: number
  waiver_day_of_week: number
  taxi_allow_vets: number
  reserve_allow_dnr: number
  veto_auto_poll: number
  commissioner_direct_invite: number
  reserve_allow_doubtful: number
  waiver_clear_days: number
  playoff_week_start: number
  daily_waivers_days: number
  taxi_slots: number
  playoff_type: number
  daily_waivers_hour: number
  num_teams: number
  veto_votes_needed: number
  playoff_teams: number
  playoff_seed_type: number
  start_week: number
  reserve_allow_na: number
  draft_rounds: number
  taxi_deadline: number
  capacity_override: number
  disable_adds: number
  waiver_budget: number
  best_ball: number
}

export interface IScoringSettings {
  st_ff: number
  pts_allow_7_13: number
  def_st_ff: number
  rec_yd: number
  fum_rec_td: number
  pts_allow_35p: number
  pts_allow_28_34: number
  fum: number
  rush_yd: number
  pass_td: number
  blk_kick: number
  pass_yd: number
  safe: number
  def_td: number
  fgm_50p: number
  def_st_td: number
  fum_rec: number
  rush_2pt: number
  xpm: number
  pts_allow_21_27: number
  fgm_20_29: number
  pts_allow_1_6: number
  fum_lost: number
  def_st_fum_rec: number
  int: number
  fgm_0_19: number
  pts_allow_14_20: number
  rec: number
  ff: number
  fgmiss: number
  st_fum_rec: number
  rec_2pt: number
  rush_td: number
  xpmiss: number
  fgm_30_39: number
  rec_td: number
  st_td: number
  pass_2pt: number
  pts_allow_0: number
  pass_int: number
  fgm_40_49: number
  sack: number
}

export interface IUser {
  user_id: string,
  username: string,
  display_name: string,
  avatar: string,
  metadata: any,
  is_owner: boolean
}

export interface IRoster {
  starters: string[]
  settings: any
  roster_id: number
  reserve: string[]
  players: string[]
  owner_id: string
  league_id: string
}

export enum IRosterPositions {
  QB = 'QB',
  RB = 'RB',
  WR = 'WR',
  TE = 'TE',
  FLEX = 'FLEX',
  K = 'K',
  DEF = 'DEF',
  BN = 'BN',
}
