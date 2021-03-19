const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      if (this.name === "sepia") {
        document.querySelector("img").style.setProperty("filter", "sepia" + `(${this.value}%)`);
      }

      if (this.name === "brightness") {
        document.querySelector("img").style.setProperty("filter", "brightness" + `(${this.value}%)`);
      }

      if (this.name === "contrast") {
        document.querySelector("img").style.setProperty("filter", "contrast" + `(${this.value}%)`);
      }

      if (this.name === "opacity") {
        document.querySelector("img").style.setProperty("filter", "opacity" + `(${this.value}%)`);
      }

      if (this.name === "saturate") {
        document.querySelector("img").style.setProperty("filter", "saturate" + `(${this.value}%)`);
      }

      if (this.name === "grayscale") {
        document.querySelector("img").style.setProperty("filter", "grayscale" + `(${this.value}%)`);
      }

      if (this.name === "hue-rotate") {
        document.querySelector("img").style.setProperty("filter", "hue-rotate" + `(${this.value}deg)`);
      }

      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    var img = document.querySelector('img');

    window.addEventListener('load', function() {
      document.querySelector('input[type="file"]').addEventListener('change', function() {
          if (this.files && this.files[0]) {
              img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
                img.classList.add("img-style");
              }
    
              img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          }
      });
    });

    document.querySelector("button").addEventListener('click', function() {
      console.log(img.src);
      FileSaver.saveAs(img.src, "image_edit.jpg");
    });

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));