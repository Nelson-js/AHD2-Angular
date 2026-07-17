import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { UserModel } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent implements OnInit{
  
  private servicioUsuario = inject(UserService);

  usuarios: UserModel[] = [];

  ngOnInit(): void {
  console.log('ngOnInit');

  this.servicioUsuario.obtenerTodosUsuarios().subscribe({
    next: (datos) => {
      console.log('Datos:', datos);
      this.usuarios = datos;
      console.log('Cantidad:', this.usuarios.length);
    },
    error: (err) => console.error(err)
  });
}

}
