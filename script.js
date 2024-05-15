document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbar-toggle");
    var navbarLinks = document.getElementById("navbar-links");

    navbarToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
});

function updateHolidayContent(title, imageSrc, textColor) {
    if (title == "null") {
        document.getElementById('holidaySlide').style.display = 'none';
    } else {
        document.getElementById('holidaySlide').style.display = 'block';
    }
    document.getElementById('holidayTitle').innerText = title;
    document.getElementById('holidayImage').src = imageSrc;
    document.getElementById('holidayTitle').style.color = textColor;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // Get the current month (0 = January, 1 = February, ..., 11 = December)
    var currentDay = currentDate.getDate(); // Get the current day of the month
    //currentMonth = 3;
    //currentDay = 12;
    switch (currentMonth) {
        case 0: // January
            if (currentDay >= 1 && currentDay <= 7) {
                updateHolidayContent("HOPPY NEW YEAR!", "images/new_year_image.jpg", "#FFD700");
            }
            break;
        case 1: // February
            if (currentDay >= 7 && currentDay <= 20) {
                updateHolidayContent("HOPPY VALENTINE'S DAY", "images/valentines_day.jpg", "#FF0000");
            }
            break;
        case 3: // April
            if (currentDay >= 12 && currentDay <= 30) {
                updateHolidayContent("HOPPY EASTER!", "images/easter.jpg", "#02f567");
            }
            break;
        case 6: // July
            if (currentDay >= 1 && currentDay <= 14) {
                updateHolidayContent("HOPPY 4TH OF JULY", "images/july_4.jpg", "#FFD700");
            }
            break;
        case 9: // October
            updateHolidayContent("HOPPY HALLOWEEN!", "images/halloween1.jpg", "#fc8626");
            break;
        case 10: // November
                updateHolidayContent("HOPPY THANKSGIVING", "images/thanksgiving.jpg", "#fc8626");
            break;
        case 11: // December
            if (currentDay >= 1 && currentDay <= 27) {
                updateHolidayContent("A HOPPY HOLIDAY", "images/pixelated_frog_santa_hat.jpg", "#FF0000");
            } else if (currentDay >= 28) {
                updateHolidayContent("HOPPY NEW YEAR!", "images/new_year_image.jpg", "#FFD700");
            }
            break;
        default:
            updateHolidayContent("null", "shouldnt matter", "shouldnt be");
        break;
    }
});
