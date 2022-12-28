import { Component } from "@angular/core";
import {LoggingService} from "../../../Service/logging.service";

@Component({
    selector:'welcome',
    templateUrl:'./welcome.component.html',
    styleUrls:['./welcome.component.css']
})

export class WelcomeComponent{

  constructor(private loggingService:LoggingService) {
  }
  title:string='Welcome Component'

  fun() {
    console.log(this.loggingService.getLogging())
  }
}
