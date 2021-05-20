import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService: TransferenciaService) {}

  transferir($event: any) {
    console.log('Received Event at app.component.ts -> ', $event);

    this.transferenciaService.adiciona($event);
  }
}
