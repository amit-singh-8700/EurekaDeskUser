let = $("#banner").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true,
  pagination: false,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
