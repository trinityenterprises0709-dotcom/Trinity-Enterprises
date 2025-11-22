import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''], // optional
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const mobile = this.contactForm.value.mobile?.trim();
    const formData = {
      user_name: this.contactForm.value.name,
      user_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      time: new Date().toLocaleString(),
      mobile_info: mobile ? ` or call at ${mobile}` : ''
    };

    const autoReplyData = {
      email: this.contactForm.value.email,  // MUST match the template placeholder name
      user_name: this.contactForm.value.name,
      subject: this.contactForm.value.subject,
      company_name: 'TRINITY ENTERPRISES',
      website_link: 'https://www.trinityenterprises.com',
      contact_number: '+91 86290 97449',
      support_email_1: 'info@trinityenterprises.com',
      support_email_2: 'contact@trinityenterprises.com'
    };


    // emailjs.send(
    //   'service_ddbtpwq',
    //   'template_gy2bqk4',
    //   autoReplyData,
    //   {
    //     publicKey: 'ur5Vx9ZUqYKcKWZ7k'
    //   }
    // ).then(() => {
    //   console.log('Auto-reply sent successfully');
    // }).catch((error) => {
    //   console.error('Auto-reply failed:', error);
    // });

    emailjs.send('service_ddbtpwq', 'template_jiii0jt', formData, {
      publicKey: 'ur5Vx9ZUqYKcKWZ7k',
    })
      .then(() => {
        this.toastr.success('Your message has been sent.', 'Success ✅');
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        this.toastr.error('Failed to send message. Please try again.', 'Error ❌');
      });
  }
}
