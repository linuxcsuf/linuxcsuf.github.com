$(function () {
    // Terminal.js
    var t1 = new Terminal();
    t1.setHeight("90px");
    $("#t1").append(t1.html);
    t1.input("What's your name?", function (i) {
        t1.print("Welcome, " + i + "!");
    });
});
