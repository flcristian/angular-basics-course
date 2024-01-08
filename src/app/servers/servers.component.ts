import {Component, OnInit} from '@angular/core';
import { ServerComponent} from "../server/server.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {withEnabledBlockingInitialNavigation} from "@angular/router";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule, NgIf, NgStyle, NgForOf],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent{
  servers: ServerComponent[] = new Array<ServerComponent>()
  serverId: number = 0
  serverStatus: boolean = false
  allowNewServer = false;

  onCreateServer(){
    let server: ServerComponent = new ServerComponent();
    server.serverId = this.serverId;
    server.serverStatus = this.serverStatus;
    this.servers.push(server)

    this.serverId = NaN
    this.serverStatus = false
    this.allowNewServer = false
  }

  onUpdateServerId(event: Event){
    this.allowNewServer = !Number.isNaN((<HTMLInputElement>event.target).valueAsNumber);
    this.servers.forEach(server => {
      if(server.serverId === this.serverId) this.allowNewServer = false
    })
  }
}
