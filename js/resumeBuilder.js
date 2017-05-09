
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
  skills: ['Full Stack Technologies', 'Pair Programming', 'Engineering Empathy', 'Team Work', 'Git'],
  biopic: './images/FullSizeRender.jpg'
  // display: function taking no parameters
}
var formatedRole = HTMLheaderRole.replace('%data%', bio.role)
$('#main').prepend(formatedRole)

var formatedName = HTMLheaderName.replace('%data%', bio.name)
$('#main').prepend(formatedName)

$('#main').append(internationalizeButton)

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
  bio.skills.forEach(function(skill){
  var formatedSkill = HTMLskills.replace('%data%', skill)
  $('#skills').append(formatedSkill)
 })
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
      employer: 'Various',
      title: 'Service Engineer',
      location: 'UK',
      dates: '1988-2002',
      description: 'Servicing printers, copiers and fax machines'
      //  display: function taking no parameters
    },
    {
      employer: 'Nelson Marlborough Institute of Technology',
      title: 'Network Engineer',
      location: 'Nelson, NZ',
      dates: 'Nov-2004 to Nov-2007',
      description: 'Supporting the institutes IT infrastructure, applications and users'
      //  display: function taking no parameters
    },
    {
      employer: 'Port Nelson',
      title: 'Business Analyst',
      location: 'Nelson, NZ',
      dates: 'Dec-2007 to May-2016',
      description: 'Supporting the ports IT infrastructure, applications and users'
      //  display: function taking no parameters
    }
  ]
}

function displayWork () {
   for(i=0; i<work.jobs.length; i++) {
     $('#workExperience').append(HTMLworkStart)
     var formatedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer)
     var formatedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title)
     var formatedEmployerTitle = formatedEmployer + formatedTitle
     var formatedDates= HTMLworkDates.replace('%data%', work.jobs[i].dates)
     var formatedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location)
     var formatedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description)
     $('.work-entry:last').append(formatedEmployerTitle)
     $('.work-entry:last').append(formatedDates)
     $('.work-entry:last').append(formatedLocation)
     $('.work-entry:last').append(formatedDescription)
   }
}

displayWork()


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

$(document).click(function(loc) {
  var x = loc.pageX
  var y = loc.pageY
  logClicks (x, y)
})

function inName (name){
  name = name.trim().split(" ")
  console.log(name)
  name[1] = name[1].toUpperCase()
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase()

  return name[0] + " " + name[1]


}
