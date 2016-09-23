var check_css_stranger=false;
var check_css_star=false;
var check_css_breaking=false;
var check_css_harry=false;
var check_css_death=false;

function generate(){
	var style= document.getElementById("select").value;
    var first_row  = document.getElementById('first_row').value;
    var second_row = document.getElementById('second_row').value;	    
    if(validate(first_row,second_row,style)==false)
    	{  	
    	}
    else{

	switch(style)
		{
			case 'classic':
				var select= document.getElementById("select");
				var fontsize=document.getElementById('font-size').value;
				
				if(fontsize=="" || fontsize>=200 )
					{
					fontsize=200;
					}
				 string='<div id="image_box_classic" class="image-box-classic ">'+
							'<div id="text_box" class="text-box center">'+
								'<div  class="shadow-text text-1">'+
											'<div>'+first_row+'</div>'+
											'<div>'+second_row+'</div>'+
										'</div>'+
									'</div>'+
								'</div>';
		    	innerHtml(string);
		    	document.getElementById("image_box_classic").style.fontSize=fontsize+'px';
		    	document.getElementById("image_box_classic").style.fontFamily =select.options[select.selectedIndex].text;
		    	document.getElementById("image_box_classic").style.color = document.getElementById('text-color').value;
		    	document.getElementById("image_box_classic").style.background = document.getElementById('background-color').value;
		    	document.getElementById("image_box_classic").style.textDecoration =document.getElementById('text_deco').value;
			break;
			
			case 'stranger':
				checkCSS(style) ;
		    var first_char=first_row.charAt(0);
		    var last_char=first_row.slice(-1);
		    var middle_string = first_row.slice(1, -1);
		    string='<div class="image-box-strange ">'+
		    		'<div class="text-box stranger-box center">'+		
						'<div class=" shadow-box line-top"></div>'+
						'<div class="shadow-text text-1">'+
							'<span class="big-letter">'+first_char+'</span><span class="center-letter">'+middle_string+'</span><span class="big-letter">'+last_char+'</span>'+
						'</div>'+
						'<div class="shadow-box line-top"></div>'+			
						'</div>'+
							'<div class="shadow-text text-2">'+
							'<span class="text-2-sub">'+second_row+'</span>'+
							'</div>';
		    	innerHtml(string);
		    break;		
		case 'star':
				checkCSS(style) ;
			 string='<div class="image-box-star ">'+	
							'<div class="text-box center">'+
								'<div class="shadow-text text-1">'+
									'<span>'+first_row+'</span>'+
								'</div>'+
								'<hr></hr>'+
								'<div class="shadow-text text-1">'+
									'<span>'+second_row+'</span>'+
								'</div>'+
							'</div>'+
						'</div>';
			 	innerHtml(string);		 
			 break;
		case 'breaking':
				checkCSS(style) ;				 
			 var first_char=first_row.charAt(0);
			 var middle_string = first_row.substring(1);
			 var first_char_2=second_row.charAt(0);	
			 var middle_string_2 = second_row.substring(1);
			 string='<div class="image-box-breaking ">'+
						'<div class="text-box center">'+
							'<div  class="shadow-text text-1">'+
								'<span><span class="first-char">'+first_char+'</span>'+middle_string+'</span>'+
							'</div>'+
							'<div class="shadow-text text-2">'+
							'	<span><span class="first-char first-char-2">'+first_char_2+'</span>'+middle_string_2+'</span>'+
							'</div>'+
						'</div>'+
				'</div>';
			 	innerHtml(string);			 
			 break;
			 
		case 'harry':
				checkCSS(style);			 
			 var first_char=first_row.charAt(0);
			 var middle_string = first_row.substring(1);
			 var first_char_2=second_row.charAt(0);	
			 var middle_string_2 = second_row.substring(1);
			 string='<div class="image-box-harry ">'+
							'<div class="text-box center">'+
							'<div  class="shadow-text text-1">'+
							'<span><span class="first-char">'+first_char+'</span><span class="middle-string">'+middle_string+'</span></span>'+
							'</div>'+
							'<div class="shadow-text text-2">'+
							'<span><span class="first-char first-char-2">'+first_char_2+'</span><span class="middle-string">'+middle_string_2+'</span></span>'+
							'</div>'+
						'</div>'+
					'</div>';
			   innerHtml(string);			 
			 break;
			 
		case 'death':
			checkCSS(style);	
			 string='<div id="image_box" class="image-box-death ">'+
							'<div class="text-box center">'+
								'<div  class="shadow-text text-1">'+
									'<p>'+first_row +"   "+'</p><p>'+second_row +'</p>'+
								'</div>'+
							'</div>'+
							'</div>';		
			   innerHtml(string);			 
				 break;
		}
    }
}
function validate(first_row,second_row, style){
	vali=true;
	if(first_row=="")
	{
		vali= false;
		document.getElementById("first_row").style.border=('2px solid red');
	}
	else{
		document.getElementById("first_row").style.border=('2px solid #0072c3');
	}
	if(second_row=="")
	{
		document.getElementById("second_row").style.border=('2px solid red');
		vali= false;
	}
	else{
		document.getElementById("second_row").style.border=('2px solid #0072c3');
	}
	if(style=="")
	{
		document.getElementById("select").style.border=('2px solid red');
		vali= false;
	}else{
		document.getElementById("select").style.border=('2px solid #0072c3');
	}
	
		if(vali==false)
		{
			return false;
		}
			else {
				return true;
				}
			}
function checkCSS(style){
		if(style=='stranger' && check_css_stranger==false) 
			{
				loadCSS(style);
				check_css_stranger=true;
				
			}
		else if(style=='star' && check_css_star==false)
			{
				loadCSS(style);
				check_css_star=true;
			}
		else if(style=='breaking' && check_css_breaking==false)
			{
			loadCSS(style);
			check_css_breaking=true;
			}
		else if(style=='harry' && check_css_harry==false)
			{
				loadCSS(style);
				check_css_harry=true;
			}
		else if(style=='death' && check_css_death==false)
		{
			loadCSS(style);
			check_css_harry=true;
		}
	}

function loadCSS(style)
	{
		 var head  = document.getElementsByTagName('head')[0];
		 var link  = document.createElement('link');
		 link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.media = 'all';
	    link.href = 'css/'+style+'_style.css';	    
	    head.appendChild(link);	
	    return true;	    
	}
function innerHtml(string){
		document.getElementById('container_image').innerHTML=string;
	}	