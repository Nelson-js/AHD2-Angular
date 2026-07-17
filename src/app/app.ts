import { Component } from '@angular/core';
import { UserComponent } from './pages/user-component/user-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
