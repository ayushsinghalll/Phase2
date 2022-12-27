import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})

 export class LoggingService {

  getLogging(){
    return 'Logging Successfully'
  }
}
