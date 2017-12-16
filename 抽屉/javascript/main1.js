
//原来的方法
$(".place_1").eq(0).find("img").toggle(
	function(){
		$(".place_1").eq(0).find("img").css({'transform':'rotate(90deg)'});
	},
	function(){
		$(".place_1").eq(0).find("img").css({'transform':'rotate(0deg)'});
	})


//方案一
// var num=0;
// $(".place_1").eq(0).find("img").click(function(){
// 	console.log("num"+num);
// 	num++;
// 	if(num%2==0)
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(0deg)'});
// 	else 
// 		$(".place_1").eq(0).find("img").css({'transform':'rotate(90deg)'});

// })
