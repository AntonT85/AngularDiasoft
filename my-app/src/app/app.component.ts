import {Component} from '@angular/core';
import {SpinnerService} from "./services/spinner/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';

  constructor(private readonly spinnerService: SpinnerService) {
  }

  get showSpinner(): boolean {
    return this.spinnerService.getShowFlag();
  }
}
