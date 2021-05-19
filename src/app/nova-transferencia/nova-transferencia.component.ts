import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() emissor = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  transferir() {
    console.log("Submit received successfully.");
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.emissor.emit(valorEmitir);
  }

}
