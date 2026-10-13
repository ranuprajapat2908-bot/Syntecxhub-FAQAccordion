
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector(".faq-answer");
        const isActive = answer.classList.contains("active");

        // Close all answers
        document.querySelectorAll(".faq-answer").forEach((item) => {
            item.classList.remove("active");
        });

        // Open the clicked answer if it was closed
        if (!isActive) {
            answer.classList.add("active");
        }
    });
});
