import {Component, Input} from '@angular/core';
import {AuthService} from "../../services/auth/auth-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  @Input() isAuthenticated: boolean | undefined;
  public login = this.authService.GetUserInfo();

  /*
    ngOnInit(): void {
      console.log('ngOnInit');
    }

    ngDoCheck(): void {
      console.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }
  */
  public logOut(): void {
    this.authService.logout();
  }

}
