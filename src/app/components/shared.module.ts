import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule, NbThemeModule, NbSidebarModule, NbCardModule, NbMenuModule, NbMenuService, NbSidebarService, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { TranslatePipe } from 'src/shared/pipes/translation.pipe';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    AddBookComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    AppRoutingModule,
    NbIconModule,
  ],
  providers: [NbMenuService, NbSidebarService],
})
export class SharedModule {}
