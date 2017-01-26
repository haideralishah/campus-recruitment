import { Component } from '@angular/core';
declare var firebase: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public singleModel: string = '1';
}
