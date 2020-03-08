event_in_fest = [
  {
    start_date: '2020/3/13',

    date_to_show: '13',
    month_to_show: ' March',

    description: 'Math Olympiad',
    event_time: '13 March',
    location: 'ECE Building, BUET',

    imageName: '<i class="icon-linegraph calendar_logo"></i>',
    link: '"events/math_olympiad.html"'
  },

  {
    start_date: '2020/3/14',

    date_to_show: '14',
    month_to_show: ' March',

    description: 'Takla Contest',
    event_time: '14 March',
    location: 'CSE wing, ECE Building',

    imageName: '<i class="icon-sad calendar_logo"></i>',
    link: '"events/takla_contest.html"'
  },

  {
    start_date: '2020/3/19',

    date_to_show: '19',
    month_to_show: ' March',

    description: 'Treasure Hunt',
    event_time: '19 March',
    location: 'BUET Campus',

    imageName: '<i class="calendar_logo"><span class="iconify" data-icon="mdi:treasure-chest" data-inline="false"></span></i>',
    link: '"events/treasure_hunt.html"'
  },

  {
    start_date: '2020/3/27',

    date_to_show: '27',
    month_to_show: ' March',

    description: 'IUPC',
    event_time: '27 March',
    location: 'ECE Building, BUET',

    imageName: '<i class="lnr lnr-keyboard calendar_logo"></i>',
    link: '"events/iupc.html"'
  },

  {
    start_date: '2020/3/28',

    date_to_show: '28',
    month_to_show: ' March',

    description: 'CTF',
    event_time: '28 March',
    location: 'ECE Building, BUET',

    imageName: '<i class="icon-lock calendar_logo"></i>',
    link: '"events/ctf.html"'
  },

  {
    start_date: '2020/4/1',

    date_to_show: '1',
    month_to_show: 'April',

    description: 'Job Fair',
    event_time: '1 April',
    location: 'IAC, ECE Building',

    imageName: '<i class="ion-ios-people-outline calendar_logo"></i>',
    link: '"events/job_fair.html"'
  },

  {
    start_date: '2020/4/1',

    date_to_show: '1',
    month_to_show: 'April',

    description: 'Acoustic Night',
    event_time: '1 April',
    location: 'ECE Field',

    imageName: '<i class="lnr lnr-mic calendar_logo"></i>',
    link: '"#"'
  },

  {
    start_date: '2020/4/2',

    date_to_show: '2',
    month_to_show: 'April',

    description: 'Grand Cultural',
    event_time: '2 April',
    location: 'BUET Central Auditorium',

    imageName: '<i class="lnr lnr-mic calendar_logo"></i>',
    link: '"events/grand_cultural.html"'
  },

  {
    start_date: '2020/4/17',

    date_to_show: '17',
    month_to_show: ' Aprill',

    description: 'Hackathon',
    event_time: '17 April - 18 April',
    location: 'to be decided',

    imageName: '<i class="lnr lnr-laptop calendar_logo"></i>',
    link: '"events/hackathon.html"'
  },
];

for (let i = 0; i < event_in_fest.length; i++) {
  // check if date has passed today
  var now = new Date();
  var givenDate = new Date(event_in_fest[i].start_date);

  now.setHours(0, 0, 0, 0);

  if (now <= givenDate) {

    htm = "<tr>" +
      "<td>" + event_in_fest[i].imageName + "</td>" +

      "<td class=\"event_date\">" + event_in_fest[i].date_to_show + "<span>" + event_in_fest[i].month_to_show + "</span></td>" +

      "<td>" +
      "<div class=\"event_place\">" + "<h5>" + event_in_fest[i].description + "</h5>" +
      "<h6>" + event_in_fest[i].event_time + "</h6><p>" + event_in_fest[i].location + "</p></div></td>" +

      "<td>" + "<a href=" + event_in_fest[i].link + " class=\"btn btn-primary btn-rounded\">Read More</a>" +
      "</td>" + "</tr>";

    $(".eventcalendar").append(htm)
  }
}