import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from "../add-post/add-post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AddPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public auth:AuthService) {}

}
