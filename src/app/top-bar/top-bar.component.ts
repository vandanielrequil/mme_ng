import { Component, OnInit } from '@angular/core';
import { SpaceObjectsService } from '../space-objects.service';
import { SpaceObjects } from '../space-objects/space-objects.enum';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  moon = SpaceObjects.moon; 
  earth = SpaceObjects.earth; 
  sun = SpaceObjects.sun; 

  cardTypesListVisible = false;

  constructor(private spaceObjectsService: SpaceObjectsService) { }

  hideOrShowSpaceObject(spaceObject: string) {
    this.spaceObjectsService.hideOrShowSpaceObject(spaceObject);
  }

  ngOnInit(): void {
  }

}
