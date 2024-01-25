import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
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
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() serverId: number = 0
  @Input() serverStatus: boolean = false

  getColor(){
    return this.serverStatus ? 'green' : 'red'
  }

  constructor() {
    console.log("Constructor called!")
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("NgOnChanges called!")
  }

  ngOnInit(){
    console.log("NgOnInit called!")
  }

  ngDoCheck(){
    console.log("NgDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("NgAfterContentInit called!")
  }

  ngAfterContentChecked() {
    console.log("NgAfterContentChecked called!")
  }

  ngAfterViewInit() {
    console.log("NgAfterViewInit called!")
  }

  ngAfterViewChecked() {
    console.log("NgAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("NgOnDestroy called!")
  }
}
