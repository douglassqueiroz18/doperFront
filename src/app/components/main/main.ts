import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { GridsClientes } from "../grids-clientes/grids-clientes";

@Component({
  selector: 'app-main',
  imports: [Header, Hero, GridsClientes],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
