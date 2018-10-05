import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ObservableService } from './services/observable.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { TestobservableComponent } from './components/testobservable/testobservable.component';
import { DemoComponent } from './components/demo/demo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ActorService } from './services/actor.service';
import { FormsModule } from '@angular/forms'
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'actors', component: ActorlistComponent},
  {path: 'posts', component: PostComponent},
  {path: '**', component: NotfoundpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestobservableComponent,
    ActorlistComponent,
    DemoComponent,
    PostComponent,
    HomeComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ObservableService,
    ActorService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
