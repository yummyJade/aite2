//alert("ready?");
function wowodiao(container,screenName)
{
	var first;
	var second;
	var pointer=1;
	var beforeoper=false;
	var beforepin=false;
	var screenin;
	var operater;
	var beforewrong=false;

	var contain2=document.getElementById(container);
	contain2.classList.add("container");
	var p1=document.createElement("p");
	p1.innerHTML="番茄炒蛋牌";
	contain2.appendChild(p1);
	var screenin=document.createElement("input");
	screenin.value="0";
	screenin.name="val"
	screenin.classList.add("screen");
	screenin.setAttribute("id",screenName);
	contain2.appendChild(screenin);
	function ss(name,a,b,c){
		this.name=name;
		this.innerHTML=a;
		this.create=function()
		this.onclick=function{
			c
		}
	}
	var ssss=new ss(button,"%",);
	var but1=document.createElement("button");
	but1.innerHTML="%";
	contain2.appendChild(but1);
	but1.onclick=function()
	{
		
	}
	var but2=document.createElement("button");
	but2.innerHTML="√";
	but2.name="root";
	contain2.appendChild(but2);
	but2.onclick=function()
	{
		pinf(this);
	}
	var but3=document.createElement("button");
	but3.innerHTML="x²";
	contain2.appendChild(but3);
	but3.onclick=function()
	{
		pinf(this);
	}
	var but4=document.createElement("button");
	but4.		="1/x";
	but4.name="upDown";
	contain2.appendChild(but4);
	but4.onclick=function()
	{
		pinf(this);
	}
	var but5=document.createElement("button");
	but5.innerHTML="CE";
	but5.name="CE";
	contain2.appendChild(but5);
	but5.onclick=function()
	{
		clearOne(this);
	}
	var but6=document.createElement("button");
	but6.innerHTML="C";
	but6.name="C";
	contain2.appendChild(but6);
	but6.onclick=function()
	{
		clearAll(this);
	}
	var but7=document.createElement("button");
	but7.innerHTML="←";
	but7.name="back";
	contain2.appendChild(but7);
	but7.onclick=function()
	{
		adelete(this);
	}
	var but8=document.createElement("button");
	but8.innerHTML="÷";
	but8.name="div";
	contain2.appendChild(but8);
	but8.onclick=function()
	{
		operaterin(this);
	}
	var but9=document.createElement("button");
	but9.innerHTML="1";
	but9.name="one";
	contain2.appendChild(but9);
	but9.onclick=function()
	{
		number(this);
	}
	var but10=document.createElement("button");
	but10.innerHTML="2";
	but10.name="two";
	contain2.appendChild(but10);
	but10.onclick=function()
	{
		number(this);
	}
	var but11=document.createElement("button");
	but11.innerHTML="3";
	but11.name="three";
	contain2.appendChild(but11);
	but11.onclick=function()
	{
		number(this);
	}
	var but12=document.createElement("button");
	but12.innerHTML="×";
	but12.name="multi";
	contain2.appendChild(but12);
	but12.onclick=function()
	{
		operaterin(this);
	}
	var but13=document.createElement("button");
	but13.innerHTML="4";
	but13.name="four";
	contain2.appendChild(but13);
	but13.onclick=function()
	{
		number(this);
	}
	var but14=document.createElement("button");
	but14.innerHTML="5";
	but14.name="five";
	contain2.appendChild(but14);
	but14.onclick=function()
	{
		number(this);
	}
	var but15=document.createElement("button");
	but15.innerHTML="6";
	but15.name="six";
	contain2.appendChild(but15);
	but15.onclick=function()
	{
		number(this);
	}
	var but16=document.createElement("button");
	but16.innerHTML="+";
	but16.name="plus";
	contain2.appendChild(but16);
	but16.onclick=function()
	{
		operaterin(this);
	}
	var but17=document.createElement("button");
	but17.innerHTML="7";
	but17.name="seven";
	contain2.appendChild(but17);
	but17.onclick=function()
	{
		number(this);
	}
	var but18=document.createElement("button");
	but18.innerHTML="8";
	but18.name="eight";
	contain2.appendChild(but18);
	but18.onclick=function()
	{
		number(this);
	}
	var but19=document.createElement("button");
	but19.innerHTML="9";
	but19.name="nine";
	contain2.appendChild(but19);
	but19.onclick=function()
	{
		number(this);
	}
	var but20=document.createElement("button");
	but20.innerHTML="-";
	but20.name="minus";
	contain2.appendChild(but20);
	but20.onclick=function()
	{
		operaterin(this);
	}
	var but21=document.createElement("button");
	but21.innerHTML="±";
	but21.name="oppo";
	contain2.appendChild(but21);
	but21.onclick=function()
	{
		negative(this);
	}
	var but22=document.createElement("button");
	but22.innerHTML="0";
	but22.name="zero";
	contain2.appendChild(but22);
	but22.onclick=function()
	{
		number(this);
	}
	var but23=document.createElement("button");
	but23.innerHTML=".";
	but23.name="dot";
	contain2.appendChild(but23);
	but23.onclick=function()
	{
		number(this);
	}
	var but24=document.createElement("button");
	but24.innerHTML="=";
	but24.name="equal";
	contain2.appendChild(but24);
	but24.onclick=function()
	{
		equalin(this);
	}

	function number(oaj){
		//该if语句实现重复按下按钮，数字改变或是不停增加的效果
		if(screenin.value!="Error"){
		    if(beforeoper==false && (!second) && first && operater ){
				pointer=2;
				document.getElementById(screenName).value=0;
				//screenin.value=0;
			//输入第二个数字的时候界面清零
			}
			else if(beforeoper==true){
				document.getElementById(screenName).value=0;
				//screenin.value=0;
				beforeoper=false;
			}
			//上一次运算结束，清零
			// screenin = document.getElementById("screenName");
			var strs=screenin.value;
			if(screenin.value=="0" && oaj.innerHTML!=".")
				screenin.value=oaj.innerHTML;
			else if((screenin.value!="0" && oaj.innerHTML!=".")||(oaj.innerHTML=="." && strs.indexOf(".")==-1))
				screenin.value+=oaj.innerHTML;
			if(pointer==1)
				first=screenin.value;
			else if(pointer==2)
				second=screenin.value;
		}
	}
	function operaterin(obj){
		//如果这时候没有给第一位操作数赋值
		// screenin = document.getElementById("screenName");
		if(screenin.value!="Error"){
			screenin.value=(screenin.value-0);
			if(!first && pointer==1)
				first=screenin.value;
			if(pointer==1)
				operater=obj.innerHTML;
				//防止第二次小数点用不了
			else if(second && first){
				equalin();
				operater=obj.innerHTML;
			}
			//如果没有按等号，连续相加等操作，必须要把上一次的结果计算出来,就调用下面的程序
			second=0;
			//一定要清变量啊···
			beforeoper=false;
			beforepin=false;	
		}
	}
	function equalin(oaj){
		// 自加···
		// screenin = document.getElementById("screenName")
		if(screenin.value!="Error"){
			if(first && (!operater) && (!second))
				first=(screenin.value-0);
			//按下第一操作数后直接按等号
			else if(!second && !first)
				first=0;
			//一开始什么都没有			
			else if(!second)
				second=first;
			//没有为第二个赋值
			// 通过操作符判断执行的函数
			//加法
			if(operater=="+")
				first=((first-0)*10+(second-0)*10)/10;
			//减法
			else if(operater=="-")
				first=((first-0)*10-(second-0)*10)/10;
			//乘法
			else if(operater=="×")
				first=((first-0)*10*(second-0)*10)/100;
			// 除法
			else if(operater=="÷"){
				
				if(first==0 && second==0){
					//first="结果未定义";
					first="Error";
					//loseefficacy();
				}
				//0/0
				else if(second==0){
					//first="除数不能为零";
					first="Error";
				//	loseefficacy();
				}
				else
					first=(first-0)/(second-0);
				}
				
			// 取模
			else if(operater=="%")
				first=(first-0)%(second-0);
			//平方根
			else if(operater=="√")
				first=(first-0)+sqrt(second-0);
			 if(first=="结果未定义"||first=="除数不能为零" ||(first-0)>1e256){
			 	first="Error";
			 	//loseefficacy();
			 }
			screenin.value=first;
			pointer=1;
			beforeoper=true;
		}
	}
	//按下C的时候
	function clearAll(oaj){
		// screenin=document.getElementById("screenName")
		screenin.value=0;
		pointer=1;
		first="";
		second="";
		beforeoper=false;
		operater="";
		//recover();  
	}
	//按下CE
	function clearOne(oaj){
		// screenin=document.getElementById("screenName")
		if(screenin.value!="Error"){
			screenin.value=0;
			if(pointer==1 && operater)
			{
				pointer=2;
				second="0";
			}
			//按下第一操作数与中间符号后，ce作为第二操作数赋值，即num没有被再次按下，此时pointer仍然指向1
			else if(pointer==1)
				first="0";
			else if(pointer==2)
				second="0";
		}
	}
	//平方根,1/x，x平方
	function pinf(oaj){
		// screenin=document.getElementById("screenName")
		if(screenin.value!="Error"){
			if(oaj.innerHTML=="√"){
				if(screenin.value<0)
				{
					screenin.value="Error";
					//loseefficacy();
				}
				else if(pointer==1 && (!second) && first && operater)
				{
					screenin.value=Math.sqrt(first);
					second=screenin.value;
					pointer=2;
				}
				//2* 按根号，第二操作数直接赋值为第一操作数开根号后的结果	
				else if((!first) && (!second))
					screenin.value=0;
				else if(pointer==1){
					screenin.value=Math.sqrt(first);
					first=screenin.value;
				}
				else if(pointer==2){
					screenin.value=Math.sqrt(second);
					second=screenin.value;	
				}
			}
			else if(oaj.innerHTML=="1/x"){
				if(screenin.value==0){
					//screenin.value="除数不能为零";
					screenin.value="Error"
					//loseefficacy();
				}
				else if(pointer==1){
					screenin.value=1/(first-0);
					first=screenin.value;
				}
				else if(pointer==2){
					screenin.value=1/(second-0);
					second=screenin.value;		
				}
			}
			else if(oaj.innerHTML=="x²"){
				if((!first) && (!second))
					screenin.value=0;
				else if(pointer==1){
					screenin.value=(screenin.value)*(screenin.value);
					first=screenin.value;
				}
				else if(pointer==2){
					screenin.value=(screenin.value)*(screenin.value);
					second=screenin.value;
					
				}
			equalin();
			}
			beforeoper=true;
		}
		//单目操作符当作一次运算结束
	}
	//退格,不可退结果
	function adelete(oaj){
		// screenin=document.getElementById("screenName")	
		if(screenin.value!="Error"){       
			var arr=screenin;
			var strs=screenin.value;
			if(strs.indexOf("-")!=-1 && arr.value==0 && beforeoper==false)
				arr.value=0;
			//输入0的
			//-0.8 -0. 0
			else if(strs.indexOf("-")!=-1 && arr.value.length==2 && beforeoper==false)
				arr.value=0;
			//-1.8 -1. -1 0
			else if ((arr.value.length!=1 && beforeoper==false && !operater && pointer==1) || (arr.value.length!=1 && beforeoper==false && pointer==2) ) 
				arr.value = arr.value.substring(0, arr.value.length - 1);
			//加了操作符,也不能删,所以要分为两种情况，一种第一位，一种第二位
			//单目运算符也不能删
			else if(arr.value.length==1 && beforeoper==false)
				arr.value=0;
			//如果第一位是0，那么不能再删数字、、
		}
	}
	//正负号
	function negative(oaj){
		// screenin=document.getElementById("screenName")	
		if(screenin.value!="Error"){ 
			var strs=screenin.value;
			if(strs.indexOf("-")!=-1){
				var arr=screenin;
				arr.value = arr.value.substring(1, arr.value.length);
			}
			//已经有一个负号了，再按一次就去掉符号	
			else if(strs.indexOf(".")!=-1)
				screenin.value="-"+screenin.value;
			
			else 
				screenin.value=(screenin.value)*(-1);
			if(pointer==1 && operater && (!second)){
				second=screenin.value;
			}
			//1+ 按- 1+（-1）=0
			else if(pointer==1){
				first=screenin.value;
			}
			else if(pointer==2){
				second=screenin.value;
			}	
		}
	}
	// //按钮失效
	// function loseefficacy(oaj){
	// 	document.getElementById("board reminder").disabled=true;
	// 	document.getElementById("board sqrt").disabled=true;
	// 	document.getElementById("board square").disabled=true;
	// 	document.getElementById("board 1x").disabled=true;
	// 	document.getElementById("board plus").disabled=true;
	// 	document.getElementById("board minus").disabled=true;
	// 	document.getElementById("board multiply").disabled=true;
	// 	document.getElementById("board division").disabled=true;
	// 	document.getElementById("board dot").disabled=true;
	// 	document.getElementById("board negative").disabled=true;
	// 	document.getElementById("board equal").disabled=true;
	// 	document.getElementById("board delete3").disabled=true;
	// 	document.getElementById("board deleteCE").disabled=true;
	// 	document.getElementById("board1 key1").disabled=true;
	// 	document.getElementById("board1 key2").disabled=true;
	// 	document.getElementById("board1 key3").disabled=true;
	// 	document.getElementById("board1 key4").disabled=true;
	// 	document.getElementById("board1 key5").disabled=true;
	// 	document.getElementById("board1 key6").disabled=true;
	// 	document.getElementById("board1 key7").disabled=true;
	// 	document.getElementById("board1 key8").disabled=true;
	// 	document.getElementById("board1 key9").disabled=true;
	// 	document.getElementById("board1 key0").disabled=true;
	// 	beforewrong=true;
	// } 
	// //按钮恢复
	// function recover(oaj){
	// 	// screenin=document.getElementById("screenName");	
	// 	document.getElementById("board reminder").disabled=false;
	// 	document.getElementById("board sqrt").disabled=false;
	// 	document.getElementById("board square").disabled=false;
	// 	document.getElementById("board 1x").disabled=false;
	// 	document.getElementById("board plus").disabled=false;
	// 	document.getElementById("board minus").disabled=false;
	// 	document.getElementById("board multiply").disabled=false;
	// 	document.getElementById("board division").disabled=false;
	// 	document.getElementById("board dot").disabled=false;
	// 	document.getElementById("board negative").disabled=false;
	// 	document.getElementById("board equal").disabled=false;
	// 	document.getElementById("board delete3").disabled=false;
	// 	document.getElementById("board deleteCE").disabled=false;
	// 	document.getElementById("board1 key1").disabled=false;
	// 	document.getElementById("board1 key2").disabled=false;
	// 	document.getElementById("board1 key3").disabled=false;
	// 	document.getElementById("board1 key4").disabled=false;
	// 	document.getElementById("board1 key5").disabled=false;
	// 	document.getElementById("board1 key6").disabled=false;
	// 	document.getElementById("board1 key7").disabled=false;
	// 	document.getElementById("board1 key8").disabled=false;
	// 	document.getElementById("board1 key9").disabled=false;
	// 	document.getElementById("board1 key0").disabled=false;
	// 	screenin.value=0;
	// 	beforewrong=false;
	// }
	//清除浮点数问题······
}
wowodiao("container1","screenName1");
wowodiao("container2","screenName2");
wowodiao("container3","screenName3");