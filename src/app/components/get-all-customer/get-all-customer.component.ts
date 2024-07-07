import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all-customer',
  standalone: true,
  imports: [CommonModule, RouterModule],
templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent {
  customers:any =[];

  constructor(private CustomerService:CustomerService){}

  ngOnInit(){
    this.getAllCustomers();

  }
  getAllCustomers(){
    this.CustomerService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers=res;
    })
  }
  deleteCustomer(id: number){
    this.CustomerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
      this.getAllCustomers();
    })
  }
}
