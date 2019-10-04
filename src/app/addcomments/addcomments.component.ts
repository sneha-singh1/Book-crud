import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Comments } from './addcomments.modal';

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.css']
})
export class AddcommentsComponent implements OnInit {
  book: Book;
  comment: Comments[] = [];
  Name: string;
  Email: string;
  Commentu: string;
  newc: Comments;
index:number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.index =(parseInt(this.route.snapshot.paramMap.get('id'))-1);
   }
  addcommentsbook() {
    console.log(this.index);
    console.log(this.svc.books[this.index]);
    this.svc.books[this.index].comment.push(new Comments(this.Name, this.Email, this.Commentu));
    // this.newc = new Comments(this.Name, this.Email, this.Commentu);
    // this.comment.push(this.newc);
    // console.log(this.comment.length);
  }
}
