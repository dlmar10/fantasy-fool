import { AsyncPipe } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { Observable } from 'rxjs'
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    LoginComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isHandset$: Observable<boolean>

  @Output() onToggle = new EventEmitter()

  public handleToggle() {
    this.onToggle.emit()
  }
}
