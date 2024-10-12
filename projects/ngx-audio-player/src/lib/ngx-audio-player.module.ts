import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';

import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AudioPlayerComponent } from './component/ngx-audio-player/ngx-audio-player.component';

@NgModule({
  declarations: [SecondsToMinutesPipe, AudioPlayerComponent],
  imports: [CommonModule, FormsModule, MatExpansionModule, MatIconModule],
  exports: [AudioPlayerComponent]
})
export class NgxAudioPlayerModule {
}
