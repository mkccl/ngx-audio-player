import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ThemePickerModule} from '../theme-picker';
import {ThemeStorage} from '../theme-picker/theme-storage/theme-storage';
import {StyleManager} from '../style-manager';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

}

@NgModule({ exports: [NavBarComponent],
    declarations: [NavBarComponent], imports: [CommonModule,
        RouterModule,
        ThemePickerModule], providers: [StyleManager, ThemeStorage, provideHttpClient(withInterceptorsFromDi())] })
export class NavBarModule {}
