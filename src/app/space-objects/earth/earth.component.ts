import { Component, OnInit } from '@angular/core';
import { SpaceObjectsService } from '../../space-objects.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {

  constructor(private spaceObjectsService: SpaceObjectsService) { }

  visible = true;

  ngOnInit(): void {
    this.spaceObjectsService.currentEarth.subscribe(visible => this.visible = visible)
  }

}
