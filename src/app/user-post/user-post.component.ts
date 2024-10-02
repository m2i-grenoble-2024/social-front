import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../entities';
import { PostService } from '../post.service';
import { PostInListComponent } from "../post-in-list/post-in-list.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [PostInListComponent,RouterModule],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent implements OnChanges{
  @Input()
  username!:string; //Angular, grâce au withComponentInputBinding du main.ts va assigner à cet input la valeur du paramètre d'url défini dans le app.route.ts

  posts:Post[] = [];

  constructor(private postService:PostService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['username']) {
      this.postService.getByUser(this.username).subscribe(data => this.posts=data);

    }
  }

}
