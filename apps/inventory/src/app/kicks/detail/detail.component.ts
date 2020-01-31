import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Shoe } from '@mdv4/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv4-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {

  id: number = null;
  detailForm: FormGroup;

  @Input() selected: Shoe;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.selected) {
      this.buildForm();
    }
  }

  buildForm() {
    if(this.selected) {
      this.detailForm = new FormGroup({
        'cool-level': new FormControl(this.selected['cool-level']),
        title: new FormControl(this.selected.title),
        details: new FormControl(this.selected.details)
      });
    } else {
      this.detailForm = new FormGroup({
        'cool-level': new FormControl(''),
        title: new FormControl(''),
        details: new FormControl('')
      });
    }
  }

  onSubmit() {
    this.saved.emit({...this.selected, ...this.detailForm.value});
  }

  onCancel() {
    this.cancelled.emit();
  }
}
