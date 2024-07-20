// svg color

$("img.img-bord").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});

// salon img

$("img.salon-nav").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});

// скрол до блока
function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - 50,
    },
    200
  );
  return false;
}

// модальное окно для картинки price
// После загрузки DOM-дерева (страницы)
$(function () {
  //при нажатии на ссылку, содержащую img-thumbnail mb-3
  $(".img-price").click(function (e) {
    //присвоить атрибуту scr элемента img модального окна
    //значение атрибута scr изображения, которое обёрнуто
    //вокруг элемента a, на который нажал пользователь
    $("#image-modal img").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    //открыть модальное окно
    $("#image-modal").modal("show");
  });
});

// модальное окно для кнопки price
// После загрузки DOM-дерева (страницы)
$(function () {
  //при нажатии на ссылку, содержащую img-thumbnail mb-3
  $(".order-price").click(function (e) {
    //присвоить атрибуту scr элемента img модального окна
    //значение атрибута scr изображения, которое обёрнуто
    //вокруг элемента a, на который нажал пользователь
    $("#order-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    //открыть модальное окно
    $("#order-modal").modal("show");
  });
});

// форма bootstrap

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validate");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// animations

AOS.init({
  offset: 200,
  duration: 400,
  easing: "ease-in-quad",
  delay: 200,
  disable: "mobile",
});

// swiper main

const slider1 = document.querySelector(".swiperMain");

let mainSwiper = new Swiper(slider1, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper modal portfolio

// gostinya
const slider2 = document.querySelector(".modalSwiper");

let swiperM2 = new Swiper(slider2, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// vtoroy svet
const slider3 = document.querySelector(".modalSwiper1");

let swiperM3 = new Swiper(slider3, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// kuhnya
const slider4 = document.querySelector(".modalSwiper2");

let swiperM4 = new Swiper(slider4, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// spalnya
const slider5 = document.querySelector(".modalSwiper3");

let swiperM5 = new Swiper(slider5, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// detskya
const slider6 = document.querySelector(".modalSwiper4");

let swiperM6 = new Swiper(slider6, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// sanyzel
const slider7 = document.querySelector(".modalSwiper5");

let swiperM7 = new Swiper(slider7, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// модальное окно portfolio
// gostinya
$(function () {
  $(".one-modal").click(function (e) {
    $("#gostinya-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#gostinya-modal").modal("show");
  });
});

// vtoroy svet
$(function () {
  $(".two-modal").click(function (e) {
    $("#vt-svet-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#vt-svet-modal").modal("show");
  });
});
// kuhnya
$(function () {
  $(".three-modal").click(function (e) {
    $("#kuhnya-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#kuhnya-modal").modal("show");
  });
});
// spalnya
$(function () {
  $(".four-modal").click(function (e) {
    $("#spalnya-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#spalnya-modal").modal("show");
  });
});
// detskya
$(function () {
  $(".five-modal").click(function (e) {
    $("#detskya-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#detskya-modal").modal("show");
  });
});
// sanuzel
$(function () {
  $(".six-modal").click(function (e) {
    $("#sanuzel-modal").attr({
      src: $(this).attr("src"),
      attr: $(this).attr("alt"),
    });
    $("#sanuzel-modal").modal("show");
  });
});
// swiper До и после

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 0,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    570: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper contacts

let swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  slideToClickedSlide: true,
  grabCursor: true,
  initialSlide: 1,
  loopPreventsSliding: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 43,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});

// swiper salon

const slider = document.querySelector(".swiper-container");

let salonSwiper = new Swiper(slider, {
  slidesPerView: 3,
  slideToClickedSlide: true,
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 100,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-s ",
    prevEl: ".swiper-button-prev-s ",
  },
});

// яндекс карта

// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
let mapTitle = document.createElement("div");
mapTitle.className = "mapTitle";
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = "Нажми чтобы посмотреть подробнее";
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function () {
  // убираем атрибут "style", в котором прописано свойство "pointer-events"
  this.children[0].removeAttribute("style");
  // удаляем элемент с интерактивной подсказкой
  mapTitle.parentElement.removeChild(mapTitle);
};
// по движению мыши в области карты
wrapMap.onmousemove = function (event) {
  // показываем подсказку
  mapTitle.style.display = "block";
  // двигаем подсказку по области карты вместе с мышкой пользователя
  if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + "px";
  if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + "px";
};
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function () {
  // прячем подсказку
  mapTitle.style.display = "none";
};

$(function () {
  $(".price-scroll").each(function () {
    this.hash += "#price";
  });
});

$(function () {
  $(".btn-catalog").each(function () {
    this.hash += "#catalog";
  });
});
