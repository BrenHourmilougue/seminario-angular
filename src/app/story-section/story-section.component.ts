import { Component, OnInit } from '@angular/core';
import { Story } from './story';
import { StorySectionService } from '../services/story-section.service'
@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.scss']
})
export class StorySectionComponent implements OnInit {

  stories : Story [] = [];

  constructor(
    private storiesData : StorySectionService
  ) { }

  ngOnInit(): void {
    this.storiesData.getAll().subscribe(stories => this.stories = stories);
  }

}
