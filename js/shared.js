$("#show-log").on('click',function(){
    let log = $(".login-out");
    if(log.hasClass("hide")){
        log.removeClass("hide")
    }else{
        log.addClass("hide")
    }
})
$("#login").on('click',function(){
    $("#login").css('color','red')
    $("#register").css('color','black')
    $("#form-register").addClass("hide");
    $("#form-login").removeClass("hide");
})
$("#register").on('click',function(){
    $("#login").css('color','black')
    $("#register").css('color','red')
    $("#form-login").addClass("hide");
    $("#form-register").removeClass("hide");

})
$(".menu-item").on('click',function(){
    let val = $(this);
    $(".menu-item").removeClass("active");
    val.addClass("active");
})
$("#more").on('click',function(){
    $(".shop-product2").removeClass("hide");
})

// import { useState } from 'react'
// const [color,setColor] = useState("#274C5B");
$(".btn-color").on('click',function(){
    let btn = $(this);
    $(".home-page").css("background-color", btn.attr("data-color") )
    console.log();
})
let count2 = 16;
$(".font").on('click',function(){
    let typeFont = $(this);
    let typeId = typeFont.attr("id");
    if( typeId === "down"){
        if(count2 < 10 ){
            $("#show-font").text(10);
        }else{
            $("#show-font").text(count2--);
        }

    }else if(typeId === "up"){
        if(count2 > 20){
            $("#show-font").text(20);
        }else{
            $("#show-font").text(count2++);
        }
    }
    $("body").css("font-size", count2);
})
// $(".f-family").on('click',function(){
//     console.log($(this).text());

//     $("body").css("font-family","'" + $(this).text() + "'")
// })
//////////////////////////////////////////////
/*SEACH PRODUCT */
const products = $(".product");
const data = $("#data");
function seach(){
        products.each(function(index,item){
        let varC = $(this);
        let dataSearch = data.val().toUpperCase();
        let dataProduct = varC.attr("data-product").toUpperCase();
        const currentHtml = $(".show-product");
        let newItem = varC.clone(true);
        if(dataSearch === dataProduct){
            currentHtml.removeClass("hide")
            currentHtml.html(" ");
            $("#hide").show();
            currentHtml.append(`<button id="hide"><i class="fa-solid fa-xmark"></i></button>`)
            currentHtml.append( "<h1>Sản phẩm bạn cần tìm là:</h1>")
            currentHtml.append(newItem)
            console.log(varC);
            console.log(newItem);
        }else if (dataSearch !== dataProduct) {
            // currentHtml.html('')
            // currentHtml.append("<h1>Rất tiếc chúng tôi không có sản phẩn bạn cần tìm</h1>")
            // console.log("lose");
        }
    })
}
$(".show-product").on('click',function(){
    $(".show-product").html(" ");
    data.val(" ");
    $(".show-product").addClass("hide");
})
$("#search").on('click',function(){
    seach();
    data.val(" ")
})
data.on('keyup',function(event){
    const keyCode = event.keyCode;
    if(keyCode === 13){
        seach();
         data.val(" ")

    }
    // console.log(keyCode);
});

// function addItem(){

//     const value = $("").val();
//     // const newElement = `<li class="list-item"> ${value} </li>`;
//     const newHml = currentHtml + newElement;
//     if(value){
//         $(".list").html(newHml);
//         $(".name-Student").val('');
//     }

// }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$("#extra").on('click',function(){
    $(".extra-cart").toggle()
})

let cost = 20 ;
let account = 1;
function updateAccountDisplay() {
    document.getElementById("accountValue").textContent = account;
    document.getElementById("cost").textContent = `Cost : `+  account * cost + `$`;
}

function increaseAccount() {
    account++;
    updateAccountDisplay();
}

function decreaseAccount() {
    if (account > 1) {
        account--;
        updateAccountDisplay();
    }
}
$(".add-produce").on('click',function(){
    const value = $(this).attr("data-key");
    // console.log(value);
    for(let i = 0 ; i <= $(".product").length; i++){
        const produce = $(".product")[i];
        // console.log($(produce).attr("data-key")  );
        if($(produce).attr("data-key") === value){
            let newItem = $(produce).clone(true);
            $(".extra-cart").append(newItem);
            $(".extra-cart").append(`<div class="bb">`
            + `<h3> quantity :`+
            `
            <button onclick="decreaseAccount()" id="decreaseButton">-</button>
            <span id="accountValue">1</span>
            <button onclick="increaseAccount()" id="increaseButton">+</button>
            `
             +` </h3>`
            +`<h3 id="cost">Cost: `+cost * account + `$</h3>
            <button  class="bb-btn">BUY</button>
            </div>`)
            
        console.log($(produce));
        break;

        }
    }
})


$(".remove-produce").on('click',function(){
    const value = $(this).attr("data-key");
    // console.log(value);
    for(let i = 0 ; i <= $(".product").length; i++){
        const produce = $(".product")[i];
        // console.log($(produce).attr("data-key")  );
        if($(produce).attr("data-key") === value){
            let newItem = $(produce).clone(true);
            $(produce).hide();
            $(".bb").hide();
        console.log($(produce));
        break;
        }
    }
    // console.log($(".extra-cart"));
})
$("#sr-address-sb").on('click',function(){
    alert("you succeeded")
})
console.log($(".extra-cart"));