import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Posts } from '../../services/posts/posts';

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
    await this.postsservice.exGetPosts().then((data: any) => {
      if ('20000' === data.code && 0 <= data.result.length) {
        this.posts = data.result;
      }
    });
  }

}
