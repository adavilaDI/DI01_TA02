import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, ToastController, IonFooter, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //TODO añade los componentes de Ionic y FormsModule a imports
  imports: [IonLabel, IonList,
    IonHeader, IonToolbar, IonTitle, IonContent,
    FormsModule, IonFooter, IonItem, IonButton],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  elementos: Elemento[] = [
    // Ejemplo:
    // { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción breve', categoria: 'Cat A' },
    {id: 1, nombre: "La taberna de Silos", descripcion: "Como un Philip Marlowe de la Edad Media, Gonzalo de Berceo, poeta y copista, se empeña en encontrar al asesino de un monje en el monasterio de Silos.", categoria: "suspense"},
    {id: 2, nombre: "La elegancia del erizo", descripcion: "En un inmueble burgues de París nada es lo que parece.Dos de sus habitantes esconden un secreto", categoria: "narrativa"},
    {id: 3, nombre: "Mapa de soledades", descripcion: "Se puede estar solo por muchos motivos. Hay solitarios forzosos y solitarios por eleccion", categoria: "ensayo"},
    {id: 4, nombre: "Historias de Napoleón, sus esposas y otras mujeres", descripcion: "Las experiencias amorosas de Napoleón con el rigor histórico y la amenidad de un maestro del género", categoria: "historica"},
    {id: 5, nombre: "Años de mentiras", descripcion: "El genio no se copia y tampoco es posible fabricar un best seller ¿o si?", categoria: "suspense"}
  ];

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    if (!this.elementosFiltrados){
      return true; //Modificar
    }
    return false;
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    if (!this.busqueda.trim()){
      return this.elementos;
    }
    return this.elementos.filter(element => element.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  private toastController = inject(ToastController);

  constructor() {}

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert" 
    const toastController = await this.toastController.create({
      message: 'Hay elementos en la lista',
      duration: 2000,
      position: 'bottom'
    });
    await toastController.present();
  }
}
