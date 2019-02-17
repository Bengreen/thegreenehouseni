import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.scss']
})
export class ThingsToDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards=[
    {
      title: "Walk Ballykelly Bank",
      subtitle: "",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
      image: "assets/images/thmb345_DSC_1150.JPG",
    },
    {
      title: "Visit Samsons Tower",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Cycle the Ballykelly Bank",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Visit The Diamond",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Visit Ballykelly Triangulation Tower",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Jog around Ballykelly Forrest",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Visit Roe Vally Country Park",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Kidz Ahoy at Roe Valley Leisure Centre",
      description: 'Walk along <a href="http://www.walkni.com/walks/164/ballykelly-bank/">Ballykelly Bank</a> using a <a href="http://www.walkni.com/d/walks/164/Ballykelly_Bank.pdf">WalkNI Map</a>',
    },
    {
      title: "Visit the Tower Museum",
    },
    {
      title: "Cycle at Ballycarton Wood",
      description: 'Cycle the Binevenagh Trail in <a href="http://www.cycleni.com/64/ballycarton-woodbinevenagh-trail/">Ballycarton Wood</a>',

    }
  ]

}
