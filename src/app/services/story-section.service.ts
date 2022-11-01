import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../story-section/story';

const URL ='https://636029003e8f65f283c4b46b.mockapi.io/articles/stories';
@Injectable({
  providedIn: 'root'
})
export class StorySectionService {

  constructor(private http :HttpClient) { }
  public getAll(): Observable<Story[]>{

    return this.http.get<Story[]>(URL)
              //.pipe(
               // tap((stories : Story[])=> stories.forEach(story =>story.quantity=0))
              //)
              ;
  }
}
