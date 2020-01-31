import { Component, OnInit } from '@angular/core';
import { Shoe, ShoesService } from '@mdv4/core-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mdv4-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.css']
})
export class KicksComponent implements OnInit {

  shoes$;
  selectedShoe$ = new BehaviorSubject({
    title: '',
    details: '',
    'cool-level': 0
  });

  constructor(
    private service: ShoesService
  ) { }

  ngOnInit() {
    this.getShoes();
  }

  reset() {
    this.selectedShoe$.next({
      title: '',
      details: '',
      'cool-level': 0
    });
  }

  getShoes() {
    this.shoes$ = this.service.all();
  }


  selectShoe(shoe: Shoe) {
    this.selectedShoe$.next(shoe);
  }

  deleteShoe(shoe) {
    this.service.delete(shoe.id).subscribe(() => {
      this.getShoes();
      this.reset();
    });
  }

  saveShoe(shoe) {
    if (!shoe.id) {
      this.createShoe(shoe);
    } else {
      this.updateShoe(shoe);
    }
    this.reset();
  }

  createShoe(shoe) {
    this.service.create(shoe).subscribe(() => {
      this.getShoes();
      this.reset();
    });
  }

  updateShoe(shoe) {
    this.service.update(shoe).subscribe(() => {
      this.getShoes();
      this.reset();
    });
  }

  cancel() {
    this.reset();
  }
}
