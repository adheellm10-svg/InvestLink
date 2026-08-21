// MOBILE MENU

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function closeMenu() {

    document.getElementById("mobileMenu").style.display = "none";

}


// FEATURED OPPORTUNITY

function viewOpportunity() {

    alert(
        "Nova Energy\n\n" +
        "Industry: Clean Energy & Technology\n" +
        "Funding Target: ₹25 Lakhs\n" +
        "Funding Raised: ₹18 Lakhs\n" +
        "Stage: Seed\n\n" +
        "Please login as an Investor to continue."
    );

}


// COMPANY DETAILS

function showCompany(company) {

    alert(
        company +
        "\n\n" +
        "This company profile contains business details, " +
        "funding requirements and investor connection options.\n\n" +
        "Please login to view the complete profile."
    );

}


// SCROLL ANIMATION

const cards = document.querySelectorAll(
    ".opportunity-card, .role-card, .stat"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});