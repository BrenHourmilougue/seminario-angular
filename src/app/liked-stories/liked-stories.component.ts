import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LikedService } from '../services/liked.service';
import { Story } from '../story-section/story';

@Component({
  selector: 'app-liked-stories',
  templateUrl: './liked-stories.component.html',
  styleUrls: ['./liked-stories.component.scss']
})
export class LikedStoriesComponent implements OnInit {
  likedList$: Observable <Story[]>;
  constructor(private liked : LikedService) {
    this.likedList$=liked.liked.asObservable();
   }

  ngOnInit(): void {
  }

}
