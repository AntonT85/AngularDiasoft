import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() {
  }

  public show: boolean = false;

  getShowFlag(): boolean {
    return this.show;
  }

  setShowFlag(show:boolean): void {
    this.show = show;
  }
}
