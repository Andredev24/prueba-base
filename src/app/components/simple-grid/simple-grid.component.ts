import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-simple-grid',
  templateUrl: './simple-grid.component.html',
})
export class SimpleGridComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['solicitud', 'nombreIfi', 'documento', 'direccion', 'fecha'];

  valoresFiltros: any[] = []; // Aquí se almacenan los valores seleccionados

  filtros = [
    {
      name: 'solicitud',
      dataType: 'W',
    },
    {
      name: 'documento',
      dataType: 'W',
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos() {
    this.dataService.obtenerDatos(this.valoresFiltros[0], this.valoresFiltros[1]).subscribe({
      next: respuesta => {
        this.dataSource.data = respuesta;
      },
      error: err => {
        console.error('Error al obtener datos:', err);
      },
    });
  }

  onFiltroValueChange(valor: any, index: number): void {
    this.valoresFiltros[index] = valor;
    console.log('Valores actuales de filtros:', this.valoresFiltros);
  }

  Buscar() {
    this.listarDatos();
  }
}
