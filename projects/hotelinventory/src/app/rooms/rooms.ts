import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms2'; 

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit {
  readonly hotelName = 'Angular Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

roomList: RoomList[] = [ {
    roomNumber: 101,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Mini Bar',
    price: 5000,
    photos: 'deluxe-room.jpg',
    checkinTime: new Date('2023-01-01T14:00:00'),
    checkoutTime: new Date('2023-01-02T12:00:00'),
  },
  {
    roomNumber: 102,
    roomType: 'Standard Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV',
    price: 3000,
    photos: 'standard-room.jpg',
    checkinTime: new Date('2023-01-01T14:00:00'),
    checkoutTime: new Date('2023-01-02T12:00:00'),
  },
  {
    roomNumber: 103,
    roomType: 'Suite',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Mini Bar, Balcony',
    price: 8000,
    photos: 'suite.jpg',
    checkinTime: new Date('2023-01-01T14:00:00'),
    checkoutTime: new Date('2023-01-02T12:00:00'),
  },
]; 


  constructor() {}

  ngOnInit(): void {
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
}