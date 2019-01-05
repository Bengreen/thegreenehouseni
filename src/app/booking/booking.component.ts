import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards=[
    {
      title: "Book Directly with our Agent",
      description: 'Please call Robert on <a href="t:+447729960546">+44 7729 960 546</a> to book',
    },
    {
      title: "AirBnB",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      description: 'Book with <a href="https://www.airbnb.co.uk/rooms/29093261">AirBnB</a>',
    },
    {
      title: "Booking.com",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png",
      description: 'Book with <a href="https://www.booking.com/hotel/gb/the-greene-house.en-gb.html">Booking.com</a>',
    },

  ]
}
