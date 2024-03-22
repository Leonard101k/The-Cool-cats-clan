document.addEventListener("DOMContentLoaded", function() {
  const apiKey = "live_0aBxoTzHeQo58VwyojmAm0sbOUPrFKiIz7Klmz2Ybg7vQitFyb2N9HLA01bf0sII";
  const catGallery = document.querySelector(".cat-gallery");

  fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&order=Desc`, {
    headers: {
      "x-api-key": apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => {
      const catImage = document.createElement("div");
      catImage.classList.add("cat-image");
      catImage.innerHTML = `<img src="${cat.url}" alt="Cat">`;
      catGallery.appendChild(catImage);
    });
  })
  .catch(error => console.error("Error fetching cat images:", error));
});
