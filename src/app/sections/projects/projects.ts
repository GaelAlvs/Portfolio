import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  translate = inject(TranslateService);
  lang = inject(LanguageService);

  projects: Project[] = [
    {
      title: 'MovieHub',
      description:
        'Consome a API do TMDB para buscar filmes e séries, favoritar títulos, ver plataformas disponíveis e navegar com responsividade total.',
      descriptionEn:
        'Consumes the TMDB API to search movies and series, bookmark titles, check available platforms and navigate fully responsive.',
      tags: ['Angular', 'Tailwind', 'TypeScript', 'REST API'],
      demo: 'https://movie-hub-seven-tau.vercel.app/tv/273240',
      preview: 'https://movie-hub-seven-tau.vercel.app',
      github: 'https://github.com/GaelAlvs',
      highlight: true,
    },
    {
      title: 'Horizen',
      description:
        'E-commerce fictício inspirado na Amazon com catálogo de produtos, navegação por categorias e layout responsivo.',
      descriptionEn:
        'Fictional e-commerce inspired by Amazon with product catalog, category navigation and responsive layout.',
      tags: ['Angular', 'Tailwind', 'TypeScript'],
      demo: 'https://horizen-mu.vercel.app',
      preview: 'https://horizen-mu.vercel.app',
      github: 'https://github.com/GaelAlvs',
      highlight: true,
    },
    {
      title: 'Moneywise',
      description:
        'Gestor de finanças pessoais com autenticação, dashboard de gastos e backend próprio em Java com banco PostgreSQL.',
      descriptionEn:
        'Personal finance manager with authentication, expense dashboard and own Java backend with PostgreSQL database.',
      tags: ['Angular', 'Tailwind', 'Java', 'PostgreSQL', 'Railway'],
      demo: 'https://moneywise-chi.vercel.app/dashboard',
      preview: 'https://moneywise-chi.vercel.app',
      github: 'https://github.com/GaelAlvs',
      highlight: true,
    },
    {
      title: 'BelleLash',
      description:
        'Landing page real para negócio de cílios e sobrancelhas. Projeto entregue para cliente com foco em conversão e identidade visual.',
      descriptionEn:
        'Real landing page for a lash and brow business. Delivered to a real client with focus on conversion and visual identity.',
      tags: ['Angular', 'Tailwind', 'TypeScript'],
      demo: 'https://belle-lash.vercel.app/',
      preview: 'https://belle-lash.vercel.app',
      github: 'https://github.com/GaelAlvs',
    },
    {
      title: 'Nexo',
      description:
        'Organizador de tarefas e projetos estilo Trello com drag and drop, múltiplos boards e gerenciamento reativo de estado.',
      descriptionEn:
        'Trello-style task and project organizer with drag and drop, multiple boards and reactive state management.',
      tags: ['Angular', 'Tailwind', 'TypeScript', 'CDK Drag & Drop', 'RxJS'],
      demo: 'https://nexo-alpha.vercel.app/boards',
      preview: 'https://nexo-alpha.vercel.app',
      github: 'https://github.com/GaelAlvs',
    },
    {
      title: 'HBO Max Clone',
      description:
        'Recriação do site da HBO Max com HTML e CSS puros — projeto de estudo focado em fidelidade visual e responsividade.',
      descriptionEn:
        'HBO Max website recreation with pure HTML and CSS — study project focused on visual fidelity and responsiveness.',
      tags: ['HTML', 'CSS'],
      demo: 'https://gaelalvs.github.io/SiteHboMax/',
      preview: 'https://gaelalvs.github.io/SiteHboMax',
      github: 'https://github.com/GaelAlvs/SiteHboMax',
    },
  ];
}
