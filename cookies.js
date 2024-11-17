document.addEventListener("DOMContentLoaded", function () {
    // Place all your existing code inside here
    let cookies = 0;
    let cursors = 0;
    let grandmas = 0;
    let farms = 0
    let cursorCost = 15;
    let grandmaCost = 100;

    // Get references to elements in the HTML
    const cookieButton = document.getElementById("cookieButton");
    const cookieCountDisplay = document.getElementById("cookieCount");

    const buyCursorButton = document.getElementById("buyCursorButton");
    const buyGrandmaButton = document.getElementById("buyGrandmaButton");

    const cursorCountDisplay = document.getElementById("cursorCount");
    const grandmaCountDisplay = document.getElementById("grandmaCount");

    // Update the cookie count display
    function updateCookieDisplay() {
        cookieCountDisplay.textContent = `Cookies: ${cookies.toFixed(0)} )`;
        cursorCountDisplay.textContent = `Cursors: ${cursors} (Cost: ${cursorCost.toFixed(0)} cookies)`;
        grandmaCountDisplay.textContent = `Grandmas: ${grandmas} (Cost: ${grandmaCost.toFixed(0)} cookies)`;
    }

    // Add cookies when the button is clicked
    cookieButton.onclick = function () {
        cookies++;
        updateCookieDisplay();
    };

    // Buy a cursor when the button is clicked
    buyCursorButton.onclick = function () {
        if (cookies >= cursorCost) {
            cookies -= cursorCost;
            cursors++;
            cursorCost = cursorCost * 1.3;  // Increase the cost of the next cursor by 1.3x
            updateCookieDisplay();
        }
    };

    // Buy a grandma when the button is clicked
    buyGrandmaButton.onclick = function () {
        if (cookies >= grandmaCost) {
            cookies -= grandmaCost;
            grandmas++;
            grandmaCost = grandmaCost * 1.3;  // Increase the cost of the next grandma by 1.3x
            updateCookieDisplay();
        }
    };

    // Cursors produce 1 cookie every 10 seconds
    setInterval(function () {
        cookies += cursors;  // Add cookies based on how many cursors you have
        updateCookieDisplay();
    }, 10000);  // 10 seconds

    // Grandmas produce 1 cookie every second
    setInterval(function () {
        cookies += grandmas;  // Add cookies based on how many grandmas you have
        updateCookieDisplay();
    }, 1000);  // 1 second
});
