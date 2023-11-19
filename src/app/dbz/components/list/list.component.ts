import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input() // Permite que el padre le pase información al hijo
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void {
    this.onDelete.emit(index);
  }
}
