
var bio = {
  name: 'Jon Bennett',
  role: 'Web Developer',
  contacts: {
    mobile: '+64 27 249 7554',
    email: 'jattob@protonmail.com',
    github: 'jon-atto-bennett',
    location: 'Wellington, New Zealand'
  },
  welcomeMessage: 'Welcome to my resume',
  skills: ['Full Stack Technologies', 'Git', 'Pair Programming', 'Engineering Empathy', 'Team Work'],
  biopic: './images/jon.jpg'
  // display: function taking no parameters
}
var formatedRole = HTMLheaderRole.replace('%data%', bio.role)
$('#main').prepend(formatedRole)

var formatedName = HTMLheaderName.replace('%data%', bio.name)
$('#main').prepend(formatedName)

var formatedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
$('#topContacts').append(formatedMobile)

var formatedEmail = HTMLemail.replace('%data%', bio.contacts.email)
$('#topContacts').prepend(formatedEmail)

var formatedGithub = HTMLgithub.replace('%data%', bio.contacts.github)
$('#topContacts').append(formatedGithub)

var formatedLocation = HTMLlocation.replace('%data%', bio.contacts.location)
$('#topContacts').append(formatedLocation)

var formatedBioPic = HTMLbioPic.replace('%data%', bio.biopic)
$('#header').prepend(formatedBioPic)

if(bio.skills.length !== 0) {
  $('#header').append(HTMLskillsStart)
  var formatedSkills = HTMLskills.replace('%data%', bio.skills)
  $('#skills').append(formatedSkills)
}

const education = {
  schools: [
    {
      name: 'Nelson Marlborough Institute of Technolgy',
      location: 'Nelson, New Zealand',
      degree: 'Bachelor of Information Technology',
      dates: 'Feb-2002 to November 2004',
      url: 'https://www.nmit.ac.nz/'
    },
    {
      name: 'Enspiral Dev Academy',
      location: 'Wellington, New Zealand',
      degree: 'Web Development Bootcamp',
      dates: 'Nov-2016 to April 2017',
      url: 'https://www.devacademy.co.nz/'
    }
  ],
  onlineCourses: [
    {
      title: 'Javascript',
      school: 'Codecademy',
      dates: 'Dec-2016 to Jan-2017',
      url: 'https://www.codecademy.com'
    },
    {
      title: 'Javascript',
      school: 'freeCodeCamp',
      dates: 'Dec-2016 to Jan-2017',
      url: 'https://www.freecodecamp'
    },
    {
      title: 'HTML and CSS',
      school: 'Udacity',
      dates: 'Dec-2016 to Jan-2017',
      url: 'https://www.udacity.com'
    }
  ]
  // display: function taking no parameters
}

const work = {
  jobs: [
    {
      employer: 'various',
      title: 'Service Engineer',
      location: 'UK',
      dates: '1988-2002',
      description: 'servicing printers, copiers and fax machines'
      //  display: function taking no parameters
    },
    {
      employer: 'Nelson Marlborough Institute of Technology',
      title: 'Network Engineer',
      location: 'Nelson, NZ',
      dates: 'Nov-2004 to Nov-2007',
      description: 'supporting the institutes IT infrastructure, applications and users'
      //  display: function taking no parameters
    },
    {
      employer: 'Port Nelson',
      title: 'Business Analyst',
      location: 'Nelson, NZ',
      dates: 'Dec-2007 to May-2016',
      description: 'supporting the ports IT infrastructure, applications and users'
      //  display: function taking no parameters
    }
  ]
}

for(job in work.jobs){
  $('#header').append(HTMLworkStart)
  var formatedEmployer =  HTMLworkEmployer.replace('%data%', work.jobs[job].employer)
  var formatedTitle =  HTMLworkTitle.replace('%data%', work.jobs[job].title)
  var formatedEmployerTitle = formatedEmployer + formatedTitle

  $('.work-entry:last').append(formatedEmployerTitle)
}

const projects = {
  projects: [
    {
      title: 'Social Soccer League',
      dates: 'May-2017',
      description: 'A personal project to produce an app to be used for social sports',
      images: ['../images/social-soccer-league.jpg']
      //  display: function taking no parameters
    },
    {
      title: 'Community Sharing',
      dates: 'April-2017',
      description: 'A group project to produce a commuity sharing app',
      images: ['../images/community-sharing.jpg']
      //  display: function taking no parameters
    }
  ]
}
