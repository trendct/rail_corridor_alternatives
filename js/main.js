$(function () {

	var corridor_slideshow = new TrendSlideshow ({
		root_div: "corridor_slider_root",
		slider_name: "rail_corridor_122015",
		headline: "Northeast corridor alternatives",
		caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "	
			+ "Aenean non nibh orci. Nulla facilisi. Phasellus dignissim est ut "
			+ "iaculis gravida. Aenean a quam libero. Vivamus placerat nulla ut "
			+ "metus sodales faucibus. Nam commodo tempor nunc nec viverra. In "
			+ "volutpat augue a nibh mattis, sed ultricies nunc aliquet. Donec "
			+ "eget ultricies.",
		button_text: "&bull;",
		sourceline: "NEC Future",
		byline: "Jake Kara / CT Mirror",
		slides: [ {
			//url: "img/corridor_alt1_ts.jpeg",
			headline: "Alternative 1",
			caption: "<strong>$64-$66 billion.</strong> Chokepoint relief for Connecticut plus a bypass from Old Saybrook to Kenyon, R.I. to allow for higher train speeds. It lessens the reliance on the shoreline route which is susceptible to flooding. ",
			html: "<img src='img/alt_1.png'><br>"
				+ "<div class='ts_key'><span class='ts_sample ts_sample_yellow'>Yellow</span> indicates chokepoint relief projects. <span class='ts_sample ts_sample_blue'>Blue</span> indicates new segments. <span class='ts_sample ts_sample_green'>Green</span> indicates new track.</div>",
		},
		{
			//url: "img/corridor_alt2_1_ts.jpeg",
			headline: "Alternative 2",
			caption: "<strong>$131-$136 billion.</strong> Adds an aerial line between Westport and New Rochelle. Extends the New Haven to Hartford line through Storrs to Providence. ",
			html: "<img src='img/alt_2.png'>"
				+ "<div class='ts_key'><span class='ts_sample ts_sample_yellow'>Yellow</span> indicates chokepoint relief projects. <span class='ts_sample ts_sample_blue'>Blue</span> indicates new segments. <span class='ts_sample ts_sample_green'>Green</span> indicates new track.</div>",

		},
		{
			//url: "img/corridor_alt2_2_ts.jpeg",
			headline: "Alternative 3",
			caption: "<strong>$267-$308 billion.</strong> Alternative 2 plus a tunnel under Long Island Sound from Long Island to Milford. A line from Grand Central to Danbury and then mostly tunnel to Waterbury and Hartford where it connects with the line to Providence. Another line from Hartford through Worcester to Boston. ",
			html: "<img src='img/alt_3.png'>"
				+ "<div class='ts_key'><span class='ts_sample ts_sample_yellow'>Yellow</span> indicates chokepoint relief projects. <span class='ts_sample ts_sample_blue'>Blue</span> indicates new segments. <span class='ts_sample ts_sample_green'>Green</span> indicates new track.</div>",
		},
		]
	});

	corridor_slideshow.pym_child.sendHeight();

})

