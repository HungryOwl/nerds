   ;
   ymaps.ready(function() {
   var myMap;
       myMap = new ymaps.Map("map", {
         center: [59.9380,30.3200],
         zoom: [17],
         controls: []
      }),

      myMap.behaviors.disable("scrollZoom");
      myMap.controls.add("zoomControl");

      myPlacemark = new ymaps.Placemark([59.9386,30.3225], {
         hintContent: "",
         balloonContent: ""
         }, {

         iconLayout: "default#image",
         iconImageHref: "./img/icon-map.png",
         iconImageSize: [231, 190],
         iconImageOffset: [0, 0]
      }),

      myMap.geoObjects.add(myPlacemark);   
   });

   var link = document.querySelector(".send-message");
   var popup = document.querySelector(".modal-content");
   var close = document.querySelector(".modal-content-close");
   
   var form = popup.querySelector("form");
   var inputname = popup.querySelector("[name=user-name]");
   var inputmail = popup.querySelector("[name=user-mail]");
   var inputmessage = popup.querySelector("[name=user-message]");

   var storagemail = localStorage.getItem("inputmail");
   var storagename = localStorage.getItem("inputname");

   var canselmessage = popup.querySelector (".btn-cansel");
   var storagemessage = localStorage.getItem ("inputmessage");

   link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");

      if (storagemail && storagename) {
         inputname.value = storagename;
         inputmail.value = storagemail;
         inputmessage.focus();

      } else if (storagemail || storagename) {
         inputname.value = storagename;
         inputmail.value = storagemail;
         inputmessage.focus();

      } else if (storagemail) {
         inputmail.value = storagemail;
         inputmane.focus();

      } else if (storagename) {
         inputname.value = storagename;
         inputmail.focus();

      } else {
         inputname.focus();
      }
   });

   canselmessage.addEventListener("click", function(event) {
      storagemessage = inputmessage.value;

      if (storagemessage != null) {
      event.preventDefault();
      inputmessage.value = null;
      inputmessage.focus();
      }
   });

   close.addEventListener("click", function(event) {
      event.preventDefault();
      inputmessage.value = null;
      storagemessage = null;
      popup.classList.remove("modal-content-show");
   });

   form.addEventListener("submit", function(event) {
      if (!(inputname.value && inputmail.value && inputmessage.value)) {
         event.preventDefault();
      } else {
         localStorage.setItem("inputmail",inputmail.value);
         localStorage.setItem("inputname",inputname.value);
      }
   })

   window.addEventListener("keydown", function(event) {
      if (event.keyCode == 27) {
         if (popup.classList.contains("modal-content-show")) {
            inputmessage.value = null;
            storagemessage = null;
            popup.classList.remove("modal-content-show");
         }
      }
   });