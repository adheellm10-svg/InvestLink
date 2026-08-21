// ================================
// INVESTLINK INVESTOR DASHBOARD
// ================================


// SIDEBAR

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("open");
}


// SCROLL TO SECTION

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


// SAVE COMPANY

function saveCompany(button, companyName) {

    button.classList.toggle("saved");

    if (button.classList.contains("saved")) {

        button.textContent = "♥";

        showToast(
            companyName + " saved to your opportunities.",
            "♥"
        );

    } else {

        button.textContent = "♡";

        showToast(
            companyName + " removed from saved.",
            "✓"
        );

    }
}


// VIEW COMPANY

function showInterest(companyName) {

    showToast(
        "Opening " + companyName + " opportunity...",
        "↗"
    );

    /*
        Later:
        window.location.href =
        "company-details.html?company=" + companyName;
    */
}


// VIEW ALL

function showAllCompanies() {

    showToast(
        "Company marketplace will open here.",
        "↗"
    );

}


// NOTIFICATIONS

function showNotifications() {

    showToast(
        "You have 3 new notifications.",
        "!"
    );

}


// SETTINGS

function openSettings(event) {

    event.preventDefault();

    showToast(
        "Settings panel coming soon.",
        "⚙"
    );

}


// EDIT PROFILE

function editProfile() {

    showToast(
        "Profile editing will be available soon.",
        "✎"
    );

}


// LOGOUT

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "auth.html";

    }

}


// TOAST

function showToast(message, icon) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    const toastIcon =
        document.getElementById("toastIcon");


    toastMessage.textContent = message;

    toastIcon.textContent = icon;

    toast.classList.add("show");


    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// CLOSE SIDEBAR AFTER NAVIGATION

document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", () => {

        const sidebar =
            document.getElementById("sidebar");

        if (window.innerWidth <= 800) {

            sidebar.classList.remove("open");

        }

    });

});