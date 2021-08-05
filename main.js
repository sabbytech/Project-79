var menuItems = ['Grilled cheese', 'pizza'];
function run() {
    var htmldata = '';
    for (let i = 0; i < menuItems.length; i++) {
        htmldata = htmldata + menuItems[i] +"<br>"
    }
    document.getElementById('menu_list_items').innerHTML = htmldata;
}
function add_new_menu_item(){
    var new_menu_item = document.getElementById('new_menu_item').value;
    if (new_menu_item) {
        menuItems.push (new_menu_item);
    }
    run();
}