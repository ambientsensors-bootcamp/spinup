import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Megan\'s app';
  buttonTitle = "Show"
  show = true;

  fun(){
  this.show = !this.show;
  if(this.show){
    this.buttonTitle = "Hide";
  }else{
    this.buttonTitle = "Show";
  }
}
}
