import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface TimelineItem {
  period: string;
  title: string;
  titleEn: string;
  org: string;
  description: string;
  descriptionEn: string;
  type: 'work' | 'study' | 'education';
  current?: boolean;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class TimelineComponent {
  items: TimelineItem[] = [
    {
      period: 'Out 2025 – presente',
      title: 'Estagiário Frontend',
      titleEn: 'Frontend Intern',
      org: 'Estágio',
      description:
        'Desenvolvimento de interfaces com Angular e TypeScript. Primeiro contato profissional com ciclos de entrega, code review e trabalho em equipe.',
      descriptionEn:
        'Building interfaces with Angular and TypeScript. First professional experience with delivery cycles, code review and teamwork.',
      type: 'work',
      current: true,
    },
    {
      period: '2023 – presente',
      title: 'Ciência da Computação',
      titleEn: 'Computer Science',
      org: 'Faculdade',
      description:
        'Fundamentos de algoritmos, estruturas de dados, redes e engenharia de software. Formação prevista para o final de 2026.',
      descriptionEn:
        'Fundamentals of algorithms, data structures, networking and software engineering. Expected graduation late 2026.',
      type: 'education',
      current: true,
    },
    {
      period: 'Out 2024 – Abr 2025',
      title: 'Instrutor de Programação e Robótica',
      titleEn: 'Programming & Robotics Instructor',
      org: 'Ctrl+Play',
      description:
        'Ensino de lógica de programação e robótica para crianças e adolescentes. Experiência que desenvolveu comunicação técnica e didática.',
      descriptionEn:
        'Teaching programming logic and robotics to kids and teenagers. Experience that built technical communication and teaching skills.',
      type: 'work',
    },
    {
      period: '2022 – 2023',
      title: 'Formação Frontend',
      titleEn: 'Frontend Training',
      org: 'Alura',
      description:
        'Cursos de HTML, CSS, JavaScript, Git e introdução ao desenvolvimento web moderno em plataforma de ensino estruturada.',
      descriptionEn:
        'Courses on HTML, CSS, JavaScript, Git and introduction to modern web development on a structured learning platform.',
      type: 'study',
    },
    {
      period: '2021',
      title: 'Início na programação',
      titleEn: 'Started programming',
      org: 'Curso em Vídeo',
      description:
        'Primeiros passos com lógica de programação e HTML/CSS de forma autodidata, através de conteúdo gratuito online.',
      descriptionEn:
        'First steps with programming logic and HTML/CSS through self-study using free online content.',
      type: 'study',
    },
  ];

  typeColor(type: string): string {
    if (type === 'work') return 'timeline-work';
    if (type === 'education') return 'timeline-education';
    return 'timeline-study';
  }

  typeLabel(type: string): string {
    if (type === 'work') return 'Trabalho';
    if (type === 'education') return 'Faculdade';
    return 'Estudo';
  }
}
