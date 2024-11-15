import { EventHub } from "../eventhub/EventHub.js"

export class Service {
  constructor() {
    this.addSubscriptions()
  }

  addSubscriptions(){
    throw new Error("not implemented by subclass")
  }
  
  subscribe(event, listener){
    return EventHub.getInstance().subscribe(event, listener);
  }

  publish(event, data){
    return EventHub.getInstance().publish(event, data);
  }
}