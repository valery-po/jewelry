new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
   pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
				bulletActiveClass: 'projects-bullet-active',
				clickable: true
  },
	autoplay: true,
	
});

$(".menu__btn").on("click", function () {
		
		$(".menu__btn").toggleClass("menu__btn--active");
	 $(".menu__list").toggleClass("menu__list--active");
	
	});

$(".menu__list-link").on("click", function () {
		
		$(".menu__btn").removeClass("menu__btn--active");
	 $(".menu__list").removeClass("menu__list--active");
	
	});

   $(".menu__list-link").on("click", function(event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
});

const scrollBtn = $(".scroll-to-top-btn");

    // По скроллу скрываем или показываем кнопку 
    $(window).scroll(function(){
        
    if ( $(this).scrollTop() > 500 ) {
        scrollBtn.fadeIn();
    } else {
        scrollBtn.fadeOut();
    }
    
    })


// Клик по кнопке
    
    scrollBtn.click(function(){
        $("html, body").animate({
            scrollTop: 0
         }, 300);
       return false;
    
    })

const formBtn = document.querySelector(".form__btn");
const openBtn = document.querySelector('.open-btn');
const modal = document.querySelector('.modals');
const closeBtn = document.querySelector('.modal__btn');
const mobileClose = document.querySelector('.mobile-close');
const formInput = document.getElementById("form");
const modalForm = document.querySelector(".modal__form");
console.log(formInput);



let disableScroll = function (){
	
	let pagePosition = window.scrollY;
	document.body.classList.add("disable-scroll");
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + "px";
}

let enableScroll = function (){
	
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = "auto";
	document.body.classList.remove("disable-scroll");
	window.scroll({top: pagePosition, left: 0});
	document.body.removeAttribute("data-position");
	
	
}
	
openBtn.addEventListener("click", () => {
	
	openModalDesktop();
	openModalMobile();
	formInput.reset();
	
});

modal.addEventListener("click", (e) => {
	if(e.target == modal){
	closeModal();
	}
});

closeBtn.addEventListener("click", () => {
	closeModal();
	
});







const openModalDesktop = () => {
	modal.classList.add("is-open");
	
	disableScroll();
	
}

const closeModal = () => {
	modal.classList.remove("is-open");
	disableScroll();
	

}



const openModalMobile = () => {
	
 modal.classList.add("is-open");

 disableScroll();
 setTimeout(() => {
	
modal.querySelector(".modal").classList.add("visible");
 
 }, 300);
 
}


const closeModalMobile = () => {
	modal.querySelector(".modal").classList.remove("visible");
	setTimeout(() => {
	 modal.classList.remove("is-open");
	
     enableScroll();	
	
	 
		
}, 400);

}



 mobileClose.addEventListener('swiped-down', function(e) {
 closeModalMobile();
 
});  
 
 
   mobileClose.addEventListener('click', function(e) {

	closeModalMobile();
	formInput.reset();
	

});  

	
  


	
	
	
	
	
	const form = document.getElementById("form");
	form.addEventListener("submit", formSend);
	
	async function formSend(e){
		e.preventDefault();
		
		let error = formValidate(form);
        
        let formData = new FormData(form);
		
		//formData.append("image", formImage.files[0]);
/*
         if(error === 0){
           form.classList.add("_sending");*/
     /*     let response = await fetch("sendMail.php", {
				method: "POST",
				body: formData
			});

            if(response.ok){
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = "";
				form.reset();
              form.classList.remove("_sending");
			}else {
				alert("Ошибка");
              form.classList.remove("_sending");
			}
        
         }else {
              alert("Заполните обязательные поля");
          }*/
	}
	
	function formValidate(form) {
		
		let error = 0;
		let formReq = document.querySelectorAll("._req");
 
		
		
	
		for (let index = 0; index < formReq.length; index++){
			const input = formReq[index];
			

	formBtn.addEventListener("click", () => {
	modal.querySelector(".modal").classList.remove("visible");
/*	formInput.reset();*/
	  
});
	 
	formBtn.addEventListener("click", () => {
	closeModal();
/*	formInput.reset();*/
	
});
	
formRemoveError(input);
	 
	
    
			 if(input.value === "") {
					
					formAddError(input);
					error++;
				}
			
			if(input.classList.contains("_email")) {
    	
				 if(emailTest(input)) {
						formAddError(input);
						error++;
					}
			} 
		} 
					return error;
	}
	
	function formAddError(input){
		input.parentElement.classList.add("_error");
		input.classList.add("_error")
		
	}
	
		function formRemoveError(input){
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error")
		
	}
	
	function emailTest(input){
		
		return /^(?!.*([-,])\d+\1)(?!.*,\d+-)\d+(?:[-,;]\d+)*$/.test(input.value);
	}

































