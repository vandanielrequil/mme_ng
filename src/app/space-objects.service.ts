import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpaceObjects } from './space-objects/space-objects.enum';

@Injectable({
  providedIn: 'root'
})
export class SpaceObjectsService {

  private moonVisible = new BehaviorSubject(true);
  currentMoon = this.moonVisible.asObservable();

  private earthVisible = new BehaviorSubject(true);
  currentEarth = this.earthVisible.asObservable();

  private sunVisible = new BehaviorSubject(true);
  currentSun = this.sunVisible.asObservable();

  constructor() { }

  hideOrShowSpaceObject(spaceObject: string) {
    switch (spaceObject) {
    case SpaceObjects.moon:
      this.moonVisible.next(!this.moonVisible.value);
      break;
    case SpaceObjects.earth:
      this.earthVisible.next(!this.earthVisible.value);
      break;
    case SpaceObjects.sun:
      this.sunVisible.next(!this.sunVisible.value);
      break;
    default:
      console.log('You tried to switch unexisting Space Object')
    }
  }
}
