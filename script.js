var Cases = anime({
    targets: '.Cases',
    innerHTML: [0, 257510],
    easing: 'linear',
    round: 1,
    duration: 1000
});
var Hospital = anime({
    targets: '.Hospital',
    innerHTML: [0, 1365],
    easing: 'linear',
    round: 1,
    duration: 1000
});
var Death = anime({
    targets: '.Death',
    innerHTML: [0, 678],
    easing: 'linear',
    round: 1,
    duration: 1000
});
var text =anime({
    targets: '.page1',
    translateX: -250,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
var chart = anime({
    targets: '#myChart',
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine',
        direction:'alternate'
      }
  });
var icon = anime({
    targets: '.white, .grey',
    scale: 5,
    direction:'alternate'
  });
var  circle = anime({
    targets: 'circle',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });
  var text2 =anime({
    targets: '.page2',
    translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
    translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
    rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
    delay: anime.stagger(50, {grid: [14, 5], from: 'center'}),
    easing: 'easeInOutQuad',
    direction:'alternate'
  });
var table = anime({
    targets: '.centres',
    translateX:250,
    easing: 'easeInOutSine',
    direction: 'alternate'

});
var map = anime({
    targets: '.map',
    translateX: -1000,
    translateY:-200,
    scale: 5,
    direction:'alternate'
  });
const labels = [
    '1 Dec 2021',
    '2 Dec 2021',
    '3 Dec 2021',
    '4 Dec 2021',
    '5 Dec 2021',
    '6 Dec 2021',
    '7 Dec 2021',
    '8 Dec 2021',
    '9 Dec 2021',
    '10 Dec 2021',
    '11 Dec 2021',
    '12 Dec 2021',
    '13 Dec 2021',
    '14 Dec 2021'

];
// Set labels, colours and data
const data = {
    labels: labels,
    datasets: [{
        label: 'Cases',
        backgroundColor: 'rgb(160, 32, 240)',
        borderColor: 'rgb(0, 0, 0)',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};

// Configure chart
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
          y: {
            ticks: { color: 'white', beginAtZero: true }
          },
          x: {
            ticks: { color: 'white', beginAtZero: true }
          }
        }
      }
};
// Render chart in <canvas>
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#000000', '#000000', '#000000'],
        anchors: ['section1', 'section2', 'section3'],
        afterLoad: function (destination) {
            if (destination.index == 1 || destination.index == 0|| destination.index == 2) {
                Cases.play();
                Hospital.play();
                Death.play();
                map.play();
                table.play();
                text.play();
                text2.play();
                circle.play();
                icon.play();
                chart.play();
            }
        },
        navigation: true,
        navigationPosition: 'right'
    });});
    tippy('.B', {
        content: 'Bedok Polyclinic 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662 6343 1121',
        placement: 'auto'
    });
    tippy('.BB', {
        content: 'Bukit Batok Polyclinic 50 Bukit Batok West Avenue 3, Singapore 659164 6343 1122',
        placement: 'auto'
    });
    tippy('.BM', {
        content: 'Bukit Merah Polyclinic 162 Bukit Merah Central Level 4, Singapore 150163 6343 1123',
        placement: 'auto'      
    });
    tippy('.CCK', {
        content: 'Choa Chu Kang Polyclinic 2 Teck Whye Crescent, Singapore 688846 63431124',
        placement: 'auto'
    });
    tippy('.C', {
        content: 'Clementi Polyclinic 451 Clementi Avenue 3, Singapore 120451 63431125',
        placement: 'auto'
    });
    tippy('.G', {
        content: 'Geylang Polyclinic 21 Geylang East Central, Singapore 389707 63431126',
        placement: 'auto'
    });
    tippy('.H', {
        content: 'Hougang Polyclinic 89 Hougang Avenue 4, Singapore 538829 67651121',
        placement: 'auto'
    });
    tippy('.J', {
        content: 'Jurong Polyclinic 190 Jurong East Avenue 1, Singapore 609788 67651122',
        placement: 'auto'
    });
    tippy('.MP', {
        content: 'Marine Parade Polyclinic 80 Marine Parade Central, Singapore 440080 67651123',
        placement: 'auto'
    });
    tippy('.O', {
        content: 'Outram Polyclinic	3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937 67651124',
        placement: 'auto'
    });
    tippy('.PR', {
        content: 'Pasir Ris Polyclinic 1 Pasir Ris Drive 4, Singapore 519457 67651125',
        placement: 'auto'
    });
    tippy('.P', {
        content: 'Pioneer Polyclinic 26 Jurong West Street 61, Singapore 648201 67651126',
        placement: 'auto'
    });
    $(document).ready(function () {
        $('.centres').DataTable({
            pageLength:5,
            lengthMenu:[[5,10,15],[5,10,15]],


        })
    });