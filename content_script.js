// Function to remove a DOM element if it exists
const removeDOMElement = (element) => {
  if (element) {
    element.remove();
  }
};

// Function to update the class name of the hidden paywall section
const updateSectionClass = () => {
  // Find the hidden paywall section in the DOM
  const sectionElement = document.querySelector('section.paywall.hidden');

  // If the hidden paywall section is found, update its classes
  if (sectionElement) {
    sectionElement.classList.remove('paywall', 'hidden'); // Remove 'paywall' and 'hidden' classes
    sectionElement.classList.add('non-paywall'); // Add the 'non-paywall' class
  }
};

// Function to apply the script
const applyScript = () => {
  // Find the 'kompas-paywall' element in the DOM
  const paywall = document.querySelector("kompas-paywall");

  // Remove the 'kompas-paywall' element if it exists
  removeDOMElement(paywall);

  // Update the class name of the hidden paywall section
  updateSectionClass();
};

// Call the function to apply the script
applyScript();
