import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { TimelineComponent } from './sections/timeline/timeline';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    ContactComponent,
  ],
  template: `
    <app-header />
    <main class="pt-16">
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-timeline />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App implements OnInit {
  private translate = inject(TranslateService);

  ngOnInit() {
    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang('pt');
    const saved = localStorage.getItem('lang') as 'pt' | 'en' | null;
    this.translate.use(saved ?? 'pt');
  }
}
