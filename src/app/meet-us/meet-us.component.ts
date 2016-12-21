import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.css']
})
export class MeetUsComponent implements OnInit {

  teachers = [
      {
        name: "Jess Armstrong",
        bio: "My name is Jess Armstrong and I am the Preschool Manager. I began working at Barrowby Preschool in October 2014 after finishing maternity leave. I had my little boy in July. I grew up in Cardiff, where my family still live. Whilst growing up, my mum was a childminder which is what made me decide at a young age I wanted to work with children. In 2010 I graduated with a 2.1 from Nottingham Trent University after studying Primary Education and gaining Qualified Teacher Status. Following this I worked in Private Day Nurseries working my way up to be Third in Charge and Preschool Room Leader of a large Day Nursery in Cambridge. Recently I have also gained Early Years Professional Status. I love to work with children of all ages so am also a volunteer children’s worker at the church I attend in Grantham. I love to go walking around Rutland with my family, baking yummy treats and attempting a spot of gardening!",
        role:"Pre School Manager",
        qualificatons:"2.1 Primary Education / Early Years Professional Status",
        image:"img/home/team/team-1.jpg"  
      },
      {
        name: "Marjorie Spendlow",
        bio: "Hi, my name is Marjorie Spendlow but I prefer to be called Marj. I have been working at Barrowby Preschool since June 2013 where I am a key person and also Deputy Manager. I enjoy my job very much and enjoy working with children of all ages. I have a Level 4 in Childcare and Education and I’m currently working towards my Level 5 award in Leadership and Management, also I am doing an eLklan speech and language course. I am the SENCo with in the setting. I am married with two children; a daughter who is 21 and a boy who is 7, who I adore and love very much.",
        role:"Deputy Manager",
        qualificatons:"Level 4 in Childcare and Education / Early Years Professional Status",
        image:"img/home/team/team-1.jpg"  
      },
      {
        name: "Robbyn-Elizabeth Smith",
        bio: "Hi everyone, my name is Robbyn-Elizabeth Smith. Yes I have 2 first names just to be awkward, this is why everyone calls me Bobz or Bobbyliz (it’s less of a mouthful). I am 23 years old and I currently live in Grantham with my boyfriend and his 2 cats. I was born in Longridge, a little farming community just north of Preston, in 1991. I am the youngest (and the shortest) of 4 siblings. Growing up in the middle of rural Lancashire I attended community led schools that based their curriculum on practical life skills as well as academic skills.  After high school I attended Cardinal Newman College in Preston where I got my BTEC level 3 in Child Care, Learning and Development. Whilst on my BTEC course I completed 800 hours of professional practice, within a variety of settings.  I was then accepted in to the University of Derby, which brought me to the Midlands. I spent 4 years at the University of Derby and in my 3rd year completed 180 hours working in the preschool room in an associative nursery. I also volunteered at the local church group as they ran a play group for toddlers and parents to attend. From the University of Derby I recently received a second class honours degree in Early Childhood studies.  I am very happy to have the opportunity to work at Barrowby Preschool and finally use the skills that I have worked so hard to develop.",
        role:"Teacher",
        qualificatons:"2nd Class Honours Degree in Early Childhood studies / BTEC level 3 in Child Care, Learning and Development",
        image:"img/home/team/team-1.jpg"  
      },
      {
        name: "Jennifer Wright",
        bio: "My name is Jennifer Wright. I have been supply in the Preschool since May 2014.  I live in Grantham and have 4 children and 4 grandchildren.  I have always been interested in working with children and started out by helping in the nursery my eldest child had attended before we moved to Grantham. I continued helping in the nursery’s and school settings as my other children grew while attending Grantham College and qualifying as a Learning Support Assistant.  I then worked at Huntingtower Primary School as a midday supervisor for a number of years, as well as a Learning Support Assistant and caring 1-1 for a special needs child. I continued studying and gained my NVQ3 in Child Care and Development. I was then offered a position as Learning Support at Grantham Church High School which I accepted before becoming a Cover Supervisor.  I am currently working towards my degree in Early Years and Education.",       
        role:"Supply",
        qualificatons:"NVQ3 in Child Care and Development.",
        image:"img/home/team/team-1.jpg"  
      },
      {
        name: "Mary – Jane Caithness",
        bio: "Hi, my name is Mary – Jane Caithness. My body might be 45 years old but my spirit is still very young and I enjoy life. I am married and have two teenage daughters. I have worked in childcare for the last 27 years. I have a diploma in National association of maternal and child welfare plus family and community care. Most of my working life has been with special needs children ranging from behaviour problems, Autism, ADHD and many other syndromes. I have also worked in main stream primary school on 1-1 with children and has a teaching assistant to the reception class. Other works I have done is Tumble Tots and of course preschool children. I have been at Barrowby Preschool for about 7/8 years working has a relief worker and I enjoy it very much. I have always worked very closely with the families of the children I care for has I feel this is very important for the child’s progress. I am an open and friendly person who loves children and people.",       
        role:"",
        qualificatons:"Diploma in National association of maternal and child welfare plus family and community care",
        image:"img/home/team/team-1.jpg"  
      },
      {
        name: "Sue Leete",
        bio: "Hi, my name is Sue Leete. I am married, have a 15 year old son and live in Grantham.  For many years I was employed by ‘MENCAP’ caring for adults with learning disabilities. I left my job to have my son, Matthew and chose to stop at home to look after him. Matthew started Barrowby.  Preschool when he was 2 ½ years old. I began volunteering at that time and from September 2004 I started my employment there as a relief member of staff.  Whilst at Preschool I worked hard to achieve an NVQ Level 2 & 3 in Childcare, Learning and Development as well as other associated courses. Ten years on and I am still working here, enjoying my time with the children and helping them prepare for their next steps into Primary School.",
        role:"Relief member of staff",
        qualificatons:"NVQ Level 2 & 3 in Childcare, Learning and Development",
        image:"img/home/team/team-1.jpg"  
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
