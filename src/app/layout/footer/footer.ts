import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-neutral-100 dark:border-neutral-900 py-8 px-6">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <span class="text-xs text-neutral-400 dark:text-neutral-500"> © 2026 Gabriel Alves </span>
        <span class="text-xs text-neutral-400 dark:text-neutral-500">
          Feito com Angular & Tailwind
        </span>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
