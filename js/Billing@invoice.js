function toggleUpdate() {
    $('#page-content-wrapper #invoice-toggled').toggle();
    $('#page-content-wrapper #invoice-toggle').toggle();
}

function addCard() {
    $('#page-content-wrapper #shown-card').toggle()
    $('#page-content-wrapper #hidden-card').toggle()
}

$(() => {
    $('#page-content-wrapper #search,#page-content-wrapper #invoices-close-bt').click(function () {
        toggleUpdate();
    });
    $('#page-content-wrapper #addPayment-bt , #page-content-wrapper #addCard-close-bt').click(function () {
        addCard();
    });

    $('#upgrade-package-silver-bt').click(function (e) {
        e.preventDefault();
        $('#successmodal-silver').modal('show');
        $('.other-panel-silver').css("background", "linear-gradient(125.26deg, #076AA2 14.32%, #75BBFE 79.92%)");
        $('.Bronze-panel').css("background", "#c6dff2");
        $('.other-panel-gold').css("background", "#c6dff2");
        $("#upgrade-package-silver-bt").html("<span class='btn-font'>Renew Package</span>");
        $("#renew-package-bronze-bt").html("<span class='btn-font'>Upgrade Package</span>");
        $("#upgrade-package-gold-bt").html("<span class='btn-font'>Upgrade Package</span>");
    });

    $('#upgrade-package-gold-bt').click(function (e) {
        e.preventDefault();
        $('#successmodal-gold').modal('show');
        $('.other-panel-gold').css("background", "linear-gradient(125.26deg, #076AA2 14.32%, #75BBFE 79.92%)");
        $('.Bronze-panel').css("background", "#c6dff2");
        $('.other-panel-silver').css("background", "#c6dff2");
        $("#upgrade-package-gold-bt").html("<span class='btn-font'>Renew Package</span>");
        $("#renew-package-bronze-bt").html("<span class='btn-font'>Upgrade Package</span>");
        $("#upgrade-package-silver-bt").html("<span class='btn-font'>Upgrade Package</span>");
    });

    $('#renew-package-bronze-bt').click(function (e) {
        e.preventDefault();
        $('#successmodal-bronze').modal('show');
        $('.Bronze-panel').css("background", "linear-gradient(125.26deg, #076AA2 14.32%, #75BBFE 79.92%)");
        $('.other-panel-silver').css("background", "#c6dff2");
        $('.other-panel-gold').css("background", "#c6dff2");
        $("#renew-package-bronze-bt").html("<span class='btn-font'>Renew Package</span>");
        $("#upgrade-package-silver-bt").html("<span class='btn-font'>Upgrade Package</span>");
        $("#upgrade-package-gold-bt").html("<span class='btn-font'>Upgrade Package</span>");
    });
})

