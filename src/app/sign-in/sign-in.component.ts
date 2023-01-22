import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DiginService } from '../digin.service';
import { EncryptService } from '../encrypt.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  products: any;
  signin: any;
  emailTest: boolean = false;

  constructor(private router: Router, private service: DiginService, private EncrDecr: EncryptService) {
    this.products = [
      { id: 1001, name: 'Sizzling Brands this Year', imagePath: 'https://cdn.shopify.com/s/files/1/0949/3484/files/GIF-Ready_1_600x600.gif?v=1606451338', description: 'Hoorayy....!!!🤩🤩' },
      { id: 1002, name: 'Handpicked sponser brands', imagePath: 'https://cdn11.bigcommerce.com/s-zut1msomd6/images/stencil/original/image-manager/eagle-eye-outfitters-winter-clearance-sale-square-coupon-page.gif?t=1672409766', description: '🥳🥳🥳🥳🥳🥳🥳' },
      { id: 1003, name: 'Your Home your WAY', imagePath: 'https://i.gifer.com/origin/e0/e0e7ec7a10eb1af7207f836de895f20a.gif', description: '⌛📱📠☎💻📺📷' },
      { id: 1004, name: 'Twice as fresh and delicious.', imagePath: 'https://i.pinimg.com/originals/60/d0/fd/60d0fd6b94550d0d6f57131e3dcdf1fa.gif', description: '🍌🍉🍇🍅🍆🥬🥦' }

    ];
  }

  ngOnInit(): void {
    this.service.getAllUserData().subscribe((data: any) => {
      this.signin = data;
      console.log(data)
    });
  }

  login(loginForm: any) {
    console.log(loginForm);
    let i = 0;
    for (i = 0; i < this.signin.length; i++) {
      console.log(this.signin[i]);
      if (loginForm.un == this.signin[i].u_mailid && loginForm.pw == this.EncrDecr.get('123456$#@$^@1ERF', this.signin[i].password)) {
        if (this.signin[i].u_type == "Admin") {
          this.service.userLogged = true;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: this.signin[i].u_name + '👍 Login Successfull',
            showConfirmButton: false,
            timer: 2500
          });
          this.service.setUser(this.signin[i]);
          this.router.navigate(['header']);
        } else {
          this.service.userLogged = true;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '𝐖𝐞𝐥𝐜𝐨𝐦𝐞 To DigIn 𝐅𝐚𝐦𝐢𝐥𝐲' + "  " + this.signin[i].u_name,
            showConfirmButton: false,
            timer: 1500
          });
          this.service.setUser(this.signin[i]);
          this.router.navigate(['userpage']);
        }
        break;
      }
    }
    if (i == this.signin.length)
      Swal.fire({
        icon: 'error',
        title: 'Invalid Username & Password',
        text: 'Re-Check the details!',
        // footer: '<button onclick="withoutread()" class="btn btn-info">Test</button>'
      })
  }

}