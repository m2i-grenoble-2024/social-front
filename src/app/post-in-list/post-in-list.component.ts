import { Component, Input } from '@angular/core';
import { Post } from '../entities';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-in-list',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './post-in-list.component.html',
  styleUrl: './post-in-list.component.css'
})
export class PostInListComponent {
  @Input({required:true})
  post!:Post;
}
