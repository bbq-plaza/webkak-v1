import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { Posts } from '../../services/posts/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public posts: Posts[];

  constructor(
    private activeroute: ActivatedRoute,
    private postsservice: PostsService
  ) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(event => {
      const req = {
        postId: event.id
      };
      this.getPostById(req);
    });
  }

  public async getPostById(req: any): Promise<any> {
    await this.postsservice.exGetPostById(req).then((data: any) => {
      if ('20000' === data.code && 0 <= data.result.length) {
        this.posts = data.result;
      }
    });
  }
}
