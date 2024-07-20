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
