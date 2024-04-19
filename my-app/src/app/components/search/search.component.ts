import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  public searchInput = '';

  public onSearch(): void {
    this.search.emit(this.searchInput);
  }
}
