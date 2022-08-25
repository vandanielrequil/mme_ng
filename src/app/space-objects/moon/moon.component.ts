import { Component, OnInit } from '@angular/core';
import { SpaceObjectsService } from '../../space-objects.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})

export class MoonComponent implements OnInit {

  constructor(private spaceObjectsService: SpaceObjectsService) { }

  visible = true;

  ngOnInit(): void {
    this.spaceObjectsService.currentMoon.subscribe(visible => this.visible = visible)
  }
}
