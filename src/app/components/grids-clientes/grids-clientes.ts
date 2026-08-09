import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import clientesData from '../../../assets/clientes.json';

interface Cliente {
  name: string;
  url: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-grids-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grids-clientes.html',
  styleUrl: './grids-clientes.scss',
})
export class GridsClientes {
  clientes: Cliente[] = [];
  carregando = false;

  constructor() {
    const data = clientesData as { clientes?: Cliente[] } | Cliente[];
    this.clientes = Array.isArray(data) ? data : data.clientes ?? [];
  }
}