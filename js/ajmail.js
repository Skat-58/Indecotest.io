// email рассылка

const form5 = document.querySelector(".form5");

const validation5 = new JustValidate(".form5");

validation5

  .addField(".input-mail5", [
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
