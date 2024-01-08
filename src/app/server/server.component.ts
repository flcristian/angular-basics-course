import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {identity} from "rxjs";

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  @Input() serverId: number = 0
  @Input() serverStatus: boolean = false

  getColor(){
    return this.serverStatus ? 'green' : 'red'
  }
}
