function initInputNumber() {
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".cinput-number input");
  jQuery(".cinput-number").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
}

$(function () {
  initInputNumber();

  $("input:checkbox").on("click", function () {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    var group = "input:checkbox[name='" + $box.attr("name") + "']";

    if ($box.is(":checked")) {
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $(group).prop("checked", true);
      $box.prop("checked", false);
    }
  });
});
