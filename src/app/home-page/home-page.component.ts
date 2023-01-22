import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: any;

  constructor(private router: Router) {
    this.products = [
      { id: 1001, name: 'Shopping', price: '13499.00', imagePath: 'https://wallpaperaccess.com/full/2593043.jpg', description: 'One step for all your Needs' },
      { id: 1002, name: 'Clothes', price: '59499.00', imagePath: 'https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5Mzk2MDU2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', description: 'All Styles avaliable' },
      { id: 1003, name: 'Electronics', price: '12345.00', imagePath: 'https://media.istockphoto.com/id/166103292/photo/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board.jpg?b=1&s=612x612&w=0&k=20&c=zzEn0NYjddgKnWDfUSrBCZiETLHVqHD8ghBABcJaUeI=', description: 'Digital Life' },
      { id: 1004, name: 'Stationary', price: '98765.00', imagePath: 'https://images.pexels.com/photos/5192090/pexels-photo-5192090.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5192090.jpg&fm=jpg', description: 'A Life for Students' },
      { id: 1005, name: 'Perfumes', price: '65479.00', imagePath: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Imported Perfumes' },
      { id: 1005, name: 'Groceries', price: '75395.00', imagePath: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb2Nlcnl8ZW58MHx8MHx8&w=1000&q=80', description: 'Cheap in cost Neat and Clean' }
    ];
  }

  ngOnInit(): void {}

  btnClick() {
    this.router.navigateByUrl('header');
  };

}
