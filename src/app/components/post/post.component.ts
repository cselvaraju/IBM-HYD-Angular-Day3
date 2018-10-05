import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [
    './post.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    // this.postService.getPosts()
    //   .subscribe(
    //     data => this.posts = data
    //   );

    // console.log('this is: ');
    // console.log(this);
      this.postService.getPosts()
      .subscribe(
        function(data) {
          // console.log('Inside callback this is: ');
          // console.log(this);
          this.posts = data;
        }.bind(this)
      );
  }

  createPost() {
    let post: Post = {
      id: 0,
      title: 'New Post',
      body: 'This is a new post for testing'
    };

    this.postService.savePost(post).subscribe(
      data => {
        this.posts.unshift(data);
      }
    );
  }
}
