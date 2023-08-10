let sidebar = document.getElementById("sidebar");
let close_btn = document.getElementById("close-btn");
let bars = document.getElementById("bars");
let above = document.getElementById("above");
let all_back = document.getElementsByClassName("all_back");
let side_head = document.getElementById("side-head");

bars.addEventListener('click', function () {
    sidebar.style.display = 'block';
    sidebar.style.width = '250px';
    above.style.display = 'block';

    setTimeout(fun1, 90);
    function fun1() {
        side_head.style.display = 'block';
        side_head.style.width = '250px';
    }
    
    above.addEventListener('click', function () {
        sidebar.style.width = '0px';
        above.style.display = 'none';
        side_head.style.width = '0px';
        side_head.style.display = 'none';
    });
});

close_btn.addEventListener('click', function () {
    // sidebar.style.display = 'none';
    sidebar.style.width = '0px';
    above.style.display = 'none';

    side_head.style.display = 'none';
    side_head.style.width = '0px';


});


