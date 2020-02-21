event_in_fest = [
  {
    start_date: '2020/3/12',

    date_to_show: '12',
    month_to_show: ' March',

    description: 'Hackathon',
    event_time: '12 March - 13 March',
    location: 'to be decided',

    imageName: '<i class="lnr lnr-laptop calender_logo"></i>',
    link: '"events/hackathon.html"'
  },

  {
    start_date: '2020/3/19',

    date_to_show: '19',
    month_to_show: ' March',

    description: 'Treasure Hunt',
    event_time: '19 March',
    location: 'to be decided',

    imageName: '<i class="calender_logo"><span class="iconify" data-icon="mdi:treasure-chest" data-inline="false"></span></i>',
    link: '"events/treasure_hunt.html"'
  },

  {
    start_date: '2020/3/20',

    date_to_show: '20',
    month_to_show: ' March',

    description: 'Game Fest',
    event_time: '20 March - 21 March',
    location: 'to be decided',

    imageName: '<i class="calender_logo"><span class="iconify" data-icon="entypo:game-controller" data-inline="false"></span></i>',
    link: '"events/game_fest.html"'
  },

  {
    start_date: '2020/3/21',

    date_to_show: '21',
    month_to_show: ' March',

    description: 'Math Olympiad',
    event_time: '21 March',
    location: 'to be decided',

    imageName: '<i class="icon-linegraph calender_logo"></i>',
    link: '"events/math_olympiad.html"'
  },

  {
    start_date: '2020/3/27',

    date_to_show: '27',
    month_to_show: ' March',

    description: 'IUPC',
    event_time: '27 March',
    location: 'to be decided',

    imageName: '<i class="lnr lnr-keyboard calender_logo"></i>',
    link: '"events/iupc.html"'
  },

  {
    start_date: '2020/4/1',

    date_to_show: '1',
    month_to_show: 'April',

    description: 'Job Fair',
    event_time: '1 April',
    location: 'to be decided',

    imageName: '<i class="ion-ios-people-outline calender_logo"></i>',
    link: '"events/job_fair.html"'
  },

  {
    start_date: '2020/4/2',

    date_to_show: '2',
    month_to_show: 'April',

    description: 'Grand Cultural',
    event_time: '2 April',
    location: 'to be decided',

    imageName: '<i class="lnr lnr-mic calender_logo"></i>',
    link: '"events/grand_cultural.html"'
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

    $(".eventCalender").append(htm)
  }
}