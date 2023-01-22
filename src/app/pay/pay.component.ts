import { Component, OnInit } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { DiginService } from '../digin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private service: DiginService, private u: UserService) { }

  finalAmount: any;
  customerinfo: any;
  totalProduct: number = 0;

  ngOnInit(): void {
    this.finalAmount = this.service.getAmount();
    this.customerinfo = this.service.getUser();
    this.u.getCartCount(this.customerinfo.u_id).subscribe((data: any) => {
      this.totalProduct = data;
    })
  }

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000",                // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "DigIn Ltd.",
    "description": "Test Transaction",
    "image": "/assets/logo.jpg",
    "order_id": "",                   //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://goodluckhours.com/payment-successful/",
    "prefill": {
      "name": this.service.userDetails.u_name,
      "email": this.service.userDetails.u_mailid,
      "contact": this.service.userDetails.u_phone,
    },
    "notes": {
      "address": "Gachibowli, Hyderabad, Telangana 500032."
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  rzp1: any;
  pay(total: any) {
    this.options.amount = total;
    this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
