import { Component } from '@angular/core';
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
  
  constructor(private postService:PostService){}

  post:Post = {content:''}

  handleSubmit() {
    this.postService.add(this.post).subscribe(() => alert('bravo'))
  }
}
