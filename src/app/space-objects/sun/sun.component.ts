import { Component, OnInit } from '@angular/core';
import { SpaceObjectsService } from '../../space-objects.service';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {

  constructor(private spaceObjectsService: SpaceObjectsService) { }

  visible = true;

  ngOnInit(): void {
    this.spaceObjectsService.currentSun.subscribe(visible => this.visible = visible)
  }
}
