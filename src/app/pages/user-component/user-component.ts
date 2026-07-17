import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { UserModel } from '../../models/user';
import { ConstantPool } from '@angular/compiler';
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
    this.servicioUsuario.obtenerTodosUsuarios().subscribe({
      next: (datos) => {
        this.usuarios = datos;
      }
    })
  }

}
