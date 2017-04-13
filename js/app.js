var dataproject = {
	init: function(){
		//dataproject.share();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "Graphic: Baltimore Police Department Overtime Expenditures 2012 - 2017"; //Tweet text
			var url = "http://data.baltimoresun.com/graphics/bdp-overtime/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = "Graphic: BPD Overtime"; //Post title
			var description = "Baltimore Police Department Overtime Expenditures 2012 - 2017"; //Post description
			var url = "http://data.baltimoresun.com/graphics/bdp-overtime/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	}
}
$(document).ready(function(){
	dataproject.init();
	dataproject.share();
	console.log("connected");
});
