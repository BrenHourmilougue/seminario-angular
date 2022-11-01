import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { OurStoryComponent } from './our-story/our-story.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { StorySectionComponent } from './story-section/story-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    CartComponent,
    OurStoryComponent,
    HomeComponent,
    StoreComponent,
    InputIntegerComponent,
    StorySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
