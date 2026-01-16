import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { NgSwitch } from "../../../../node_modules/@angular/common/types/_common_module-chunk"; // Make sure this path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Rooms, RouterOutlet, NgSwitch], // Rooms must be in this list
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { 
  title = 'hotelinventory';

  // loginType: 'Admin' | undefined;

  role = 'User';
loginType: any;
}

