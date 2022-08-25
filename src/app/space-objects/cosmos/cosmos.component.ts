import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss']
})
export class CosmosComponent implements OnInit, AfterViewInit {
  screenWidth = 1920; //@TODO replace on sreen width
  numberOfStarsBig = 100;
  numberOfStarsMedium = 200;
  numberOfStarsSmall = 700;

  constructor(private elRef: ElementRef) { }
  
  multipleBoxShadow = (n: number) => {
    const randomCoordinate = () => Math.floor(Math.random() * (this.screenWidth - 1) + 1)
    let value = `${randomCoordinate()}px ${randomCoordinate()}px #FFF`;
    for (let i = 1; i < n; i++) {
      value = `${value}, ${randomCoordinate()}px ${randomCoordinate()}px #FFF`;
    }
    return value
  }

  shadowsBig =  this.multipleBoxShadow(this.numberOfStarsBig);
  shadowsMedium =  this.multipleBoxShadow(this.numberOfStarsMedium);
  shadowsSmall =  this.multipleBoxShadow(this.numberOfStarsSmall);

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.elRef.nativeElement);
      console.log(this.shadowsSmall);
  }

}
