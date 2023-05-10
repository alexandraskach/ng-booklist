import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { NbComponentSize, NbMenuItem } from '@nebular/theme';
import { AuthService } from 'src/shared/services/auth.service';
import { TranslationService } from 'src/shared/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLanguage!: string;
  size: NbComponentSize = 'small';

  constructor(private restService: AuthService,private translationService : TranslationService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  logout() {
    this.restService.logout();
  }
  changeLanguage() {
    console.log("ff")
    this.translationService.language = this.selectedLanguage;
    this.cdRef.detectChanges()
  }
}
