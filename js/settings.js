$(function () {
  function toggleNode(trigger, target) {
    var show = $(trigger).prop("checked");
    if (show) $(target).show();
    else $(target).hide();
  }

  $("#panel-detail-af .range-slider").slider({
    min: 1,
    max: 4000,
    value: [500, 1000],
  });

  $("#panel-detail-ac .range-slider").slider({
    min: 1,
    max: 50,
    value: [5, 30],
  });

  $("#panel-detail-al .range-slider").slider({
    min: 1,
    max: 4000,
    value: [500, 1000],
  });

  $("#switch-unfollow").change(function () {
    toggleNode("#switch-unfollow", "#share-details");
  });

  $("#switch-auto-follow").click(function () {
    $(".ccard.auto-follow").toggleClass("h-100");
    toggleNode("#switch-auto-follow", "#panel-detail-af");
  });

  $("input[name=follower_toggle]").click(function () {
    // toggleNode("#follower-toggle", "#user-selector-af");
    $("#user-selector-af").toggle();
  });

  $("input[name=likes_toggle]").click(function () {
    // toggleNode("#likes-toggle", "#user-selector-al");
    $("#user-selector-al").toggle();
  });

  $("#switch-comment").click(function () {
    $(".ccard.auto-comments").toggleClass("h-100");
    toggleNode("#switch-comment", "#panel-detail-ac");
  });

  $("#switch-likes").click(function () {
    $(".auto-likes").toggleClass("h-100");
    toggleNode("#switch-likes", "#panel-detail-al");
  });

  $("#switch-offer").click(function () {
    // $(".auto-offers").toggleClass("h-100");
    toggleNode("#switch-offer", "#panel-detail-ao");
  });

  $(".cinput-wrapper .reset").click(function () {
    $(this).parent().remove();
  });

  $("#panel-detail-ac .btn-plus").click(function () {
    var html =
      '<div class="cinput-wrapper mb-3"> ' +
      '<div class="cinput-text"> ' +
      '<label for="">Description</label> ' +
      "<input " +
      'type="text" ' +
      'class="cinput form-control" ' +
      'placeholder="Comment" ' +
      "/> " +
      "</div> " +
      '<div class="cinput-number"> ' +
      '<input type="number" class="form-control" /> ' +
      "</div>" +
      '<span class="reset"> ' +
      '<i class="fas fa-times"></i> ' +
      "</span> " +
      "</div>";
    $("#panel-detail-ac .input-group").append(html);
    initInputNumber();

    $(".cinput-wrapper .reset").click(function () {
      $(this).parent().remove();
    });
  });

  $(".user .del-user").click(function () {
    console.log("asdf");
    $(this).parent().remove();
  });

  $(".user-selector input").on("keydown", function (e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
      var name = $(this).val();
      $(this)
        .siblings(".user-list")
        .append(
          '<span class="user">' +
          name +
          '<i class="fas fa-times ml-2 del-user"></i></span>'
        );
      $(this).val("");

      $(".user .del-user").click(function () {
        $(this).parent().remove();
      });
    }
  });

  $(".offer-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $('#credentialsModal form').submit(function (e) {
    e.preventDefault();
    if ($('#user').val() && $('#pwd').val()) {
      $('#credentialsModal').modal('hide');
      $('#successmodal').modal('show');
    }
  });

  $('#thankyou-bt').click(function (e) {
    e.preventDefault();
    $('div #exchange-div').html(
      "<h2 class='mb-4 mt-2 title'>ACCOUNT CONNECTED</h2>" +
      "<div class='row'>" +
      "<div class='img-position col-5'>" +
      "<img id='avatar' src='img/avatar-other.png'>" +
      "<div><img id='mark' src='img/mark-rounded.png'></div>" +
      "</div>" +
      "<div class='col-7'>" +
      "<div><span class='logo-font'>John Samuels</span></div>" +
      "<button class='btn btn-danger radius-revise-maker'><img class='image-revise' src='img/svg/disconnected-chains.svg'><span class='btn-font'>Unlink</span></button>" +
      "</div>" +
      "</div>"
    );
    $('#successmodal').modal('hide');
  });

});


