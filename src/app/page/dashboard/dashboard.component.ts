import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = [
    {
      controlType: "range",
      type: 'range',
      label: 'Monthly Income',
      limit: 100000,
      minAmount: 100000,
      maxAmount: 300000,
      limitValue: true,
      styles: {
        width: '100%',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      },
      limitStyle: {
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
      }
    },
    {
      controlType: "range",
      type: 'range',
      label: 'Monthly Expense',
      limit: 10000,
      minAmount: 10000,
      maxAmount: 300000,
      limitValue: false,
      styles: {
        width: '100%',
        marginTop: '10px',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      },
      limitStyle: {
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
      }
    },
    {
      controlType: "select",
      text: 'Repayment Tenure',
      label: 'EMI of existing loan (optional)',
      placeholder: 'EMI Tenure',
      limitValue: false,
      inputActive: true,
      optionsStyle: true,
      options: [
        {
          optionName: "6 months",
          value: "6 months"
        },
        {
          optionName: "1 year",
          value: "1 year"
        },
        {
          optionName: "2 year",
          value: "2 year"
        },
        {
          optionName: "2 year",
          value: "2 year"
        },
      ],
      styles: {
        width: '100%',
        marginTop: '10px',
        height: '100%',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      }
    },
    {
      controlType: "switch",
      text: 'Do you have any existing loans?',
      type: 'text',
      label: 'Do you have any existing loans?',
      value: false,
      placeholder: 'Monthly Expense',
      limitValue: false,
      inputActive: true,
      styles: {
        // width: '100%',
        // marginTop: '10px',
        // height: '100%',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      }
    },
    {
      controlType: "input",
      text: 'EMI of existing loan (optional)',
      type: 'number',
      moneyIcon: true,
      label: 'EMI of existing loan (optional)',
      placeholder: 'Monthly Expense',
      limitValue: false,
      inputActive: true,
      limitStyle: true,
      styles: {
        width: '100%',
        marginTop: '10px',
        height: '100%',
        paddingLeft: '10px',
      },
      moneyInputIcon: {
       paddingTop: '10px',
      },
      labelStyle: {
        fontSize: '12px',
        fontFamily: 'OpenSansRegular',
      },
    },
  ]


  getMoney = {
    styles: {
      background: '#fff',
      border: 'none',
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '500', 
      padding: '8px 24px', 
    },
    text: 'Get Money',
    type: 'button',
    class: true,
  };

  getOpenAccount = {
    styles: {
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '500', 
      padding: '10px 24px', 
    },
    text: 'Get an Open Account',
    type: 'button',
  };

  getStarted = {
    styles: {
    },
    text: 'Get Started',
    type: 'button',
  };

  leftBusinessConfig = [
    {
      cardImage: 'Get Paid Instantly.png',
      cardHeading: 'Quick cash disbursement',
      cardDescription: 'Get terms loans that your business needs within 72 hrs',
    },
    {
      cardImage: 'Low interest rate.png',
      cardHeading: 'Low-interest rate',
      cardDescription: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    },
    {
      cardImage: 'Secure Payments.png',
      cardHeading: 'Zero Paperwork',
      cardDescription: 'Get started instantly by submitting only your basic details & bank statements',
    },
  ]

  middleBusinessConfig = [
    {
      cardImage: 'freelancer_feature_icon_6@1.5x.png',
      cardHeading: 'Ace your business finances',
      cardDescription: 'Manage banking, accounting & everything in between, on one platform',
    },
    {
      cardImage: 'Covid.png',
      cardHeading: 'Loans to fight COVID-19',
      cardDescription: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
    },
  ]


  loanData = {
    amount: null,
    emi: null
  }



  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  getLoanInfo(e){
   this.loanData.amount = e.amount.toFixed(2);
   this.loanData.emi = e.emi.toFixed(2);

   
  }


  onClickEventReceived(data) {
    console.log(data);

  }
  


}
