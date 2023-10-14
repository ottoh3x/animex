export const GridBreakPoints = (heading:string) => {

  return{
  
    300: {
      slidesPerView: heading === "WatchList" ? 2 :2.5,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: heading === "WatchList" ? 2 :3.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: heading === "WatchList" ? 2.8 : 4.2,
      spaceBetween: 10,

      speed: 500,
    },
    720: {
      slidesPerView: heading === "WatchList" ? 3.2 :4,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: heading === "WatchList" ? 3.5 : 4.7,
      spaceBetween: 10,
      slidesPerGroup: 3,
      speed: 500,
    },
    1200: {
      slidesPerView: heading === "WatchList" ? 4 : 6,
      spaceBetween: 10,
      slidesPerGroup: 3,
      speed: 500,
    },
    1424: {
      slidesPerView: heading === "WatchList" ? 5 : 6.5,
      spaceBetween: 10,
      slidesPerGroup:  3,
      speed: 500,
    },
    1624: {
      slidesPerView: heading === "WatchList" ? 6 :  7,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },
    1800: {
      slidesPerView:  heading === "WatchList" ? 6.5 :  8.7,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },

    2030: {
      slidesPerView:  heading === "WatchList" ? 6.5 :  9.1,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },
    2450: {
      slidesPerView:  heading === "WatchList" ? 7.2 :  10.5,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },
  }
  }



  export const days = [
    {
      name: "Monday",
      i: 1,
    },
    {
      name: "Tuesday",
      i: 2,
    },
    {
      name: "Wednesday",
      i: 3,
    },
    {
      name: "Thursday",
      i: 4,
    },
    {
      name: "Friday",
      i: 5,
    },
    {
      name: "Saturday",
      i: 6,
    },
    {
      name: "Sunday",
      i: 7,
    },
  ];