document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
        =========================
        MOBILE MENU
        =========================
        */

        const menuButton =
            document.getElementById(
                "menuButton"
            );

        const navigation =
            document.getElementById(
                "navigation"
            );


        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "active"
                );

            }
        );


        /*
        =========================
        CLOSE MENU AFTER CLICK
        =========================
        */

        const navLinks =
            navigation.querySelectorAll(
                "a"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );


        /*
        =========================
        CONTACT FORM
        =========================
        */

        const contactForm =
            document.getElementById(
                "contactForm"
            );


        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value;


                const email =
                    document.getElementById(
                        "email"
                    ).value;


                const message =
                    document.getElementById(
                        "message"
                    ).value;


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;

                }


                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been received."
                );


                contactForm.reset();

            }
        );


        /*
        =========================
        SIMPLE SCROLL EFFECT
        =========================
        */

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            targetId === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();

                            target.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }
                );

            }
        );

    }
);
