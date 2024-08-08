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
        enlargedElement.style.height = 300 + "px";
      }
    });
  }

  element.classList.toggle("enlarged");

  let totalHeight = 0;
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    totalHeight += children[i].scrollHeight;
  }

  const margin = 75;
  if (element.classList.contains("enlarged")) {
    element.style.height = margin + totalHeight + "px";
  } else {
    element.style.height = 300 + "px";
  }

  console.log(`Width of element: ${totalHeight}px`);
  console.log("\n");
}
