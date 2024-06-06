import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

function imagePaletteItems() {
    for (const photo of galleryItems) {
        //creare tag img + atribute/clasa
        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.setAttribute("src", photo.preview);
        image.setAttribute("data-source", photo.original);
        image.setAttribute("alt", photo.description);

        //creare tag li + atribute/clasa
        const elem = document.createElement("li");
        elem.classList.add("gallery__item");

        //creare tag a + atribute/clasa
        const link = document.createElement("a");
        link.setAttribute("href", photo.original);
        link.classList.add("gallery__link");
  
        //aranjare elemente
        elem.appendChild(link);
        link.appendChild(image);
        list.appendChild(elem);

        //Dezactivare comportament redirectionare/download
        link.addEventListener("click", (event) => {
        event.preventDefault();
        });
        
        let instance;
        //deschidere fereastra modala cu imaginea completa
        image.addEventListener("click", () => {
        instance = basicLightbox.create(`<img width="800" height="600" src="${photo.original}">`)
        instance.show();
        }); 
        
         //inchidere fereastra modala cu imaginea completa  
        document.addEventListener("keyup", (event) => {
            if (event.code === "Escape") {
                instance.close();
            }
        })
       
        
    }
 
}

imagePaletteItems();