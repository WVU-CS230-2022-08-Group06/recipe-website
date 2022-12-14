import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CommentService } from "../comments/comment.service";
import { Comment } from "../comments/comment.model";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<Comment[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getAllComments();
  }
}
