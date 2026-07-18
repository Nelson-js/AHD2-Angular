import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private http = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  //Método para obtener todos los usuarios de la API JSONPlaceholder
  obtenerTodosUsuarios(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.apiUrl);
  }
  //Método Update usuario


  //Método registrar usuario

}
