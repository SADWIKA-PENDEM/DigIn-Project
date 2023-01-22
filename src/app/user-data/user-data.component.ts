import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DiginService } from '../digin.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: any;
  updateData: any;
  countries: any;

  constructor(private service: DiginService, private activeRoute: ActivatedRoute, private router: Router) {
    this.user = "";
    this.updateData = {
      u_id: "",
      u_name: "",
      u_type: "",
      u_gender: "",
      country: "",
      u_mailid: "",
      u_phone: "",
      password: ""
    }
  }

  refreshPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });
    this.service.getAllUserData().subscribe((data: any) => {
      console.log(data);
      this.user = data;
    });
  }

  delete(u_id: number) {
    console.log(u_id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your User Data has been deleted.',
          'success'
        )
        this.service.deleteUserData(u_id).subscribe((data: any) => {
          this.user = data;
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your User file is safe :)',
          'error'
        )
      }
    });
  }

  search(value: any) {
    console.log(value.search);
    this.service.searchud(value.search).subscribe((data: any) => {
      console.log(data);
      this.user = data;
    });
  }

  update(u1: any) {
    this.updateData = u1;
  }

  editUser(u2: any) {
    this.service.updateuser(u2).subscribe((data: any) => {
      console.log(data);
    })
  }

  success() {
    Swal.fire({
      title: 'Thank You',
      text: 'Visit Again 😊',
      imageUrl: '/assets/logo.jpg',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Custom image',
    })
  }

  style() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
}

