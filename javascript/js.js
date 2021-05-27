//Функция для выпадающих списков
function list(){
	//Алгоритм для выпадающих списков
	let menu = document.querySelector("#dots_header");
		menuList = document.querySelector("#menu_social")
		navLink = document.querySelector(".nav_element");
		navServices = document.querySelector("#services_menu");
		burgerBlock = document.querySelector("#burger_mobile");
		burgerList = document.querySelector('.burger_list');
	//Для трёхточечного меню
	menu.addEventListener("mouseover", function(){
		menuList.style.display = "block";
	})

	menu.addEventListener("mouseout", function(){
		menuList.style.display = "none";
	})

	//Для списка услуг
	navLink.addEventListener("mouseover", function(){
		navServices.style.display = "block";
	})

	navLink.addEventListener("mouseout", function(){
		navServices.style.display = "none"
	})

	//Для меню мобильных устройств
	burgerBlock.addEventListener("mouseover", function(){
		burgerList.style.display = "block";
	})

	burgerBlock.addEventListener("mouseout", function(){
		burgerList.style.display = "none";
	})
}

list()

//Эффекты для кнопок

try{
	function buttonsFect(){
	let	firstButton = document.querySelector("#first_button_bar");
	secondButton = document.querySelector("#second_button_bar");
	//thirdButton = document.querySelector("#third_button_bar");

	firstButton.classList.add("active");;

	firstButton.addEventListener("click", function(){
		firstButton.classList.add("active");
		secondButton.classList.remove("active");
		//thirdButton.classList.remove("active");
	})

	secondButton.addEventListener("click", function(){
		firstButton.classList.remove("active");
		secondButton.classList.add("active");
		//thirdButton.classList.remove("active");
	})
}

buttonsFect()
}catch(err){
	
}

//Слайдер третьего блока

try{
	function sliderFect(){
	const sliderElement = document.querySelector(".container_slider");
	sliderLineThird = document.querySelector('.container_line');

	let leftOff = 0;
		next = document.querySelector('#next');
		prev = document.querySelector('#prev');

	next.addEventListener("click", function(){
		leftOff = leftOff + document.querySelector(".wrapper_third .container_line .block").offsetWidth;
		if(leftOff > document.querySelector(".wrapper_third .container_line .block").offsetWidth){
			leftOff = 0;
		}
		sliderLineThird.style.left = -leftOff + "px";
	})

	 prev.addEventListener("click", function(){
	 	leftOff = leftOff - document.querySelector(".wrapper_third .container_line .block").offsetWidth;
	 	if(leftOff < 0){
	 		leftOff = document.querySelector(".wrapper_third .container_line .block").offsetWidth;
	 	}
	 	sliderLineThird.style.left = -leftOff + "px";
	})
	}
sliderFect()
}catch(err){
	
}

try{
//Слайдер первого блока
const sliderWrapFirst = document.querySelector('.slider');
	sliderLine = document.querySelector('.slider_line');

let firstButton = document.querySelector("#first_button_bar");
	secondButton = document.querySelector("#second_button_bar");
//Основной код слайдера
function sliderScroll(){
	firstButton.addEventListener("click", function(){
		sliderLine.style.left = document.querySelector(".slider_element").offsetWidth - document.querySelector(".slider_element").offsetWidth; + "px";
	})
	secondButton.addEventListener("click", function(){
		sliderLine.style.left = -document.querySelector(".slider_element").offsetWidth + "px";
	})
}

sliderScroll()
// sliderAuto()
}catch(err){
	
}
/////Код ПопАпа
const popupActive = document.querySelector(".telefon_children");

let popupWindow = document.querySelector("#popup");
	popupContent = document.querySelector(".popup_content");
	close = document.querySelector("#close");

//Код вызова
	popupActive.addEventListener("click", function(){
		popupWindow.style.top = "0";
		popupWindow.style.left = "0";
		//Блокировка скролла на странице
		document.body.style.overflowY = "hidden"
	})
//Код закрытия
	close.addEventListener("click", function(){
		popupWindow.style.top = "";
		document.body.style.overflowY = "scroll";
	})

	window.onclick = function(event){
		if(event.target == popup){
			popupWindow.style.position = "";
			popupWindow.style.top = "";
			document.body.style.overflowY = "scrolle";
		}
	}


//Прогрузка блоков на странице с отзывами(Юристы)
if(window.screen.width > 1024){
	try{
	let buttonShow = document.querySelector("#button_load_more button");


		buttonShow.addEventListener("click", function(){
			let blocks = document.querySelectorAll(".hidden")
			for(let i = 0; i < 3 && i < blocks.length; i = i + 1){
				blocks[i].classList.remove("hidden");
			}

			if(document.querySelectorAll(".hidden").length == 0){
				buttonShow.style.display = "none";
			}
		})
	}catch(err){
		
	}
}else{
	try{
	let buttonShow = document.querySelector("#button_load_more button");


		buttonShow.addEventListener("click", function(){
			let blocks = document.querySelectorAll(".hidden")

			for(let i = 0; i < 2 && i < blocks.length; i = i + 1){
				blocks[i].classList.remove("hidden");
			}

			if(document.querySelectorAll(".hidden").length == 0){
				buttonShow.style.display = "none";
			}
		})
	}catch(err){
		
	}
}
//Прогрузка блоков на странице психологической помощи
function psihoLoad(){
try{
	if(window.screen.width > 455){
		let buttonDisplay = document.querySelector(".more");

		buttonDisplay.addEventListener("click", function(){
			let blocksPsihologiya = document.querySelectorAll(".hide");

			for(let i = 0; i < 3 && i < blocksPsihologiya.length; i++){
				blocksPsihologiya[i].classList.remove("hide");
			}

			if(document.querySelectorAll(".hide").length == 0){
				buttonDisplay.style.display = "none";
			}
		})
}else if(window.screen.width <= 455){
	let blocksPsiho = document.querySelectorAll(".psiholog__wrapper_third .container .block");

	for(let el = 2; el < 3 && el < blocksPsiho.length; el++ ){
		blocksPsiho[el].classList.add("hide");
	}

	let buttonDisplay = document.querySelector(".more");

	buttonDisplay.addEventListener("click", function(){
		let blocksPsihologiya = document.querySelectorAll(".hide");

		for(let i = 0; i < 2 && i < blocksPsihologiya.length; i++){
			blocksPsihologiya[i].classList.remove("hide");
		}

		if(document.querySelectorAll(".hide").length == 0){
			buttonDisplay.style.display = "none";
		}
	})
}
}catch(err){
	
}
}
psihoLoad()
//Попапы на странице Школы Танцев
function popDanceFunc(){
	const dancePop = document.querySelectorAll(".dance_popup");
		popWaltz = document.querySelector(".pop_waltz");
		popSalza = document.querySelector(".pop_salza");
		popTango = document.querySelector(".pop_tango");
		popYoga = document.querySelector(".pop_yoga");

	let	closeDance = document.querySelector(".dance_close")
		closeWaltz = document.querySelector(".waltz_close");
		closeSalza = document.querySelector(".salza_close")
		closeTango = document.querySelector(".tango_close")
		closeYoga = document.querySelector(".yoga_close")

	let buttonPop = document.querySelectorAll(".dance_pop");
		buttonWaltz = document.querySelector(".waltz");
		buttonSalza = document.querySelector(".salza");
		buttonTango = document.querySelector(".tango");
		buttonYoga = document.querySelector(".yoga");

		//Общее
		//Вальс
		buttonWaltz.addEventListener("click", function(){
			popWaltz.style.position = "fixed";
			popWaltz.style.top = "0";

			document.body.style.overflowY = "hidden";
		})

		closeWaltz.addEventListener("click", function(){
			popWaltz.style.position = "";
			popWaltz.style.top = "";

			document.body.style.overflowY = "scroll";
		})

		window.addEventListener("click", function(event){
			if(popWaltz.style.position = "fixed" && event.target == popWaltz){
				popWaltz.style.position = "";
				popWaltz.style.top = "";

				document.body.style.overflowY = "scroll";
			}
		})
		//Сальса
		buttonSalza.addEventListener("click", function(){
			popSalza.style.position = "fixed";
			popSalza.style.top = "0";

			document.body.style.overflow = "hidden";
		})

		closeSalza.addEventListener("click", function(){
			popSalza.style.position = "";
			popSalza.style.top = "";

			document.body.style.overflowY = "scroll";
		})

		window.addEventListener("click", function(event){
			if(popSalza && event.target == popSalza){
				popSalza.style.position = "";
				popSalza.style.top = "";

				document.body.style.overflowY = "scroll";
			}
		})
		//Танго
		buttonTango.addEventListener("click", function(){
			popTango.style.position = "fixed";
			popTango.style.top = "0";

			document.body.style.overflowY = "hidden";
		})

		closeTango.addEventListener("click", function(){
			popTango.style.position = "";
			popTango.style.top = "";

			document.body.style.overflowY = "scroll";
		})

		window.addEventListener("click", function(event){
			if(popTango && event.target == popTango){
				popTango.style.position = "";
				popTango.style.top = "";

				document.body.style.overflowY = "scroll";
			}
		})
		//Йога
		buttonYoga.addEventListener("click", function(){
			popYoga.style.position = "fixed";
			popYoga.style.top = "0";

			document.body.style.overflow = "hidden";
		})

		closeYoga.addEventListener("click", function(){
			popYoga.style.position = "";
			popYoga.style.top = "";

			document.body.style.overflowY = "scroll";
		})

		window.addEventListener("click", function(event){
			if(popYoga && event.target == popYoga){
				popYoga.style.position = "";
				popYoga.style.top = "";

				document.body.style.overflowY = "scroll";
			}
		})
}
try{
	popDanceFunc();
}catch(err){
	
}