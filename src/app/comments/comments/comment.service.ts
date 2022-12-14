import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Comment } from "./comment.model";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  comments: Comment[] = [
    {
      id: 1,
      text: "This is the first comment"
    },
    {
      id: 2,
      text: "This is the second comment"
    }
  ];

  getAllComments(): Observable<Comment[]> {
    return of(this.comments);
  }

  postComment(
    commentText: string,
    commentId?: number
  ): Observable<Comment | undefined> {
    const isNewComment: boolean = commentId === null || commentId === undefined;
    const newComment: Comment = {
      id: this.comments.length + 1,
      text: commentText
    };

    if (isNewComment) {
      this.comments.push(newComment);
      return of(newComment);
    } else {
      this.comments = this.comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              text: commentText
            }
          : comment
      );
      const updatedComment = this.comments.find(
        (comment) => comment.id === commentId
      );
      return of(updatedComment);
    }
  }
}
