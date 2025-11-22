import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  supportForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.supportForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      issueType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.supportForm.controls;
  }

  onSubmit(): void {
    if (this.supportForm.invalid) {
      this.supportForm.markAllAsTouched();
      return;
    }

    const formData = {
      user_name: this.supportForm.value.name,
      user_email: this.supportForm.value.email,
      issue_type: this.supportForm.value.issueType,
      message: this.supportForm.value.message,
      time: new Date().toLocaleString()
    };

    emailjs.send('service_ddbtpwq', 'template_h421h3g', formData, {
      publicKey: 'ur5Vx9ZUqYKcKWZ7k',
    }).then(() => {
      this.toastr.success('Support request sent successfully.', 'Success ✅');
      this.supportForm.reset();
    }).catch((error) => {
      console.error('Email send failed:', error);
      this.toastr.error('Failed to submit request. Please try again.', 'Error ❌');
    });
  }
}
