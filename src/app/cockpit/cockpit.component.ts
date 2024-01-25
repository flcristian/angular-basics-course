import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ServerComponent} from "../server/server.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {withEnabledBlockingInitialNavigation} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [ServerComponent, FormsModule, NgIf, NgStyle, NgForOf],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Input('servers') servers: ServerComponent[] = new Array<ServerComponent>()
  @Output('newServer') serverCreated = new EventEmitter<ServerComponent>;
  @ViewChild('serverStatusCheckbox') serverStatus!: ElementRef;
  allowNewServer = false;

  onCreateServer(idInput: HTMLInputElement){
    let server = new ServerComponent();
    server.serverId = Number(idInput.value);
    server.serverStatus = this.serverStatus.nativeElement.checked;
    this.serverCreated.emit(server)

    idInput.value = ''
    this.serverStatus.nativeElement.checked = false;
    this.allowNewServer = false
  }

  onUpdateServerId(event: Event, idInput: HTMLInputElement){
    this.allowNewServer = !Number.isNaN((<HTMLInputElement>event.target).valueAsNumber);
    this.servers.forEach(server => {
      if(server.serverId === Number(idInput.value)) this.allowNewServer = false
    })
  }
}
