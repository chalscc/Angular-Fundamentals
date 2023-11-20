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
    id: 'DefaultID',
    name: 'Trunks',
    power: 10,
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(uuid:string):void {
    this.onDelete.emit(uuid);
  }
}
