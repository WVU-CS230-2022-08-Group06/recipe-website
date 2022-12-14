import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { Comment } from "../comment.model";
import { CommentService } from "../comment.service";

@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.css"]
})
export class CommentFormComponent implements OnDestroy {
  private postCommentSubscription: Subscription = new Subscription();

  @Output() commentEditModeChanged: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Input() isCommentInEditMode: boolean = false;
  @Input() comment!: Comment;
  @Input() comments!: Comment[];
  @Input() index!: number;

  constructor(private commentsService: CommentService) {
    this.comment.text = "";
  }

  ngOnDestroy(): void {
    this.postCommentSubscription.unsubscribe();
   
  }

  postComment(form: NgForm, commentId?: number): void {
    const commentText: string = form.value.commentBox;

    if (
      form.valid &&
      commentText !== "" &&
      commentText !== undefined &&
      commentText !== null
    ) {
      this.postCommentSubscription.add(
        this.commentsService.postComment(commentText, commentId).subscribe({
          next: (updatedComment) => {
            if (this.index) {
              this.comments[this.index].text = updatedComment?.text;
            }
            form.resetForm();
          }
        })
      );
    }
    this.isCommentInEditMode = false;
    this.commentEditModeChanged.emit(false);
  }

  cancelComment(isEditMode: boolean): void {
    this.isCommentInEditMode = isEditMode;
    this.commentEditModeChanged.emit(isEditMode);
  }
}
