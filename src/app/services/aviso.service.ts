import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  sucesso(title: string, message: string) {
    Swal.fire(title, message, 'success');
  }

  erro(title: string, message: string) {
    Swal.fire(title, message, 'error');
  }

  confirmarExcluir(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sim, deletar',
    });
  }
}
