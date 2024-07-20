const form3 = document.querySelector(".form3");

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

const validation3 = new JustValidate(".form3");

validation3

  .addField(".input-name3", [
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

  .addField(".input-tel3", [
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

const form6 = document.querySelector(".form6");

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

const validation6 = new JustValidate(".form6");

validation6

  .addField(".input-name6", [
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

  .addField(".input-tel6", [
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

// скрол до блока
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
