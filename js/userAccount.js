function toggleUpdate() {
    $('#wrapper #toggled-board').toggle();
    $('#wrapper #toggle-board').toggle();
}

$(() => {
    $('#wrapper .btn-edit').click(function () {
        toggleUpdate();
        $("#page-content-wrapper .toggle-board").addClass("inserted");
    });
})