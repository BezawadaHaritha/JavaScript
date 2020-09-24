let merch = [
    {
      id: 1,
      name: "LipStick",
      color: "burgandy",
      price: 800,
      image: "https://images-na.ssl-images-amazon.com/images/I/618LJQNvVhL._SY450_.jpg",
      description: "Matte LipStick",
    },
    {
      id: 2,
      name: "Foundation Stick",
      color: "creame",
      price: 600,
      image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-ace-of-face-foundation-stick-07-vanilla-latte-fair-golden-undertone-12771006480467@2x.png?v=1577260499",
      description: "Foundation Stick",
    },
  
    {
      id: 3,
  
      name: "Lip Crayon",
      color: "magenta",
      price: 9000,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51X45gyXzbL._SL1400_.jpg",
      description: "magenta lip crayon",
    },
  
    {
      id: 4,
      name: "Lip Primer",
      color: "Black",
      price: 300,
      image: "https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASSUGAR-COSMETSUGA33759245EB618/1568726524682_0..jpg?imwidth=320&impolicy=hq",
      description: "black lip primer",
    },
  
    {
      id: 5,
      name: "Eye Liner",
      color: "blue",
      price: 400,
      image:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755@2x.jpg?v=1587628267",
      description: "blue eye liner",
    },
  
    {
      id: 6,
      name: "cleanser",
      color: "transperant",
      price: 200,
      image:
        "https://1.bp.blogspot.com/-TBM8L5d6XFM/XVWYTHIIzZI/AAAAAAAAalE/bvGTElc_hl4vjogTbsK_L6ZKRBXHOxjcwCEwYBhgL/s1600/IMG_20190813_085513.jpg",
      description: "face cleanser",
    },
    {
      id: 7,
      name: "Lipstick Combo",
      color: "all variants",
      price: 1000,
      image:
        "https://img.looksgud.com/upload/item-image/2289/1d2w7/1d2w7-sugar-cosmetics-sugar-tip-tac-toe-nail-lacquer-018-bounce-black_500x500_0.jpg",
      description: "lipstick mini combo",
    },
    {
      id: 8,
      name: "Nail Colour",
      color: "blue",
      price: 100,
      image:
        "https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASSUGAR-COSMETSUGA3375998818880/1561502016794_0..jpg?imwidth=320&impolicy=hq",
      description: "nail colour matte",
    },
    {
      id: 9,
      name: "compact powder",
      color: "creame",
      price: 1200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVdvdn2gmnkmSVUUwv4VoX7cM71U36x4_sJw&usqp=CAU",
      description: "compact powder for all skin types",
    },
    {
      id: 10,
      name: "charcoal mask",
      color:"black",
      price: 400,
      image: "https://imgmedia.lbb.in/media/2020/06/5ed78fb7486f1b28614d498f_1591185335859.jpg",
      description: "charcoal sheet mask",
    },
    {
      id: 11,
      name: "oxford leather shoes",
      size: "M",
      color: "black",
      price: 6000,
      image:
        "https://imgmedia.lbb.in/media/2020/06/5ed78fb7486f1b28614d498f_1591185335859.jpg",
      description: "Black oxford for gentlemen's collection",
    },
    {
      id: 12,
      name: "masquara",
      color: "black",
      price: 120,
      image:
        "https://media-exp1.licdn.com/dms/image/C4E1BAQGGVNU5XzT-tQ/company-background_10000/0?e=2159024400&v=beta&t=wpEUb-ZluqjE_B8OlSrYh0gICrhMyO46rAbcB37t_yE",
      description: "mascquara for eyes",
    },
  ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Manners Maketh Man!\ndont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);