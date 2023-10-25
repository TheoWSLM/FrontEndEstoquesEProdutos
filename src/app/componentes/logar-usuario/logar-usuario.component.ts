import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logar-usuario',
  templateUrl: './logar-usuario.component.html',
  styleUrls: ['./logar-usuario.component.css']
})
export class LogarUsuarioComponent {
  @Output() mostrarFormularioLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  
fecharFormulario(){
this.mostrarFormularioLogin.emit(false);
  }
}
