// ========================================
// BMW CAR DETAILS
// ========================================

function viewCar(carName) {

    let details = "";

    if (carName === "BMW M4 Competition") {

        details = `
BMW M4 COMPETITION

Power: 503 HP
Engine: 3.0L Twin-Turbo
Drive: AWD
Type: Sports Coupe

The BMW M4 Competition delivers
high-performance driving and dynamic
handling.
        `;

    }

    else if (carName === "BMW i7") {

        details = `
BMW i7

Power: Electric
Range: 600+ KM
Drive: AWD
Type: Luxury Electric Sedan

The BMW i7 combines luxury,
technology and electric performance.
        `;

    }

    else if (carName === "BMW XM") {

        details = `
BMW XM

Power: 644 HP
Engine: V8
Drive: AWD
Type: Performance SUV

The BMW XM combines powerful
performance with luxury.
        `;

    }

    else if (carName === "BMW X5") {

        details = `
BMW X5

Power: 375 HP
Engine: 3.0L
Drive: xDrive
Type: Luxury SUV

The BMW X5 offers comfort,
technology and performance.
        `;

    }

    alert(details);
}


// ========================================
// EXPLORE BUTTON
// ========================================

function showMessage() {

    alert(
        "Welcome to the BMW Cars Website!"
    );

}


// ========================================
// LEARN MORE
// ========================================

function learnMore() {

    alert(
        "BMW combines luxury, technology and performance."
    );

}


// ========================================
// CONTACT FORM
// ========================================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        let email =
            document.getElementById("email").value;

        let message =
            document.getElementById("message").value;


        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields.");

            return;
        }


        alert(
            "Thank you " + name +
            "!\nYour message has been received."
        );


        document
            .getElementById("contactForm")
            .reset();

    });

function viewCar(carName) {

    if (carName === "BMW M4 Competition") {

        alert(
            "BMW M4 Competition\n\n" +
            "Price: ₹1.53 Crore\n" +
            "Engine: 3.0L Twin Turbo\n" +
            "Power: 503 HP\n" +
            "Drive: AWD\n" +
            "Type: Sports Coupe"
        );

    }

    else if (carName === "BMW i7") {

        alert(
            "BMW i7\n\n" +
            "Price: ₹2.03 Crore\n" +
            "Power: Electric\n" +
            "Range: 600+ KM\n" +
            "Drive: AWD\n" +
            "Type: Luxury Electric Sedan"
        );

    }

    else if (carName === "BMW XM") {

        alert(
            "BMW XM\n\n" +
            "Price: ₹2.60 Crore\n" +
            "Engine: 4.4L V8\n" +
            "Power: 644 HP\n" +
            "Drive: AWD\n" +
            "Type: Performance SUV"
        );

    }

    else if (carName === "BMW X5") {

        alert(
            "BMW X5\n\n" +
            "Price: ₹1.00 Crore+\n" +
            "Engine: 3.0L\n" +
            "Power: 375 HP\n" +
            "Drive: xDrive\n" +
            "Type: Luxury SUV"
        );

    }

}