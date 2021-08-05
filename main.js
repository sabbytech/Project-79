menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Cheese Sandwhich", "chicken pizza", "Mushroom Pizza"];

function getmenu(){
var menulist="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            menulist=menulist+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = menulist;
        //give the appropriate id name as display_menu  
}

function add_item(){
var menulist2;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        menulist2="";
        var itemtag="<img src='https://i.pinimg.com/474x/b0/b8/16/b0b816ef200aad8d7426f80f10fa765c.jpg' id='img1'>"
        for(var i=0;i<menu_list_array.length;i++){
            menulist2=menulist2+itemtag+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = menulist2;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
