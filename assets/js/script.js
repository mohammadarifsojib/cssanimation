
const list = document.querySelectorAll('.menu-list');
		function activeLink(){
			list.forEach((item) => 
				item.classList.remove('active'));
			this.classList.add('active');
		}
		list.forEach((item) => 
			item.addEventListener('click', activeLink));

const social = document.querySelectorAll('.social-menu');
const toggle_btn = document.querySelectorAll('.toggle');

	function activeSocial(){
			toggle_btn.forEach((item) => 
				item.classList.toggle('active'));
			this.classList.toggle('active');
		}
	social.forEach((item) => 
			item.addEventListener('click', activeSocial));

		//Vanilla Titls
		VanillaTilt.init(document.querySelector(".price-content"), {
					max: 25,
					speed: 400,
				});
		
		//It also supports NodeList
		VanillaTilt.init(document.querySelectorAll(".price-content"));

	//Active mobile menu
	let mobile_menu = document.querySelector('.mobile-menu');
	mobile_menu.onclick= function(){
		mobile_menu.classList.toggle('activeMobile');
		mobile_menu.classList.toggle('active_items');
	}
	