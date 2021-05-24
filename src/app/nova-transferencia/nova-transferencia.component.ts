import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.models';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() emissor = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Submit received successfully.');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adiciona(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
