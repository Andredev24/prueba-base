import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { SimpleGridComponent } from './simple-grid.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { MiBibliotecaModule } from 'mi-biblioteca';

@NgModule({
  imports: [CommonModule, MatTableModule, MiBibliotecaModule, MatButtonModule],
  declarations: [SimpleGridComponent],
  exports: [SimpleGridComponent],
})
export class SimpleGridModule {}
