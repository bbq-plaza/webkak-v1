import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Posts } from './posts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public posts: Posts[];

  constructor(
    private postsservice: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public async getPosts(): Promise<any> {
    await this.postsservice.exGetPosts().then((data) => {
      if ('20000' === data.code && data.result.length >= 0) {
        this.posts = data.result;
      }
    });
  }

}
