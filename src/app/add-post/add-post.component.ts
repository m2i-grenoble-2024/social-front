import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../entities';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  @Output()
  posted= new EventEmitter();
  @Input()
  respondTo?:Post;
  
  constructor(private postService:PostService){}

  post:Post = {content:''}

  handleSubmit() {
    this.post.respondTo = this.respondTo;
    this.postService.add(this.post).subscribe((data) => this.posted.emit(data))
  }
}
