/*
*	Author: Greg Scott
*	Description: Javascript file for certain actions in the site
*/

// Variables
var musicExtra = $('#guitar-see-more');
var musicBtn = $('#music-seemore-btn');
var musicBtnSelected = 0;
var liftingExtra = $('#lifting-see-more');
var liftingBtn = $('#lifting-seemore-btn');
var liftingBtnSelected = 0;


// Initial actions
musicExtra.hide();
liftingExtra.hide();

musicBtn.click(function(){
	if (musicBtnSelected == 0) {
		musicExtra.show();
		musicBtn.text('Show Less');
		musicBtnSelected = 1;
	}
	else {
		musicExtra.hide();
		musicBtn.text('Show More');
		musicBtnSelected = 0;
	}
});


liftingBtn.click(function(){
	if (liftingBtnSelected == 0) {
		liftingExtra.show();
		liftingBtn.text('Show Less');
		liftingBtnSelected = 1;
	}
	else {
		liftingExtra.hide();
		liftingBtn.text('Show More');
		liftingBtnSelected = 0;
	}
});