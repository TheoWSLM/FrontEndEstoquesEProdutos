import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() mostrarFormularioLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() mostrarFormularioRegistrar: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  formularioLoginAtivado() {
    this.mostrarFormularioLogin.emit(true);
  }

  formularioRegistrarAtivado() {
    this.mostrarFormularioRegistrar.emit(true);
  }
  
}
