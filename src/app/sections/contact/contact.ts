import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  form: ContactForm = { name: '', email: '', message: '' };
  sent = signal(false);
  sending = signal(false);

  async onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);

    const res = await fetch('https://formspree.io/f/mnjryjwz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(this.form),
    });

    this.sending.set(false);
    if (res.ok) {
      this.sent.set(true);
      this.form = { name: '', email: '', message: '' };
    }
  }
}
