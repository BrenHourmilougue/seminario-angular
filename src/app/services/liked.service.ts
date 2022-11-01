import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Story } from '../story-section/story';

@Injectable({
  providedIn: 'root'
})
export class LikedService {
  private _liked:Story[]=[];
  liked : BehaviorSubject<Story[]> = new BehaviorSubject(this._liked);

  constructor() { }

  addToLikedStories(story:Story){
    let item:Story|undefined = this._liked.find((v1)=> v1.title == story.title);
    if (!item){
      this._liked.push({... story});
    }
    this.liked.next(this._liked);
  }
  deleteFromLikedStories(story:Story){
    let item:Story|undefined = this._liked.find((v1)=> v1.title == story.title);
    if (item){
      this._liked.pop();
    }
    this.liked.next(this._liked);
    
  }
}
