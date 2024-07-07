import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router:Router) {}

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  postCustomer() {
      
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl("");
      })
  }
}
