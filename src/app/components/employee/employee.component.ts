import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //Simple Array Declaration
  Subjects: string[] = ["Angular", "Java", "Dotnet"];
  ShowFaculy: boolean = false;
  FacultyName: string = "Rashmi";
  employees: any[] = [
    {
      code: 'emp101', name: 'Rashmi', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },

    {
      code: 'emp101', name: 'Nisha', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Abhay', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    }
  ];
  //simple variable declaration
  id: number = 10;
  name: string = "IPhone";
  cost: number = 100000;
  category: string = "Electronics";

  //object of Product
  prod: Product = { id: 100, name: "Note4", cost: 3000, category: "Electronics" };


  // Array
  products: Product[] = [
    { id: 11, name: "Note8", cost: 43434, category: 'Electronics' },
    { id: 12, name: "Keyboard", cost: 3434, category: 'Electronics' },
    { id: 13, name: "Chair", cost: 4434, category: 'Furniture' }
  ];
  //event function
  myFunction() {
    alert("You Clicked Me");
  }


  //Function with parameters
  deleteProduct(id: number) {
    alert("Product to be deleted" + id)
  }

  editProduct(id: number, name: string) {
    alert(`Product to be edited ${id} and ${name}`);
  }

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }



}
