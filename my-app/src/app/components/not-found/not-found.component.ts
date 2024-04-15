import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

  constructor(private readonly router: Router) {
  }

  public toMain() {
    this.router.navigate(['']);
  }

}
