$('.ba-works__slider').slick({
	slide: "div",
	prevArrow: ".prev",
	nextArrow: ".next",
	dots: true
});
$('.ba-our-team__slider').slick({
	slide: "div",
	prevArrow: ".prev",
	nextArrow: ".next",
	infinite: true,
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerPadding: "50px",
	responsive:[
		{
			breakpoint: 1200,
			settings: {
				slide: "div",
					prevArrow: ".prev",
					nextArrow: ".next",
					infinite: true,
					centerMode: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					centerPadding: "50px"
			}
		},
		{
			breakpoint: 768,
			settings: {
				slide: "div",
					infinite: true,
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1
		}
	}

	]
});

var map = "";
var marker = "";
// Initialize and add the map
$(window).load(function initMap() {
  // The location of Uluru
  var uluru = {lat: 48.928810, lng: 24.696850};
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  marker = new google.maps.Marker({
   	position: uluru,
   	map: map,
   	icon: "img/marker.png"});
});
function changePositionHome() {
    var latlng = new google.maps.LatLng({lat: 49.750561, lng: 28.564283});
    map.setCenter(latlng);
    marker.setPosition(latlng);
 }
 function changePositionJob() {
     var latlng = new google.maps.LatLng({lat: 48.919668, lng: 24.707553});
     map.setCenter(latlng);
     marker.setPosition(latlng);
  }

  var menu = document.getElementById('ba-nav');
  var toggler = document.getElementById('toggler');
$('.ba-nav__toggler').on('click', function(){

	if (menu.style.display == "block"){
		menu.style.display = "none";
	}
	else {
		menu.style.display = "block"
		toggler.style.display ="inine-flex";
	}
})



/*
  function myFunction() {
    document.getElementById("home-coordinates").toggleClass('hide');
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.ba-home__img')) {
      var dropdown = document.getElementById('home-coordinates');

        if (dropdown.classList.contains('show')) {
          openDropdown.removeClass('show');
        }
    }
  }*/



/*

	var home = document.getElementById("ba-toggle-home");
	var coordinatesHome = document.getElementById('home-coordinates')
	home.addEventListener('click', function(){

		if (coordinatesHome.style.display == "none"){
			coordinatesHome.style.display = "inline-flex";
		}

	})
	var job = document.getElementById("ba-toggle-job");
	var coordinatesJob = document.getElementById('job-coordinates')
	job.addEventListener('click', function(){

		if (coordinatesJob.style.display == "none"){
			coordinatesJob.style.display = "inline-flex";
		}
		else {
			coordinatesJob.style.display == "none"
		}

	})

function closeHome(){
	if (coordinatesHome.style.display = "inline-flex") {
		coordinatesHome.style.display == "none";
	}
}
*/
