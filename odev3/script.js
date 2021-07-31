import { menu } from './app.js';


const menuSayfasi = document.getElementById("menuitems");
const butons = document.getElementById("buton");

//Kategori isimlerinde bulunmadigindan All kategorisi eklendi

let categoryarray=["All"]



//Kategori isimleri menü içerisinden ayıklandı.
function categoriesname(item){

    item.forEach(element => {
      if(element.category&&categoryarray.indexOf(element.category)<=-1){                    
          categoryarray.push(element.category)         
      }  
    })
    console.log(categoryarray)
}

categoriesname(menu)
console.log("asd",categoryarray)

//butonlar sayfaya eklendi.Ayrıca tıklanıldığında fonksiyon içerisine butona ait menü bilgisi gönderildi.
let button_create=categoryarray.map(item=>{
  console.log(item)
  let createbutton=document.createElement("button")
  createbutton.textContent=item
  createbutton.setAttribute("class", "btn btn-outline-dark btn-item")
  createbutton.setAttribute("onclick",'menuadd( "'+item+'" )')
  butons.appendChild(createbutton)
  

})


//Menü listelerinin gösterimi
const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  menuSayfasi.innerHTML = displayMenu;
};
menuList(menu);

//butonlara basıldığında çağırılan fonksiyon. Her bir menü sekmesi için düzenlendi.
function menuadd(namemenu){
  
  switch(namemenu){
    case "All":
      menuSayfasi.innerHTML = null;
      menuList(menu);
      break;

    case "Korea":
    console.log("kora")
      menuSayfasi.innerHTML=null;
      let arrkorea=menu.filter(item=> item.category==="Korea")
      menuList(arrkorea)
      break;

    case "Japan":
      menuSayfasi.innerHTML=null;
      let arrjapan=menu.filter(item=> item.category==="Japan")
      menuList(arrjapan)
      break;

    case "China":
        console.log("chine")
        menuSayfasi.innerHTML=null;
        let arrchina=menu.filter(item=> item.category==="China")
        menuList(arrchina)
        break;
}

}
