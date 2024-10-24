import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Customer {
  slNo: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  customers: Customer[] = [
    { slNo: 1, name: 'dolly', address: 'sklm', city: 'hell', state: 'ap', country: 'India' },
    { slNo: 2, name: 'prenyh', address: 'heaven', city: 'heaven', state: 'heaven', country: 'India' },
    { slNo: 3, name: 'harsii', address: 'hiramandalam', city: 'sklm', state: 'ap', country: 'India' },
    { slNo: 4, name: 'niha', address: 'nowtala', city: 'sklm', state: 'ap', country: 'India' },
    { slNo: 5, name: 'kavya', address: 'Pkd', city: 'sklm', state: 'odisa', country: 'India' },
    { slNo: 6, name: 'minnu', address: 'erragada', city: 'sklm', state: 'ap', country: 'India' },
    { slNo: 7, name: 'shyam', address: 'bermuda', city: 'sklm', state: 'freefire', country: 'India' },
    { slNo: 8, name: 'mounika', address: 'hyd', city: 'sklm', state: 'ts', country: 'India' },
    
    
  
  ];
  editCustomer(customer: Customer) {
    const updatedName = prompt('Edit Name', customer.name);
    const updatedAddress = prompt('Edit Address', customer.address);
    const updatedCity = prompt('Edit City', customer.city);
    const updatedState = prompt('Edit State', customer.state);
    const updatedCountry = prompt('Edit Country', customer.country);

    if (updatedName) customer.name = updatedName;
    if (updatedAddress) customer.address = updatedAddress;
    if (updatedCity) customer.city = updatedCity;
    if (updatedState) customer.state = updatedState;
    if (updatedCountry) customer.country = updatedCountry;
  }
  }