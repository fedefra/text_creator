function generate(){
	var style= document.getElementById("select").value;
    var first_row  = document.getElementById('first_row').value;
    var second_row = document.getElementById('second_row').value;
    
    if(validate(first_row,second_row,style)==false)
    	{
  
    	}
    else{
	 var head  = document.getElementsByTagName('head')[0];
	 var link  = document.createElement('link');
	 link.rel  = 'stylesheet';
	 link.type = 'text/css';
	 link.media = 'all';
    }
		switch(style)
		{
			case 'stranger':    			
		    link.href = 'css/strange_style.css';	    
		    head.appendChild(link);	
		    var first_char=first_row.charAt(0);
		    var last_char=first_row.slice(-1);
		    var middle_string = first_row.slice(1, -1);
		    string='<div id="image_box" class="image-box-strange ">'+
		    		'<div class="text-box stranger-box center">'+		
						'<div class=" shadow-box line-top"></div>'+
						'<div id="text_1" class="shadow-text text-1">'+
							'<span class="big-letter">'+first_char+'</span><span class="center-letter">'+middle_string+'</span><span class="big-letter">'+last_char+'</span>'+
						'</div>'+
						'<div class="shadow-box line-top"></div>'+			
						'</div>'+
							'<div id="text_2" class="shadow-text text-2">'+
							'<span class="text-2-sub">'+second_row+'</span>'+
							'</div>';
		    document.getElementById('container_image').innerHTML=string;
		    break;		
		case 'star':
			 link.href = 'css/star_style.css';	    
			 head.appendChild(link);				 
					
			 string='<div id="image_box" class="image-box-star ">'+	
							'<div class="text-box center">'+
								'<div id="text_1" class="shadow-text text-1">'+
									'<span>'+first_row+'</span>'+
								'</div>'+
								'<hr></hr>'+
								'<div id="text_1" class="shadow-text text-1">'+
									'<span>'+second_row+'</span>'+
								'</div>'+
							'</div>'+
						'</div>';
			   document.getElementById('container_image').innerHTML=string;
			 
			 break;
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
		



