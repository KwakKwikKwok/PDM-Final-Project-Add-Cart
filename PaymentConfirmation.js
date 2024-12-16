document.querySelector(".upload-file-button").addEventListener("click", function() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.click();

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const image = document.createElement("img");
                image.src = e.target.result;
                image.classList.add("uploaded-image");
                
                const uploadBox = document.querySelector(".upload-box");
                uploadBox.innerHTML = '';
                uploadBox.appendChild(image);
            };

            reader.readAsDataURL(file);
        }
    });
});
