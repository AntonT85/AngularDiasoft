import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthorService} from "../../services/author/author.service";
import {IAuthor} from "../../shared/interfaces/author/IAuthor";

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {
  @Input() selectedItems: IAuthor[] | undefined;
  @Output() authors: EventEmitter<IAuthor[]> = new EventEmitter<IAuthor[]>();

  constructor(private readonly authorService: AuthorService) {
  }

  items: IAuthor[] = [];

  filter(event: AutoCompleteCompleteEvent) {
    this.authorService.getList(event.query).subscribe((result: IAuthor[]) => this.items = result);
  }

  onChange() {
    this.authors.emit(this.selectedItems);
  }
}
