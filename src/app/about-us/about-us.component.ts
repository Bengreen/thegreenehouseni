import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subjects = [
    {
      title: "Kitchen",
      description: "A modern kitchen diner and living room offering spacious relaxation for friends and family.",
      cards: [


        {
          image: "assets/images/thmb345_DSC_1168.JPG",
        },
        { image: "assets/images/thmb345_DSC_1160.JPG", },
        {
          image: "assets/images/thmb345_DSC_1164.JPG",
        },
        {
          image: "assets/images/thmb345_DSC_1155.JPG",
        },

        { image: "assets/images/thmb345_DSC_1163.JPG", },


        {
          image: "assets/images/thmb345_DSC_1155.JPG",
        },
        { image: "assets/images/thmb345_DSC_1156.JPG", },
        { image: "assets/images/thmb345_DSC_1157.JPG", },
        { image: "assets/images/thmb345_DSC_1165.JPG", },
        { image: "assets/images/thmb345_DSC_1158.JPG", },
        { image: "assets/images/thmb345_DSC_1163.JPG", },
        { image: "assets/images/thmb345_DSC_1159.JPG", },
        { image: "assets/images/thmb345_DSC_1166.JPG", },
        { image: "assets/images/thmb345_DSC_1161.JPG", },
        { image: "assets/images/thmb345_DSC_1162.JPG", },
        { image: "assets/images/thmb345_DSC_1163.JPG", },
        { image: "assets/images/thmb345_DSC_1167.JPG", },
      ]
    },
    {
      title: "Master Bedroom (Herron Room)",
      description: "Welcome to the Heron room",
      cards: [
        {
          image: "assets/images/thmb345_DSC_1150.JPG",
        },
        {
          description: "HELLO",
          image: "assets/images/thmb345_DSC_1151.JPG",
        },
        {
          // title: "Swan Room2",
          // subtitle: "BWO OWO",
          // description: "HELLO",
          image: "assets/images/thmb345_DSC_1152.JPG",
        },

      ]
    },
    {
      title: "Conservatory",
      description: "Relax in the morning to watch the sunrise or light the stove and enjoy the sunset.",
      cards: [

        {
          image: "assets/images/thmb345_DSC_1154.JPG",
        },
        {
          image: "assets/images/thmb345_DSC_1153.JPG",
        },
      ]
    },

    {
      title: "Hallway entramce",
      cards: [
        { image: "assets/images/thmb345_DSC_1170.JPG", },
        { image: "assets/images/thmb345_DSC_1169.JPG", },
        { image: "assets/images/thmb345_DSC_1171.JPG", },
      ]
    },
    {
      title: "Landing",
      cards: [
        { image: "assets/images/thmb345_DSC_1173.JPG", },
      ]
    },
    {
      title: "Swan Bedroom",
      cards: [
        { image: "assets/images/thmb345_DSC_1174.JPG", },
        {
          image: "assets/images/thmb345_DSC_1175.JPG",
        },
        { image: "assets/images/thmb345_DSC_1329.JPG", },

        { image: "assets/images/thmb345_DSC_1328.JPG", },
      ]
    },
    {
      title: "3rd Bedroom",
      cards: [
        { image: "assets/images/thmb345_DSC_1323.JPG", },
        { image: "assets/images/thmb345_DSC_1178.JPG", },
        { image: "assets/images/thmb345_DSC_1325.JPG", },
        { image: "assets/images/thmb345_DSC_1324.JPG", },
        { image: "assets/images/thmb345_DSC_1326.JPG", },
      ]
    },
    {
      title: "Upstairs Bathroom and Powershower",
      cards: [
        { image: "assets/images/thmb345_DSC_1177.JPG", },
        { image: "assets/images/thmb345_DSC_1176.JPG", },
      ]
    },
    {
      title: "Main downstairs toilet",
      cards: [
        { image: "assets/images/thmb345_DSC_1172.JPG", },
      ]
    },
    {
      title: "Front aspect",
      cards: [
        { image: "assets/images/thmb345_fadbbf20-7927-49ba-ab5d-0dc87ba7daf5.JPG", },

      ]
    },
    {
      title: "Garage",
      description: "Secure storage if want to put away bikes or bulky equipment",
      cards: [

        {
          title: "Garage",
          image: "assets/images/thmb345_DSC_1330.JPG",
        },
      ]
    }
  ]

}
