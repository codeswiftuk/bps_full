import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css']
})
export class TestimonalsComponent implements OnInit {

      testimonals = [
      {
        review: "All 3 of my boys attended Barrowby Pre School and absolutely loved it! We still look back on their folders & smile at all of their paintings, drawings & photographs. The staff were so caring & developed a special bond with the children. The pre school is an important part of the community & I hope it continues to thrive for many years to come.",
        reviewer: "M Liddle",
        review_date:"29/09/2016",
        review_color:"color-1",
        review_bg_color: "bg-color-1",
        review_border_color:"border-color-1"
      },
      {
        review: "Kaleb and Ocean went to Barrowby pre school and they absolutely loved it. The staff are great. They are caring, fun, and helpful. They help your children with their needs to help their confidence grows and prepare them for school.",
        reviewer: "L Watson",
        review_date:"23/09/2016",
        review_color:"color-2",
        review_bg_color: "bg-color-2",
        review_border_color:"border-color-2"
      },
      {
        review: "Both of my girls attended Barrowby pre school, during their time with the pre school, they made some lovely friends, happy memories and began their learning journeys. The staff remain good friends and we are blessed for them to have been a part of our daughters lives.",
        reviewer: "L Grimwood",
        review_date:"22/09/2016",
        review_color:"color-3",
        review_bg_color: "bg-color-3",
        review_border_color:"border-color-3"
      },
      {
        review: "My youngest son has special needs and has absolutely thrived at Barrowby Pre-School, he is loved by all his teachers and carers and always has lots of stories to tell us when he returns home about what he has been doing. The flexibility the staff provide is brilliant, would highly recommend x",
        reviewer: "S Wallace-Wynne",
        review_date:"21/09/2016",
        review_color:"color-4",
        review_bg_color: "bg-color-4",
        review_border_color:"border-color-4"
      },
      {
        review: "My little girl Isla went here- she is a very shy and not confident and extremely clingy, but after a few sessions at the group- isla loved going, the staff helped her so much with her confidence and when her time came to start school – she went no problems at all- this is all down to the staff so thank you",
        reviewer: "L Thurman",
        review_date:"21/09/2016",
        review_color:"color-5",
        review_bg_color: "bg-color-5",
        review_border_color:"border-color-5"
      },
      {
        review: "Both my children went to Barrowby pre school all round absolutely fantastic and the staff are amazing.",
        reviewer: "C Goddard ",
        review_date:"21/09/2016",
        review_color:"color-6",
        review_bg_color: "bg-color-6",
        review_border_color:"border-color-6"
      },
      {
        review: "My twins loved going to this pre-school. They was treated as individuals. And was well prepared for going to primary school. They loved all the various activities they did each day, especially the messy play",
        reviewer: "A Howitt",
        review_date:"20/09/2016",
        review_color:"color-1",
        review_bg_color: "bg-color-1",
        review_border_color:"border-color-1"
      },
      {
        review: "Both of my girls attended Barrowby Pre-School and loved their time there. They bonded with all of the staff and still talk of their happy memories there. The staff listened to any concerns and would tailor sessions to accommodate their interests. The work done to ease the girls transition into ‘big’ school was fantastic. I’m still friends with all the staff who were such an important part of my children’s lives and feel very lucky they were!",
        reviewer: "D Handley",
        review_date:"20/09/2016",
        review_color:"color-2",
        review_bg_color: "bg-color-2",
        review_border_color:"border-color-2"
      },
      {
        review: "All of my three children have attended Barrowby Pre-School and during the years that we were involved with them on a daily basis, we felt it to be a place that had a close-knit, family environment where we were happy to leave our children. They all loved it there and we had tears all round when the time came for each one to leave! Very happy memories!",
        reviewer: "E Bentley",
        review_date:"20/09/2016",
        review_color:"color-3",
        review_bg_color: "bg-color-3",
        review_border_color:"border-color-3"
      },
      {
        review: "Both my boys attended Barrowby Preschool. They built really good relationships with the staff and the children and it really helped to prepare them for school. The staff are always friendly and approachable and the preschool has a lovely family feel to it.",
        reviewer: "S Caunt",
        review_date:"20/09/2016",
        review_color:"color-4",
        review_bg_color: "bg-color-4",
        review_border_color:"border-color-4"
      },
      {
        review: "Both of my younger children have/are still in attendance of the Pre-School the staff are great the children loved to go into Pre-School in the morning. would highly recommend to anyone looking for a Pre-School.",
        reviewer: "V Wright",
        review_date:"20/09/2016",
        review_color:"color-5",
        review_bg_color: "bg-color-5",
        review_border_color:"border-color-5"
      },
      {
        review: "My little boy started at the Pre-School when he was three, being a shy child the Pre-School helped build his confidence. The staff are amazing, they create so many activities for the children.",
        reviewer: "M Fovargue",
        review_date:"20/09/2016",
        review_color:"color-6",
        review_bg_color: "bg-color-6",
        review_border_color:"border-color-6"
      },
      {
        review: "Both my boys attended Barrowby preschool and thoroughly enjoyed every minute. The staff are friendly and approachable and the children undertake a wide variety of activities.",
        reviewer: "A Hipwell",
        review_date:"12/09/2016",
        review_color:"color-1",
        review_bg_color: "bg-color-1",
        review_border_color:"border-color-1"
      },
      {
        review: "My son has been attending the preschool for a year now. All the staff have made him feel so welcome, even when he got upset when he first started – there were cuddles on hand! I wouldn’t choose anywhere else for him to go, he loves it. I feel very comfortable leaving my little man there with the lovely ladies, I would recommend to anyone.",
        reviewer: "M Harris",
        review_date:"7/09/2016",
        review_color:"color-2",
        review_bg_color: "bg-color-2",
        review_border_color:"border-color-2"
      },


  ];

  constructor() { }

  ngOnInit() {
  }

}
