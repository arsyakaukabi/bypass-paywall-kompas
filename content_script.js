function removeDOMElement(element) {
  if (element) {
    element.remove();
  }
}

function updateSectionClass() {
  const sectionElement = document.querySelector('section.paywall.hidden');
  if (sectionElement) {
    sectionElement.classList.remove('paywall', 'hidden');
    sectionElement.classList.add('non-paywall');
  }
}

function applyScript() {
  const paywall = document.querySelector("kompas-paywall");
  removeDOMElement(paywall);
  updateSectionClass();
}

applyScript();
