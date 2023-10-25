import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-treinamento';
  login = false;
  registrar = false;

  mostrarFormularioLogin(mostrar: boolean) {
    if (mostrar) {
      this.login = true;
    } else {
      this.login=false;
    }
  }

  mostrarFormularioRegistrar(mostrar: boolean) {
    if (mostrar) {
      this.registrar = true;
    } else {
      this.registrar=false;
    }
  }
  

}
