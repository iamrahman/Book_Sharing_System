import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private userService: UserService) { }
  docs:any;
  ngOnInit() {
    this.userService.getCurrentUserBook().subscribe(
      res => {
        this.docs = res['docs'];
      },
      err => { 
        console.log(err);
      }
    )
  }

}
