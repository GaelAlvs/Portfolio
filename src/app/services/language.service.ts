import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  current = signal<'pt' | 'en'>('pt');

  constructor(private translate: TranslateService) {
    const saved = localStorage.getItem('lang') as 'pt' | 'en' | null;
    const lang = saved ?? 'pt';
    this.current.set(lang);
    this.translate.use(lang);
  }

  toggle() {
    const next = this.current() === 'pt' ? 'en' : 'pt';
    this.current.set(next);
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }
}
