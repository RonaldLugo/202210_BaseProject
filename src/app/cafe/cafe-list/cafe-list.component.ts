import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service'
import { Tipo } from '../tipo.enum'

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  tipos = [{'tipo': Tipo.BLEND, 'cant': 0}, {'tipo': Tipo.CAFEDEORIGEN, 'cant': 0}];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    })
  }

  getTipos(): void {

    this.cafeService.getCafes().subscribe((cafes) => {
      cafes.forEach(cafe => {
        let index = this.tipos.findIndex(item => item.tipo == cafe.tipo);
        this.tipos[index]['cant'] ++;
      });
    });

  }

  ngOnInit() {
    this.getCafes();
    this.getTipos();
  }

}
