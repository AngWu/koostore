$(document).ready(function(e) {
    $(".product-more").hide(0);
    $(".product-item").mouseover(function(e) {
		var index = $(".product-item").index(this);
        $(".product-more").eq(index).show('fast');
		
    });
	$(".product-item").mouseleave(function(e) {
        var index = $(".product-item").index(this);
        $(".product-more").eq(index).hide('fast');
    });
});