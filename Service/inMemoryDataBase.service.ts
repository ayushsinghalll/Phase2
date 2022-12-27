import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {IEvent} from "../src/app/event/event";


@Injectable({
  providedIn:'root'
})

export class InMemoryDataBaseService implements InMemoryDbService{

  createDb() {

    const event:IEvent[]=[{
      "id": 1,
      "name": "Music Event",
      "date": "01/01/2023",
      "time": "5:00 PM",
      "price": 4500,
      "imageURL": "../../assets/images/event1.jpg",
      "location": {
        "address": "CP Rajiv Chock",
        "city": "New Delhi",
        "country": "India"
      }
    },
      {
        "id": 2,
        "name": "New Year Party",
        "date": "01/01/2023",
        "time": "5:00 PM",
        "price": 4500,
        "imageURL": "../../assets/images/event2.jpg",
        "location": {
          "address": "CP Rajiv Chock",
          "city": "New Delhi",
          "country": "India"
        }
      },
      {
        "id": 3,
        "name": "Music",
        "date": "01/01/2023",
        "time": "5:00 PM",
        "price": 4500,
        "imageURL": "../../assets/images/event3.jpg",
        "location": {
          "address": "CP Rajiv Chock",
          "city": "New Delhi",
          "country": "India"
        }
      }]

    return {event};
  }

}
