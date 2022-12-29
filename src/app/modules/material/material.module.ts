import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//? Modulos empleados de angular material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSortModule } from '@angular/material/sort';
//? Schematics
import { NavComponent } from './components/nav/nav.component';
import { FormularioDireccionComponent } from './components/formulario-direccion/formulario-direccion.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArbolComponent } from './components/arbol/arbol.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    FormularioDireccionComponent,
    NavComponent,
    TablaComponent,
    DashboardComponent,
    ArbolComponent,
    DragDropComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    //! Exportamos nuestros schematics
    FormularioDireccionComponent,
    NavComponent,
    TablaComponent,
    DashboardComponent,
    ArbolComponent,
    DragDropComponent
  ],
})
export class MaterialModule {}
