import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { DataService } from '../data.service';
import { View } from './viewcomments.modal';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  book: Book;
  bookId: number;
  text:string;
  Name: string;
  Email: string;
  Commentu: string;
  newc: Comment;
  index:number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }
n
  ngOnInit() {
    this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.books.forEach(element => {
      if(element.id==this.bookId){
        this.book=element;
      }
    });
  }
  viewcomments(){
    console.log(this.index);
    console.log(this.svc.books[this.index]);
    //this.svc.books[this.index].comment.push(new Comment(this.Name, this.Email, this.Commentu));
    // this.book.index.push(this.text);
    // console.log(this.book.txt);
    // this.reset();
  }
  reset(){
    this.text="";
  }

}