import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/core/services/ui/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private uiService : UiService) { }

  ngOnInit(): void {
    this.uiService.closeSidebar();
  }

}
