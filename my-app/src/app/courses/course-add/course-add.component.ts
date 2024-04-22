import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses/courses.service";
import {ICourse} from "../../shared/interfaces/course/course.interface";
import {MenuItem} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAuthor} from "../../shared/interfaces/author/IAuthor";

interface CourseForm {
  title: FormControl<string | null>,
  description: FormControl<string | null>,
  creationDate: FormControl<Date | null>,
  duration: FormControl<number | null>,
  topRated: FormControl<boolean | null>,
  authors: FormControl<IAuthor[] | null>,
}

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAddComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly fb: FormBuilder
  ) {
    this.id = route.snapshot.params['id'];
    if (this.id != null) {
      this.coursesService.getItemById(this.id).subscribe(response => {
        const course: ICourse = response;
        if (course != null) {
          this.header = "Изменение курса";
          this.myForm.get('title')?.setValue(course.title);
          this.myForm.get('description')?.setValue(course.description);
          if (course.creationDate != null)
            this.myForm.get('creationDate')?.setValue(new Date(course.creationDate));
          this.myForm.get('duration')?.setValue(course.duration);
          this.duration = course.duration;
          this.items.push({label: course.title});
          this.authors = course.authors;
          changeDetectorRef.detectChanges();
        }
      });
    }
  }

  items: MenuItem[] = [{label: 'Courses', routerLink: '/courses'}];
  home: MenuItem = {icon: 'pi pi-home'};

  // @ts-ignore
  public myForm: FormGroup<CourseForm> = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    creationDate: [new Date(), [Validators.required]],
    duration: [0, [Validators.required, Validators.pattern('^\\d+$')]],
    topRated: [false],
    authors: ['', [Validators.required]]
  });

  public id: any;
  header: string = "Новый курс";
  public duration: any;
  public authors: IAuthor[] | undefined;

  public get title(): FormControl {
    return this.myForm.get('title') as FormControl;
  }

  public get description(): FormControl {
    return this.myForm.get('description') as FormControl;
  }

  public get creationDate(): FormControl {
    return this.myForm.get('creationDate') as FormControl;
  }

  public get durationFC(): FormControl {
    return this.myForm.get('duration') as FormControl;
  }

  public get authorsFC(): FormControl {
    return this.myForm.get('authors') as FormControl;
  }

  public cancel(): void {
    this.router.navigate(['courses']);
  }

  public save(): void {
    if (this.id != null) {
      this.coursesService.updateItem(this.id, this.myForm.value as ICourse).subscribe()
    } else {
      this.coursesService.createCourse(this.myForm.value as ICourse).subscribe();
    }
    this.router.navigate(['courses']);
  }

  public onMinutesChange(minutes: any): void {
    this.myForm.get('duration')?.setValue(minutes);
    this.myForm.get('duration')?.markAsTouched({onlySelf: true});
  }

  public onAuthorsChange(authors: IAuthor[]): void {
    this.myForm.get('authors')?.setValue(authors);
    this.myForm.get('authors')?.markAsTouched({onlySelf: true});
  }

}
