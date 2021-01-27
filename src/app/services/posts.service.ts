import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
// headers = headers.set('Authorization', 'bearer name-a');

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  // public async exGetSomeData(data: any): Promise<any> {
  //   return await this.http.post('url-name', data, { headers })
  //   .toPromise();
  // }

  public async exGetPosts(): Promise<any> {
    return await this.http.get('assets/posts.json')
    .toPromise();
  }
}
