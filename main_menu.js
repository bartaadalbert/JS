var menuitems = [];
menuitems.push(['JS function', 'urokJS.html']);
menuitems.push(['DArrays', 'DArrays.html']);
menuitems.push(['testJS', 'testJS.html']);
menuitems.push(['', 'https://www.google.com/']);

function initmainmenu(){
    var menu = document.getElementById('main_menu');
    
    for(var i=0; i<menuitems.length; i++){
        menu.innerHTML= menu.innerHTML + "<a class='one_menu_items' href='"+menuitems[i][1]+ "'>" +menuitems[i][0]+"</a>"
    }
}

initmainmenu();