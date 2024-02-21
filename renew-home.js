
function toggleAccordion(card) {
    var content = card.querySelector('.faq_body');
    var icon = card.querySelector('.faq_icon');

    var isOpen = content.style.maxHeight !== '0px';

    closeAllAccordions();

    if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
    }
}

function closeAllAccordions() {
    var allCards = document.querySelectorAll('.faq_accordion');
    allCards.forEach(function (card) {
        var content = card.querySelector('.faq_body');
        var icon = card.querySelector('.faq_icon');
        content.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
    });
}

function removeStrokeFromLastAccordion() {
    var allAccordions = document.querySelectorAll('.faq_accordion');
    if (allAccordions.length > 0) {
        allAccordions.forEach(function (accordion) {
            accordion.style.border = "";
        });

        var lastAccordion = allAccordions[allAccordions.length - 1];
        lastAccordion.style.border = "none";
    }
}

window.onload = function () {
    var allContents = document.querySelectorAll('.faq_body');
    allContents.forEach(function (content) {
        content.style.maxHeight = '0px';
    });

    if (allContents.length > 0) {
        var firstAccordionContent = allContents[0];
        firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + "px";

        var firstAccordionIcon = firstAccordionContent.parentNode.querySelector('.faq_icon');
        if (firstAccordionIcon) {
            firstAccordionIcon.style.transform = 'rotate(45deg)';
        }
    }

    removeStrokeFromLastAccordion();
};

document.querySelectorAll('.faq_accordion').forEach(function (card) {
    card.addEventListener('click', function () {
        toggleAccordion(card);
    });
});
