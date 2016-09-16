$(function () {
    // Terminal.js
    var load = false;
    var t1 = new Terminal();
    t1.setHeight("90px");
    $("#t1").append(t1.html);
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
        if (!load) {
            t1.input("What's your name?", function (i) {
                t1.print("Welcome, " + i + "!");
                window.open("http://webchat.freenode.net/?nick=" + i + "&channels=%23linuxcsuf&uio=d4",'_blank');
            });
            load = true;
        }
    });
});
