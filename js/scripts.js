(function($){

$( document ).ready(function() {
	
	//menu object
	var data = {
        menu: [{
			text: 'Option 1',
			href: '#Op1',
			sub: [
				{ text: 'Sub-Option 1.1', href: '#Sub1-1', sub: null },
				{ text: 'Sub-Option 1.2', href: '#Sub1-2', sub: null },
				{ text: 'Sub-Option 1.3', href: '#Sub1-3', sub: null }
			]
		},
		{
			text: 'Option 2',
			href: '#Op2',
			sub: [
				{ text: 'Sub-Option 2.1', href: '#Sub2-1', sub: null },
				{ text: 'Sub-Option 2.2', href: '#Sub2-2', sub: null },
				{ text: 'Sub-Option 2.3', href: '#Sub2-3', sub: null }
			]
		},
		{
			text: 'Option 3',
			href: '#Op3',
			sub: [
				{ text: 'Sub-Option 3.1', href: '#Sub3-1', sub: null },
				{ text: 'Sub-Option 3.2', href: '#Sub3-2', sub: null },
				{ text: 'Sub-Option 3.3', href: '#Sub3-3', sub: null }
			]
		},
		{
			text: 'Option 4',
			href: '#Op4',
			sub: [
				{ text: 'Sub-Option 4.1', href: '#Sub4-1', sub: null },
				{ text: 'Sub-Option 4.2', href: '#Sub4-2', sub: null },
				{ text: 'Sub-Option 4.3', href: '#Sub4-3', sub: null }
			]
		}]
    };
	
	//menu builder
	var $menu = $("#navigation ul");
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
	
	//submenu open/close
	$('nav li a.parent').click(function(){
		$(this).parent().toggleClass('active');
		return false;
	});
	
	//mobile menu controller
	$('#menu-controller').click(function(){
		var state = $(this).attr('class');  
		if( state == "closed") {	menuOpen();  } else {  menuClose();	}
		$(this).toggleClass("closed");  	
		return false;
	});
	
});

//menu build function
function getMenuItem(itemData) {
	var classname = itemData.sub ? "parent" : "";
	var item = $("<li>")
		.append(
	$("<a>", {
		href:  itemData.href,
		html: itemData.text,
		class: classname
	}));
	if (itemData.sub) {
		var subList = $("<ul>");
		$.each(itemData.sub, function () {
			subList.append(getMenuItem(this));
		});
		item.append(subList);
	}
	return item;
}
    
//mobile menu animator functions
function menuOpen() {  
	$('nav').show();
	$('#content').animate({  
		left: '200px'  
	}, 400, 'easeOutBack');   
}
function menuClose(){
	$('nav').hide();
	$('#content').animate({
		left: '0px'  
	}, 400, 'easeOutQuint');   
}
	
})(jQuery); 
