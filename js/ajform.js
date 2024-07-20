// ОТПРАВКА ФОРМЫ

console.log("Init!");

// inputmask
const form = document.querySelector(".form");

const validation = new JustValidate(".form");

// new JustValidate("form-2");

validation

  .addField(".input-name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите корректное имя",
    },

    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "required",
      value: true,
      errorMessage: "Обязательное поле",
    },
  ])
  .addField(".input-mail", [
    {
      rule: "required",
      value: true,
      errorMessage: "Обязательное поле",
    },
    {
      rule: "email",
      value: true,
      errorMessage: "Введите корректный Email",
    },
  ])
  .addField(".input-tel", [
    {
      rule: "required",
      value: true,
      errorMessage: "Обязательное поле",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
          Swal.fire({
            position: "center",
            showCloseButton: true,
            icon: "success",
            title: "Спасибо!",
            text: "Мы скоро свяжемся с вами",
            confirmButtonText: "Закрыть",
            width: "32rem",
          });
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });

// modal

const form1 = document.querySelector(".form1");

$(function () {
  $("[data-phone-pattern]").on("input blur focus", (e) => {
    var el = e.target,
      clearVal = $(el).data("phoneClear"),
      pattern = $(el).data("phonePattern"),
      matrix_def = "+7 (___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = $(el).val().replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        $(el).val("");
        return;
      }
    }
    if (def.length >= val.length) val = def;
    $(el).val(
      matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      })
    );
  });
});

const validation1 = new JustValidate(".form1");

validation1

  .addField(".input-name1", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите корректное имя",
    },

    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "required",
      value: true,
      errorMessage: "Обязательное поле",
    },
  ])

  .addField(".input-tel1", [
    {
      rule: "required",
      value: true,
      errorMessage: "Обязательное поле",
    },
  ])

  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
          Swal.fire({
            position: "center",
            showCloseButton: true,
            icon: "success",
            title: "Спасибо!",
            text: "Мы скоро свяжемся с вами",
            confirmButtonText: "Закрыть",
            width: "32rem",
          });
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });
