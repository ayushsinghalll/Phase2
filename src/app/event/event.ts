export interface IEvent{
  id:number,
  name:string,
  date:Date,
  time:string,
  price:number,
  imageURL:string,
  location:{
    address:string,
    city:string,
    country:string
  }
}

export interface sessions {
  id:number,
  name:string,
  presenter:string,
  duration:string,
  level:number,
  voters:string[]
}
