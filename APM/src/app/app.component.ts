import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: 
  `
  <div>
  
  <h1>{{pageTitle}}</h1>
  <div> my First Component desde Visual Studio Code con Git Hub</div>
  
  </div>
  
  `

})

export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}