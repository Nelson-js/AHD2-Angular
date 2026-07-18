import { Component } from '@angular/core';
import { UserComponent } from './pages/user-component/user-component';
import { PostsComponent } from './pages/posts-component/posts-component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, PostsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
