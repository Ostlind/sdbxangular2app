import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef, } from '@angular/core';
import { OpcTag, OpcTagService } from '../opc-tag/shared'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'opc-tag-dashboard',
  templateUrl: './opc-tag-dashboard.component.html',
  styleUrls: ['./opc-tag-dashboard.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class OpcTagDashboardComponent implements OnInit {

  public SelectedOpcTag: OpcTag;
  public OpcTagList: OpcTag[];

  constructor( @Inject(OpcTagService) private signalrService: OpcTagService, private cd: ChangeDetectorRef) {

    this.signalrService.getOpcTagList().subscribe(opcTaglist => this.OpcTagList = opcTaglist)

    this.signalrService.start();

  }

  updateTagValue(opcTagItem: OpcTag) {

    this.OpcTagList.filter(opcTag => opcTag.TagName == opcTagItem.TagName && opcTag.ScanTime == opcTagItem.ScanTime).forEach(currentTag => {

      currentTag.Quality = opcTagItem.Quality;
      currentTag.Value = opcTagItem.Value;

      this.cd.markForCheck()

    })
  }

  ngOnInit() {

    this.signalrService.sub().subscribe(
      (opcTagItem: OpcTag) => {

        this.updateTagValue(opcTagItem);
        this.cd.detectChanges();

      },
      (error: any) => {
        console.warn("Something happened!", error);
      }
    );
  }
}
