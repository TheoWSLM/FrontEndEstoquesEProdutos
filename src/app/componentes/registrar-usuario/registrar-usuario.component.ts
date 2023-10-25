import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  @Output() mostrarFormularioRegistrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  fecharFormulario(){
  this.mostrarFormularioRegistrar.emit(false);
    }
}
