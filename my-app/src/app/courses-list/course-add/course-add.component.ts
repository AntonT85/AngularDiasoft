import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent {
  public title: any;
  public description: any;
  public creationDate: any;
  public duration: any;

  public cancel(): void {
  }

  public save(): void {
  }

  public onMinutesChange(minutes: any): void {
    this.duration = minutes;
  }

}
