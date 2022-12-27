import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEvent} from "../src/app/event/event";


@Injectable({
  providedIn:'root'
})

export class EventService{
  private  url = 'api/event.json'
  constructor(private http:HttpClient) {
  }
  getEvents():Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.url)

  }
}
