import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  level: 'core' | 'known' | 'learning';
  tooltip: string;
}

interface SkillCategory {
  icon: string;
  titleKey: string;
  cat: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  activeFilter = 'all';

  private sanitizer = inject(DomSanitizer);

  safeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  filters = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ui', label: 'UI / Design' },
    { key: 'tools', label: 'Ferramentas' },
    { key: 'concepts', label: 'Conceitos' },
  ];

  categories: SkillCategory[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      titleKey: 'Framework & Linguagem',
      cat: 'frontend',
      skills: [
        {
          name: 'Angular',
          level: 'core',
          tooltip: 'Framework principal — uso no estágio e nos projetos pessoais.',
        },
        {
          name: 'TypeScript',
          level: 'core',
          tooltip: 'Tipagem estática em todos os projetos Angular.',
        },
        {
          name: 'RxJS',
          level: 'core',
          tooltip: 'Subscriptions, BehaviorSubject e operadores como switchMap e debounceTime.',
        },
        {
          name: 'JavaScript',
          level: 'known',
          tooltip: 'Base sólida: ES6+, async/await, manipulação do DOM.',
        },
        {
          name: 'HTML5',
          level: 'known',
          tooltip: 'Semântica, acessibilidade e estrutura correta de documentos.',
        },
        { name: 'CSS3', level: 'known', tooltip: 'Flexbox, Grid, animações e custom properties.' },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`,
      titleKey: 'Estilo & UI',
      cat: 'ui',
      skills: [
        {
          name: 'Tailwind CSS',
          level: 'core',
          tooltip: 'Utility-first em todos os projetos recentes, incluindo este portfólio.',
        },
        {
          name: 'Angular Material',
          level: 'known',
          tooltip: 'Componentes prontos com customização via temas.',
        },
        {
          name: 'SCSS / SASS',
          level: 'known',
          tooltip: 'Variáveis, mixins e estrutura de estilos escalável.',
        },
        {
          name: 'Responsive Design',
          level: 'known',
          tooltip: 'Mobile-first em todos os projetos.',
        },
        {
          name: 'Storybook',
          level: 'learning',
          tooltip: 'Documentação de componentes — estudando para design systems.',
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      titleKey: 'Performance',
      cat: 'concepts',
      skills: [
        {
          name: 'Lazy Loading',
          level: 'core',
          tooltip: 'Carregamento sob demanda de módulos e imagens.',
        },
        {
          name: 'Change Detection',
          level: 'core',
          tooltip: 'OnPush strategy e uso de signals para menor overhead.',
        },
        {
          name: 'Tree Shaking',
          level: 'known',
          tooltip: 'Redução de bundle eliminando código não utilizado.',
        },
        {
          name: 'Core Web Vitals',
          level: 'known',
          tooltip: 'LCP, CLS e FID — análise via Lighthouse.',
        },
        {
          name: 'SSR / Angular Universal',
          level: 'learning',
          tooltip: 'Server-side rendering para SEO e performance inicial.',
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
      titleKey: 'Arquitetura',
      cat: 'concepts',
      skills: [
        {
          name: 'Component Design',
          level: 'core',
          tooltip: 'Componentes reutilizáveis, coesos e com responsabilidade única.',
        },
        {
          name: 'Reactive Forms',
          level: 'core',
          tooltip: 'Formulários complexos com validação e controle de estado.',
        },
        {
          name: 'Angular Signals',
          level: 'known',
          tooltip: 'Reatividade fina sem overhead do Zone.js.',
        },
        {
          name: 'Clean Code',
          level: 'known',
          tooltip: 'Nomenclatura clara, funções pequenas e código legível.',
        },
        {
          name: 'Micro-frontends',
          level: 'learning',
          tooltip: 'Arquitetura distribuída — estudando Module Federation.',
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      titleKey: 'Ferramentas',
      cat: 'tools',
      skills: [
        {
          name: 'Git / GitHub',
          level: 'core',
          tooltip: 'Versionamento, branches, PRs e code review.',
        },
        {
          name: 'VS Code',
          level: 'core',
          tooltip: 'Editor principal com extensões para Angular e Tailwind.',
        },
        { name: 'Figma', level: 'known', tooltip: 'Leitura de protótipos e extração de estilos.' },
        {
          name: 'Angular CLI',
          level: 'known',
          tooltip: 'Scaffolding, build e configuração de projetos.',
        },
        {
          name: 'Jest / Vitest',
          level: 'learning',
          tooltip: 'Testes unitários — estudando para cobertura de componentes.',
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
      titleKey: 'Boas Práticas',
      cat: 'concepts',
      skills: [
        {
          name: 'Acessibilidade (a11y)',
          level: 'core',
          tooltip: 'ARIA labels, contraste, navegação por teclado.',
        },
        {
          name: 'SEO Técnico',
          level: 'known',
          tooltip: 'Meta tags, Open Graph e estrutura semântica.',
        },
        {
          name: 'Design Tokens',
          level: 'known',
          tooltip: 'Variáveis de design para consistência visual em escala.',
        },
        {
          name: 'Code Review',
          level: 'known',
          tooltip: 'Feedback construtivo e padrões de equipe.',
        },
      ],
    },
  ];

  get filtered() {
    if (this.activeFilter === 'all') return this.categories;
    return this.categories.filter((c) => c.cat === this.activeFilter);
  }

  setFilter(key: string) {
    this.activeFilter = key;
  }

  levelClass(level: string): string {
    if (level === 'core') return 'skill-core';
    if (level === 'learning') return 'skill-learning';
    return 'skill-known';
  }
}
