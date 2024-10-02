import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from "../add-post/add-post.component";
import { PostService } from '../post.service';
import { Post } from '../entities';
import { PostInListComponent } from "../post-in-list/post-in-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AddPostComponent, PostInListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  posts:Post[] = [];
  constructor(public auth:AuthService, private postService:PostService) {}

  ngOnInit(): void {
    this.postService.getAll(1).subscribe(data => this.posts = data);
  }

}
