function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function enlargeBox(element) {
  const enlargedElements = document.querySelectorAll(".enlarged");

  if (enlargedElements.length > 0) {
    enlargedElements.forEach((enlargedElement) => {
      console.log(
        `Element ${enlargedElement.innerText} is currently enlarged.`
      );
    });

    enlargedElements.forEach((enlargedElement) => {
      if (enlargedElement !== element) {
        enlargedElement.classList.remove("enlarged");
      }
    });
  }

  element.classList.toggle("enlarged");
  console.log("\n");
}
