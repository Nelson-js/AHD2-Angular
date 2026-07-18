import { Component, inject, OnInit, signal } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { PostsModel } from '../../models/posts';

@Component({
  selector: 'app-posts-component',
  imports: [],
  templateUrl: './posts-component.html',
  styleUrl: './posts-component.css',
})
export class PostsComponent implements OnInit{
  private servicioPosts = inject(PostsService);

  posts = signal<PostsModel[]>([]);

  ngOnInit(): void {
    this.servicioPosts.obtenerTodosPosts().subscribe(datos => {
      this.posts.set(datos);
    });
  }

}
