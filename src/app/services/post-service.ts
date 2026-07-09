import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { LikeResponse } from '../models/like_response';

@Service()
export class PostService {
  public path: string = "http://localhost:8080"
  public httpClient = inject(HttpClient)

  getUserPost(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.path}/getPostByUser/${id}`)
  }

  sendLike(like: LikeResponse): Observable<LikeResponse> {
    return this.httpClient.post<LikeResponse>(`${this.path}/sendLike`, like)
  }

}
