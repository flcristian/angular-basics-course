import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ServerComponent} from "./server/server.component";
import { WarningAlertComponent} from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent} from "./success-alert/success-alert.component";
import { CockpitComponent } from "./cockpit/cockpit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CockpitComponent, SuccessAlertComponent, CommonModule, RouterOutlet, FormsModule, ServerComponent, WarningAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  servers: ServerComponent[] = new Array<ServerComponent>()

  onServerCreated(server: ServerComponent){
    this.servers.push(server)
  }
}
