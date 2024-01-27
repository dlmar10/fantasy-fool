import { NgIf } from '@angular/common'
import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  leagueId = new FormControl('', [Validators.required])

  @Input({ transform: booleanAttribute }) showNevermind = false
  @Output() onNoClick = new EventEmitter()
  @Output() onYesClick = new EventEmitter<string>()

  onNevermindClick(): void {
    this.onNoClick.emit()
  }

  onLoginClick(): void {
    if (!this.leagueId.value) return

    this.onYesClick.emit(this.leagueId.value)
  }
}
