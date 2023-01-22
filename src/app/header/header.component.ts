import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DiginService } from '../digin.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:DiginService, private router:Router) { }
  product:any;
  thisUser:any;

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data:any)=>{
      console.log(data);
      this.product=data;
      });
      this.thisUser=this.service.getUser();
    }

    success(){
      Swal.fire({
        title: 'Thank You',
        text: 'Visit Again 😊',
        imageUrl: '/assets/logo.jpg',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Custom image',
      });
      this.router.navigate(['']);
    }

  }
