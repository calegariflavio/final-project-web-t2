function openForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("formContainer").style.display = "block";
  }

  function closeForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("formContainer").style.display = "none";
  }

  document.getElementById("priceRange").addEventListener("input", function() {
    // Format the value as Canadian Dollars
    const priceOutput = document.getElementById("priceOutput");
    const formattedPrice = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.value);
    priceOutput.textContent = formattedPrice;
  });


  let currentIndex = 0;
    const totalPhotos = document.querySelectorAll('.photo').length;

    function showPhoto(index) {
      const photoContainer = document.querySelector('.photoContainer');
      photoContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextPhoto() {
      currentIndex = (currentIndex + 1) % totalPhotos;
      showPhoto(currentIndex);
    }

    function prevPhoto() {
      currentIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
      showPhoto(currentIndex);
    }





  