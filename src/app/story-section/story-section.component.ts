import { Component, OnInit } from '@angular/core';
import { Story } from './story';
import { StorySectionService } from '../services/story-section.service'
import { LikedService } from '../services/liked.service';
@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.scss']
})
export class StorySectionComponent implements OnInit {

  stories : Story [] = [];

  constructor(
    private liked : LikedService,
    private storiesData : StorySectionService
  ) { }

  ngOnInit(): void {
    this.storiesData.getAll().subscribe(stories => this.stories = stories);
  }
  addToLikedStories(story : Story): void{
    if (story.liked==false){
      this.liked.addToLikedStories(story);
      story.liked=true;
    }
    
  }
  deleteFromLikedStories(story : Story): void{
    if (story.liked==true){
      this.liked.deleteFromLikedStories(story);
      story.liked=false;
    }
    
  }

}
