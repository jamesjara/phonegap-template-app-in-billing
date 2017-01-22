jQuery(document).ready(function(){ 

/*-----------------------------------------------------------------------------------*/
/*	Google Map API 
/*  Credit to: http://stiern.com/tutorials/adding-custom-google-maps-to-your-website/
/*-----------------------------------------------------------------------------------*/
  
	 

/*-----------------------------------------------------------------------------------*/
/*	Triggers Tooltip Functionality
/*-----------------------------------------------------------------------------------*/

	jQuery('.feature-box-desc a').tooltip('hide');

/*-----------------------------------------------------------------------------------*/
/*	Removes Label on Click Event
/*-----------------------------------------------------------------------------------*/

	var emailInput = "input#email";

	$(emailInput).bind({
  		focus: function() {
    		jQuery("label").hide();
  		},	
  		blur: function() {		
    		jQuery("label").show();

    		if ($(emailInput).val()) {  			
  				jQuery("label").hide(); //removes label value if input text exists
  			}
  		}
	});		

/*-----------------------------------------------------------------------------------*/
/*	Smooth Scrolling 
/*  Credit: http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/
/*-----------------------------------------------------------------------------------*/

 


}); 