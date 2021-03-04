$(function () {
  function toggleNode(trigger, target) {
    var show = $(trigger).prop("checked");
    if (show) $(target).show();
    else $(target).hide();
  }

  $(".range-slider").slider({
    value: [500, 1000],
    min: 10,
    max: 2023,
    labelledby: [550, 2023],
  });

  $("#switch-unfollow").change(function () {
    toggleNode("#switch-unfollow", "#share-details");
  });

  $("#switch-auto-follow").click(function () {
    $(".ccard.auto-follow").toggleClass("h-100");
    toggleNode("#switch-auto-follow", "#panel-detail-af");
  });

  $("#follower-custom").click(function () {
    toggleNode("#follower-custom", "#user-selector-af");
  });

  $("#likes-custom").click(function () {
    toggleNode("#likes-custom", "#user-selector-al");
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
});
