import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service';
import { from, Observable, Subject, takeUntil } from 'rxjs';
import { Post } from '../../models/post';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LikeResponse } from '../../models/like_response';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  ngOnInit(): void {
    this.postInfo$ = this.postService.getUserPost(1);
  }
  public postService = inject(PostService)
  public postInfo$: Observable<Post[]> = from([]);

  handleClick(userId: number, postId: number): void {
    var like: LikeResponse = { userId: userId, postId: postId }
    this.postService.sendLike(like).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log('User created successfully:', response);
      },
      error: (err) => {
        console.error('Submission failed:', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
