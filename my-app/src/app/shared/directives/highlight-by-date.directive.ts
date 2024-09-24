import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightByDate]'
})
export class HighlightByDateDirective implements AfterViewInit {
  // @ts-ignore
  @Input('appHighlightByDate') creationDate: Date = null;

  constructor(
    private readonly element: ElementRef,
    private readonly render: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    if (this.creationDate == null) return;
    const curDate: number = new Date().getTime();
    const courseDate: number = new Date(this.creationDate).getTime();
    if (courseDate < curDate && this.getDiffDays(courseDate, curDate) <= 14) {
      const [child] = this.element.nativeElement.children;
      this.render.setStyle(child, 'border', '2px solid #22c55e')
    } else if (courseDate > curDate) {
      const [child] = this.element.nativeElement.children;
      this.render.setStyle(child, 'border', '2px solid #3b82f6')
    }
  }

  private getDiffDays(date1: number, date2: number): number {
    let timeDiff = Math.abs(date2 - date1);
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

}
