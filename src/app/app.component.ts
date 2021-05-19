import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  valor: number = 0;
  destino: number = 0;

  transferir($event: any) {
    console.log("Received Event -> ", $event);

    this.valor = $event.valor;
    this.destino = $event.destino;
  }
}
