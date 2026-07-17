import { Component, inject, OnInit, signal } from '@angular/core';
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
export class UserComponent implements OnInit {

  private servicioUsuario = inject(UserService);

  usuarios = signal<UserModel[]>([]);

  ngOnInit(): void {
    this.servicioUsuario.obtenerTodosUsuarios().subscribe(datos => {
      this.usuarios.set(datos);
    });
  }

}
