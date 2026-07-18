import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsModel } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  //Método para obtener todos los Posts de la API JSONPlaceholder
  obtenerTodosPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(this.apiUrl);
  }

  //Método Update posts


  //Método registrar posts

}
