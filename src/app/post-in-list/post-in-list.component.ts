import { Component, Input } from '@angular/core';
import { Post } from '../entities';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from "../add-post/add-post.component";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-in-list',
  standalone: true,
  imports: [DatePipe, RouterModule, AddPostComponent],
  templateUrl: './post-in-list.component.html',
  styleUrl: './post-in-list.component.css'
})
export class PostInListComponent {
  @Input({required:true})
  post!:Post;
  showForm = false;
  responses:Post[] = [];

  constructor(private postService:PostService){}

  fetchResponses() {
    this.postService.getResponses(this.post.id).subscribe(data => this.responses = data);
  }
}
