import {Component, OnInit} from '@angular/core';
import {NgwWowService} from 'ngx-wow'

@Component({
  selector: 'app-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.scss']
})
export class ProfileBlockComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
  }
  ngOnInit(): void {
    this.wowService.init()
  }
  reset(){
    this.wowService.init()
  }


}
