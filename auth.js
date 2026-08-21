// CURRENT ROLE

let selectedRole = "investor";


// SHOW LOGIN

function showLogin() {

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");

    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");
}


// SHOW REGISTER

function showRegister() {

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    loginTab.classList.remove("active");
    registerTab.classList.add("active");
}


// SELECT ROLE

function selectRole(role) {

    selectedRole = role;

    const investor = document.getElementById("investorRole");
    const founder = document.getElementById("founderRole");

    investor.classList.remove("active");
    founder.classList.remove("active");

    if (role === "investor") {

        investor.classList.add("active");

    } else {

        founder.classList.add("active");

    }
}


// PASSWORD SHOW / HIDE

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }
}


// LOGIN

function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {

        showToast(
            "Please fill all required fields.",
            "!"
        );

        return;
    }


    // Demo login

    showToast(
        "Demo login successful!",
        "✓"
    );

    setTimeout(() => {

        // Later we will connect this to PHP/MySQL

        window.location.href = "investor.html";

    }, 1200);
}


// REGISTER

function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const terms =
        document.getElementById("terms").checked;


    if (!name || !email || !password) {

        showToast(
            "Please fill all required fields.",
            "!"
        );

        return;
    }


    if (password.length < 6) {

        showToast(
            "Password must contain at least 6 characters.",
            "!"
        );

        return;
    }


    if (!terms) {

        showToast(
            "Please accept the terms and privacy policy.",
            "!"
        );

        return;
    }


    showToast(
        "Account created as " +
        selectedRole +
        "!",
        "✓"
    );


    setTimeout(() => {

        showLogin();

    }, 1500);

}


// FORGOT PASSWORD

function forgotPassword(event) {

    event.preventDefault();

    showToast(
        "Password reset feature will be added later.",
        "!"
    );
}


// SOCIAL LOGIN

function socialLogin(provider) {

    showToast(
        provider +
        " login will be connected later.",
        "!"
    );
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


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}