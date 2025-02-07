document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("4Y2FivMY4LdTC6wTi"); // Ваш USER ID из EmailJS

    function checkFormAndInit() {
        const form = document.querySelector(".subscribe-form");
        if (!form) {
            console.warn("Форма подписки не найдена. Ожидание загрузки...");
            setTimeout(checkFormAndInit, 500); // Проверять каждые 500 мс
            return;
        }

        console.log("Форма найдена, подключаем обработчик...");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_snx3yur", "template_50hr70q", form)
                .then(() => {
                    console.log("SUCCESS!");
                    form.style.display = "none";
                    document.querySelector(".thank-you-message").style.display = "block";
                })
                .catch(error => console.error("FAILED...", error));
        });
    }

    checkFormAndInit(); // Запускаем проверку формы
});
