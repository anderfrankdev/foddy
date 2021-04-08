class plate{
	constructor(name,price,id,photo,category,description){
		this.name = name,
		this.price = price,
		this.id = id,
		this.photo = photo,
		this.category = category,
		this.description = description
	}
}

const buttermilk_pancake = new plate('Buttermilk pancake', 13.5,'buttermilk_pancake', 'buttermilk_pancake.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const diner_double = new plate('Diner double', 10.8,'diner_double', 'diner_double.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const egg_attack = new plate('Egg attack', 14.25,'egg_attack', 'egg_attack.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const oreo_dream = new plate('Oreo dream', 11.5,'oreo_dream', 'oreo_dream.jpeg','shakes',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const bacon_overflow = new plate('Bacon overflow', 14.5,'bacon_overflow', 'bacon_overflow.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const amarican_classic = new plate('Amarican classic', 10.5,'american_classic', 'amarican_classic.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const quarantine_buddy = new plate('Quarantine buddy', 12.5,'quarantine_buddy', 'quarantine_buddy.jpeg','shakes',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const steak_dinner = new plate('Steak dinner', 13.5,'steak_dinner', 'steak_dinner.jpeg','lunch',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const godzilla_milkshake = new plate('Godzilla milkshake', 14,'godzilla_milkshake', 'godzilla_milkshake.jpeg','shakes',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 

const country_delight = new plate('Country delight', 13.5,'country_delight', 'country_delight.jpeg','breakfast',
	`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`) 


const plates = [buttermilk_pancake,diner_double,egg_attack,oreo_dream,bacon_overflow,amarican_classic,quarantine_buddy,steak_dinner,godzilla_milkshake,country_delight]

const category = document.getElementById('category')
const meal_container = document.getElementById('meal-container')


const display_meal = (meal)=>{
	meal_container.innerHTML = ''
	let plates_to_show = plates.filter((a)=>a.category==meal)
	if (meal=='all') {
		plates_to_show = plates
	}
	for (let i = 0; i<plates_to_show.length; i++) {
		const plate_object = plates_to_show[i]
		const plate_rendering = document.createElement('ARTICLE')
		plate_rendering.id = plate_object.id
		plate_rendering.classList.add("plate")
		plate_rendering.innerHTML = `
			<div >
				<img src="images/${plate_object.photo}" class="plate-img">
			</div>
			<div class="plate-info">
				<header>
					<h2 class="plate-name">${plate_object.name}</h2>
					<h3 class="plate-price">${plate_object.price.toFixed(2)}$</h3>
				</header>
				<hr>
				<p>${plate_object.description}</p>
			</div>`
		meal_container.appendChild(plate_rendering)
	}
}
category.addEventListener('click',(e)=>{
	if (e.target.tagName=='BUTTON') {
		display_meal(e.target.id)
	}
	
})
window.addEventListener('DOMContentLoaded',()=>{
	display_meal('all')
})
const cart = []
const menu = document.getElementById('menu');

const show_selected = (scroll,element)=>{
	const box = document.createElement('DIV');
	box.id = 'selected';
	box.classList.add('selected')
	box.style.marginTop = `${innerHeight*0.20}px`
	const selected_plate = element.cloneNode(true);
	const add_to_car = document.createElement('BUTTON');
	add_to_car.classList.add('category-button','order')
	add_to_car.innerHTML=`Add to cart`
	const close_selected = document.createElement('BUTTON');
	close_selected.classList.add('category-button','close-selected')
	close_selected.id="close-selected";
	close_selected.innerHTML=`X`
	box.insertAdjacentElement('afterbegin',selected_plate)
	box.insertAdjacentElement('afterbegin',close_selected)
	box.insertAdjacentElement('beforeend',add_to_car)
	document.body.appendChild(box);
	const close_selected_plate = (element)=>{
		if (element.id=='close-selected'){
			box.remove()
		}
	}
	box.addEventListener('click',(e)=>{
		close_selected_plate(e.target)
	})
	menu.addEventListener('click',()=>{
		box.remove()
	})
	meal_container.addEventListener('click',()=>{
		box.remove()
	})
	add_to_car.addEventListener('click',()=>{
		//Confirm the addition to the cart
		const alert = document.createElement('P');
		alert.innerHTML='Plate added to cart!!';
		alert.style.color='#8AE234';
		alert.style.textShadow='1px 1px 1px black';
		alert.style.fontSize='20px';
		box.replaceChild(alert,box.lastElementChild);

		// Get the object that the user selected
		const selected_plate = plates.filter(a => a.id == box.firstElementChild.nextElementSibling.id)[0]
		cart.push(selected_plate)
	})
}


meal_container.addEventListener('click',(e)=>{
	if (e.target.classList.contains('plate-img')){
		show_selected(e.view.scrollY,e.target.parentElement.parentElement)
	}	
})


const show_cart=()=>{
	let total=0;
	if (menu.firstElementChild.id != 'cart-list') {
		const cart_list = document.createElement('DIV');
		cart_list.classList.add('cart-list');
		cart_list.id = 'cart-list';
		menu.insertAdjacentElement('afterbegin',cart_list)
		for (let i = 0; i < cart.length; i++) {
			const rendering_selected = document.createElement('DIV');
			rendering_selected.id=cart[i].id
				rendering_selected.classList.add='plate_in_cart';
				rendering_selected.innerHTML=`
					<div class='name_and_delete'>
						<p>${cart[i].name}</p>
						<button class='category-button delete' id='delete'>X</button>
					</div>
					<img src='images/${cart[i].photo}' class='img_plateInCart'>
					<p class='price_plateIncart'>${cart[i].price.toFixed(2)}$</p>
				`
			cart_list.appendChild(rendering_selected)

			total = Number(total.toFixed(2))+Number(cart[i].price.toFixed(2))
		}
		meal_container.addEventListener('click',()=>{
			cart_list.remove()
		})
		category.addEventListener('click',()=>{
			cart_list.remove()	
		})
		
		menu.addEventListener('click',(e)=>{
			if (e.target.id == 'cart') {
				cart_list.remove()
			}
		})
		cart_list.addEventListener('click',(e)=>{
			if (e.target.id =='delete') {
				const selected_plate = cart.filter(o=> o.id == e.target.parentElement.parentElement.id)[0]
				cart.splice(cart.findIndex(a=>a==cart.filter(a=>a.id==selected_plate.id)[0]),1)
				total=Number(total.toFixed(2))-Number(selected_plate.price.toFixed(2))
				console.log(total)
				if (cart.length <= 2) {
					payment.style.position='absolute';
					payment.style.bottom=0
				}
				e.target.parentElement.parentElement.remove()
				document.getElementById('total_price').textContent=`Total:${total.toFixed(2)}$`
			}
		})
		const payment = document.createElement('DIV');
		payment.innerHTML= `
			<hr>
			<p id="total_price">Total: ${total.toFixed(2)}$</p>
			<button class="category-button pay">Check out</button>`;
		if (cart.length <= 2) {
			payment.style.position='absolute';
			payment.style.bottom=0
		}
		cart_list.appendChild(payment)
	}
}
menu.addEventListener('click',(e)=>{
	if (e.target.id == 'cart') {
		show_cart()
	}
})

