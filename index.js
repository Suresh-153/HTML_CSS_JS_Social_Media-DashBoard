document.addEventListener("DOMContentLoaded", function () {
    var lightTheme = document.getElementById("check");
    document.body.classList.remove("light-theme-body");
    lightTheme.checked = false;
    lightTheme.addEventListener("change", function () {
        if (lightTheme.checked) {
            document.body.classList.add("light-theme-body");
            document.getElementById("total-followers").style.color = "hsl(228, 12%, 44%)";
            document.getElementById("theme").style.color = "hsl(228, 12%, 44%)";
            document.querySelector(".second-container").style.backgroundColor = "hsl(0, 0%, 100%)";
            var item = document.querySelectorAll(".layout1 .item");
            var followersCount = document.querySelectorAll(".followers-count");
            for (var i = 0; i < item.length; i++) {
                item[i].classList.remove("item");
                item[i].classList.add("light-theme-item");
                followersCount[i].style.color = "hsl(230, 17%, 14%)";
            }
            document.querySelector(".third-container").style.backgroundColor = "hsl(0, 0%, 100%";
            document.getElementById("sub-heading").style.color = "hsl(228, 12%, 44%)"
            var subItem = document.querySelectorAll(".third-container .sub-item");
            var count = document.querySelectorAll(".sub-item #count");
            for (var i = 0; i < subItem.length; i++) {
                subItem[i].classList.remove("sub-item");
                subItem[i].classList.add("light-theme-sub-items");
                count[i].style.color = "hsl(230, 17%, 14%)";
            }
        }
        else {
            document.body.classList.remove("light-theme-body");
            document.getElementById("total-followers").style.color = "hsl(228, 34%, 66%)";
            document.querySelector(".first-container").classList.remove("light-theme-body");
            document.getElementById("theme").style.color = "hsl(0, 0%, 100%)";
            document.querySelector(".second-container").style.backgroundColor = "hsl(230, 17%, 14%)";
            var item = document.querySelectorAll(".layout1 .light-theme-item");
            var followersCount = document.querySelectorAll(".followers-count");
            for (var i = 0; i < item.length; i++) {
                item[i].classList.remove("light-theme-item");
                item[i].classList.add("item");
                followersCount[i].style.color = "hsl(0, 0%, 100%)";
            }
            document.querySelector(".third-container").style.backgroundColor = "hsl(230, 17%, 14%)";
            document.getElementById("sub-heading").style.color = "hsl(0, 0%, 100%)";
            var subItems = document.querySelectorAll(".third-container .light-theme-sub-items");
            var count = document.querySelectorAll(".light-theme-sub-items #count");
            for (var i = 0; i < subItems.length; i++) {
                subItems[i].classList.add("sub-item");
                subItems[i].classList.remove("light-theme-sub-items");
                count[i].style.color = "hsl(0, 0%, 100%)";
            }
        }
})});