import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputData: [];
  @Output() rangeClick = new EventEmitter();
  @Output() loanDetails = new EventEmitter();
  income: any = 0;
  expenses: any = 0;
  existingEMI: any = 0;
  selectedTenure: any;
  isChecked: boolean = false;
  constructor() { }

  ngOnInit() { 
  }

  // Method to get value from Range Slider
  onSlide(event, data) {
    switch (data.label) {
      case "Monthly Income":
        this.income = event.target.valueAsNumber
        data.limit = this.income;
        break;
        case "Monthly Expense":
          this.expenses = event.target.valueAsNumber
          data.limit = this.expenses;
        break;
    }

    if(this.selectedTenure){
      this.emiCalculator();
    }
  }

  // Method to get existing EMI
  getExistingEMI(event){
    this.existingEMI = parseInt(event.target.value);
    if(this.existingEMI){
      this.emiCalculator();
    }
  }

  // Method get Selected Tenure
  onSelectTenure(event){
    this.selectedTenure = event.target.value;
    if(this.selectedTenure){
      this.emiCalculator();
    }
  }

  // Method to check if user have an existing EMI or not
  onCheck(){
    this.isChecked = !this.isChecked;
    if(!this.isChecked){
      this.existingEMI = 0;
      this.emiCalculator();
    }
  }

  // Method to calculate Loan Amount
  emiCalculator(){
    let loanAmount: any = 0, emiAmount: any = 0;
    let diff = this.income - this.expenses;
    if(diff > 0) {
      if(this.isChecked){
        if(this.existingEMI){
          loanAmount = diff - this.existingEMI;
        }
      }else{
        loanAmount = diff;
      }
    }else {
      alert("Monthly Income Should be greater than Monthly Expenses.");
    }
      this.calculateEMI(loanAmount, emiAmount);
  }

  // Method to calculate EMI as per tenure
  calculateEMI(loanAmount, emiAmount){
    switch (this.selectedTenure) {
      case "6 months":
        emiAmount = loanAmount / 6;
        break;

        case "1 year":
          emiAmount = loanAmount / 12;
        break;

        case "2 year":
          emiAmount = loanAmount / 24;
        break;

        case "3 year":
          emiAmount = loanAmount / 36;
        break;
    }
    
    this.loanDetails.emit({
      amount: loanAmount,
      emi: emiAmount
    })
  }
}
