import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  version: string;

  constructor(private readonly infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfo().subscribe((info) => {
      this.version = info.version;
    });
  }
}
