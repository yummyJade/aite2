// $(".title-right").eq(0).click(function(){
// 	remove("container").eq(0);
// })
// $("img").eq(1).click(function(){
//    alert('你点击了图片');
// })
// $(".place_1").eq(0).find("img").click(function(){
// 	$(".famousfood_1").eq(0).slideToggle(1000);
	// $(".place_1").eq(0).find("img").css({'transform':'rotate(90deg)'});
	

// })
// $(".place_1").eq(0).find("img").toggle(
// 	function(){
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(90deg)'});
// 	},
// 	function(){
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(0deg)'});
// 	})
// $(".place_2").eq(0).find("img").click(function(){
// 	$(".famousfood_2").eq(0).slideToggle(1000);

	// $(".place_2").eq(0).find("img").css({'transform':'rotate(90deg)'});
// })
// $(".place_2").eq(0).find("img").toggle(
// 	function(){
// 		$(".place_2").eq(0).find("img").css({'transform':'rotate(90deg)'});
// 	},
// 	function(){
// 		$(".place_2").eq(0).find("img").css({'transform':'rotate(0deg)'});
// 	})
$(".title").eq(0).find("img").click(function(){
	$(".foodlist").eq(0).animate({"margin-left":"-220px"},"slow",function(){
		// console.log("666");
	$(".foodlist").eq(0).hide();
	$(".foodlist-2").eq(0).show();
	})
// if($(".foodlist").eq(0).css("margin-left")==-210){
// 	}

})
$(".place_1_name_1").eq(0).click(function(){

	// $(".place_1_name_1").eq(0).width(280);

	// 		alert('你点击了图片');
})
	$(".place_1_name_1").eq(0).toggle(
		function(){
			$(".place_1_name_1").eq(0).animate({"margin-left":"20px"},"fast")
			// alert('你点击了图片');
		},
		function(){
			$(".place_1_name_1").eq(0).animate({"margin-left":"0px"},"fast")
			
		})

	$(".place_1_name_2").eq(0).click(function(){
		// alert('你点击了图片');
		$(".place_1_name_2").eq(0).animate({"margin-left":"20px"},"fast");

	})
		// function(){
		// 	$(".place_1_name_1").eq(0).width(258);
		// })

$(".foodlist-2").eq(0).find("img").click(function(){
	$(".foodlist-2").eq(0).hide();
		$(".foodlist").eq(0).show();
	$(".foodlist").eq(0).animate({"margin-left":"0px"},"slow");

})













//原来的方法
// $(".place_1").eq(0).find("img").click(function(){
// 	$(".famousfood_1").eq(0).slideToggle(1000);
// })
// $(".place_1").eq(0).find("img").toggle(
// 	function(){
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(90deg)'});
// 	},
// 	function(){
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(0deg)'});
// 	})
//方案二
var num=0;
$(".place_1").eq(0).find("img").click(function(){
	console.log("num"+num);
	num++;
	if(num%2==0)
		$(this).css({'transform':'rotate(0deg)'});
	else 
		$(this).css({'transform':'rotate(90deg)'});
	$(".famousfood_1").eq(0).slideToggle(1000);

})
$(".place_2").eq(0).find("img").click(function(){
	console.log("num"+num);
	num++;
	if(num%2==0)
		$(this).css({'transform':'rotate(0deg)'});
	else 
		$(this).css({'transform':'rotate(90deg)'});
	$(".famousfood_2").eq(0).slideToggle(1000);

})
//方案三
// $(".place_1").eq(0).find("img").click(function(){

// 	if($(".famousfood_1").eq(0).is(":hidden"))
// 	{
// 		$(this).css({'transform':'rotate(90deg)'});
// 	}
// 	else{
// 		$(this).css({'transform':'rotate(0deg)'});
// 	}
// 	$(".famousfood_1").eq(0).slideToggle(1000);
// })
	// var you=$(this).css("rotate");
	
	// $(this).css({'transform':'rotate(90deg)'});
	// alert(you);
	// if($(this).css("transform")=="rotate(90deg)"){
	// 	alert('你点击了图片');
	// 	// $(this).css({'transform':'rotate(0deg)'});
	// }