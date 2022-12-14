import { Component, Input } from "@angular/core";

// import { Comment } from "../../../models/comment.model";
import { Comment } from "../comment.model";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent {
  isCommentInEditMode = false;

  @Input() comment!: Comment;
  @Input() index!: number;
  @Input() comments!: Comment[];

  editComment(): void {
    this.isCommentInEditMode = true;
  }

  deleteComment(): void {
    this.comments = this.comments.splice(this.index, 1);
  }

  disableCommentEditMode(isEditMode: boolean) {
    this.isCommentInEditMode = isEditMode;
  }
}
