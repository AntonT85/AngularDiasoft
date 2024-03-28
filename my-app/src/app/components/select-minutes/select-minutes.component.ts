import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-select-minutes',
  templateUrl: './select-minutes.component.html',
  styleUrls: ['./select-minutes.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMinutesComponent {
  public min: any;
  @Output() minutes: EventEmitter<any> = new EventEmitter<any>();

  public send() {
    this.minutes.emit(this.min);
  }
}
