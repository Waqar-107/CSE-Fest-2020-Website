event_in_fest = [
  {
    start_date: '2020/3/12',

    date_to_show: '12',
    month_to_show: ' March',

    description: 'Hackathon',
    event_time: '12 March - 13 March',
    location: 'BUET Gym',

    imageName: '<i class="lnr lnr-laptop"></i>',
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
      "</td></tr>";

    $(".eventCalender").append(htm)
  }
}
<div class="event_place">
  <h5>Conference in Amsterdam</h5>
  <h6>08 AM - 04 PM</h6>
  <p>Speaker: Daniel Hill</p>
</div>