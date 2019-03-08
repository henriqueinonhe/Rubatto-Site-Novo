//Globals and Constants
var carouselCurrentFrameId = 1;
var carouselMaxFrameId = 3;
var carouselTimer;
var carouselDelay = 1000;

/* Blocks positions */
var block1HomePosition = {x: "220px", y: "0"};
var block2HomePosition = {x: "930px", y: "-40px"};
var block3HomePosition = {x: "1200px", y:"200px"};
var block4HomePosition = {x: "30px", y: "380px"};
var block5HomePosition = {y: "700px", x: "650px"};
var blockHomeArray = [block1HomePosition, block2HomePosition, block3HomePosition, block4HomePosition, block5HomePosition]

var block1SobrePosition = {x: "874px", y: "-42px"};
var block2SobrePosition = {x: "80px", y: "473px"};
var block3SobrePosition = {x: "779px", y: "130px"};
var block4SobrePosition = {x: "477px", y: "583px"};
var block5SobrePosition = {x: "211px", y: "86px"};
var blockSobreArray = [block1SobrePosition, block2SobrePosition, block3SobrePosition, block4SobrePosition, block5SobrePosition]

var block1ServicosPosition = {x: "76px", y: "336px"};
var block2ServicosPosition = {x: "736px", y: "95px"};
var block3ServicosPosition = {x: "402px", y: "596px"};
var block4ServicosPosition = {x: "823px", y: "626px"};
var block5ServicosPosition = {x: "929px", y: "298px"};
var blockServicosArray = [block1ServicosPosition, block2ServicosPosition, block3ServicosPosition, block4ServicosPosition, block5ServicosPosition]

var block1FotosPosition = {x: "826px", y: "109px"};
var block2FotosPosition = {x: "306px", y: "84px"};
var block3FotosPosition = {x: "-37px", y: "642px"};
var block4FotosPosition = {x: "1090px", y: "-55px"};
var block5FotosPosition = {x: "791px", y: "707px"};
var blockFotosArray = [block1FotosPosition, block2FotosPosition, block3FotosPosition, block4FotosPosition, block5FotosPosition]

var block1VideosPosition = {x: "115px", y: "640px"};
var block2VideosPosition = {x: "95px", y: "10px"};
var block3VideosPosition = {x: "879px", y: "581px"};
var block4VideosPosition = {x: "910px", y: "-5px"};
var block5VideosPosition = {x: "331px", y: "304px"};
var blockVideosArray = [block1VideosPosition, block2VideosPosition, block3VideosPosition, block4VideosPosition, block5VideosPosition]

var block1RepertorioPosition = {x: "874px", y: "-42px"};
var block2RepertorioPosition = {x: "80px", y: "473px"};
var block3RepertorioPosition = {x: "779px", y: "130px"};
var block4RepertorioPosition = {x: "477px", y: "583px"};
var block5RepertorioPosition = {x: "211px", y: "86px"};
var blockRepertorioArray = [block1RepertorioPosition, block2RepertorioPosition, block3RepertorioPosition, block4RepertorioPosition, block5RepertorioPosition]

var block1DepoimentosPosition = {x: "900px", y: "450px"};
var block2DepoimentosPosition = {x: "473px", y: "80px"};
var block3DepoimentosPosition = {x: "130px", y: "388px"};
var block4DepoimentosPosition = {x: "528px", y: "477px"};
var block5DepoimentosPosition = {x: "86px", y: "211px"};
var blockDepoimentosArray = [block1DepoimentosPosition, block2DepoimentosPosition, block3DepoimentosPosition, block4DepoimentosPosition, block5DepoimentosPosition]

var homeSectionRecord = {index: 0, id: "#homeTemplate", blockArray: blockHomeArray};
var sobreSectionRecord = {index: 1, id: "#sobreTemplate", blockArray: blockSobreArray};
var servicosSectionRecord = {index: 2, id: "#servicosTemplate", blockArray: blockServicosArray};
var fotosSectionRecord = {index: 3, id: "#fotosTemplate", blockArray: blockFotosArray};
var videoSectionRecord = {index: 4, id: "#videosTemplate", blockArray: blockVideosArray};
var repertorioSectionRecord = {index: 5, id: "#repertorioTemplate", blockArray: blockRepertorioArray};
var depoimentosSectionRecord = {index: 6, id: "#depoimentosTemplate", blockArray: blockDepoimentosArray};
var currentSectionRecord = homeSectionRecord;

var sectionFrameTransitionDelay = 1600;

/* Servicos */
var servicosCurrentFrameId = 1;
var servicosMaxFrameId = 3;
var servicosDelay = 1000;
var servicosText1 = "Lorem Ipsum1";
var servicosText2 = "Lorem Ipsum2";
var servicosText3 = "Lorem Ipsum3";
var servicosTextArray = [servicosText1, servicosText2, servicosText3];

/* Repertório */
var momentosTexts = {momentosThumbnail1: {h3: "Momento 1", p: "Momento 1"},
			         momentosThumbnail2: {h3: "Momento 2", p: "Momento 2"},
			         momentosThumbnail3: {h3: "Momento 3", p: "Momento 3"},
		 	     	 momentosThumbnail4: {h3: "Momento 4", p: "Momento 4"},
		 	 		 momentosThumbnail5: {h3: "Momento 5", p: "Momento 5"},
		 	 		 momentosThumbnail6: {h3: "Momento 6", p: "Momento 6"},
		 	 		 momentosThumbnail7: {h3: "Momento 7", p: "Momento 7"},
		 	 		 momentosThumbnail8: {h3: "Momento 8", p: "Momento 8"},
		 	 		 momentosThumbnail9: {h3: "Momento 9", p: "Momento 9"},
		 	 		 momentosThumbnail10: {h3: "Momento 10", p: "Momento 10"}}

$(document).ready(main);

function main() {
	//Initialization
	initialize();
}

function initialize() {
	$("#sectionCurrentFrame").html($("#homeTemplate").html());
	setCarouselJS();
	setMenuJS();

	//Footer
	$("#footerEmail").click(function() {
		//document.getElementById("footerEmail").select();
		document.execCommand("copy");
		//FIXME!
	});
}

function appendSectionTemplate(templateId) {
	$("main").append($(templateId).html());
}

function loadHome() {
	carouselCurrentFrameId = 1;
	insertSectionTemplate(homeSectionRecord);
	setCarouselJS();
}

function normalizeCarouselFrameId(id) {
	if(id <= 0) {
		return carouselMaxFrameId - Math.abs(id % carouselMaxFrameId);
	} else if(id > carouselMaxFrameId) {
		return ((id - 1) % carouselMaxFrameId) + 1;
	} else {
		return id;
	}
}

function incrementCarouselFrameId() {
	carouselCurrentFrameId = normalizeCarouselFrameId(carouselCurrentFrameId + 1);
}

function decrementCarouselFrameId() {
	carouselCurrentFrameId = normalizeCarouselFrameId(carouselCurrentFrameId - 1);
}

function carouselImageUrl(frameId) {
	return 'url("img/carousel/img' + normalizeCarouselFrameId(frameId) + '.jpg")';
}

function resetCarouselCSS() {
	$("#carouselPreviousFrame").css({backgroundImage: carouselImageUrl(carouselCurrentFrameId - 1), transform: "translate(-60vw, 0)"});
	$("#carouselCurrentFrame").css({backgroundImage: carouselImageUrl(carouselCurrentFrameId), transform: "translate(0, 0)"});
	$("#carouselNextFrame").css({backgroundImage: carouselImageUrl(carouselCurrentFrameId + 1), transform: "translate(60vw, 0)"});
}

function haltCarouselJS() {
	$("#carouselLeftButton").off("click");
	$("#carouselRightButton").off("click");
	clearTimeout(carouselTimer);
}

function setCarouselJS() {
	$("#carouselLeftButton").click(loadNextCarouselFrame);
	$("#carouselRightButton").click(loadPreviousCarouselFrame);
	carouselTimer = setTimeout(loadNextCarouselFrame, 3000);
}

function loadPreviousCarouselFrame() {
	haltCarouselJS();
	$("#carouselPreviousFrame").transition({x: "0"}, carouselDelay, "ease-in-out");
	$("#carouselCurrentFrame").transition({x: "60vw"}, carouselDelay, "ease-in-out", function() {
		decrementCarouselFrameId();
		resetCarouselCSS();
		setCarouselJS();
	});
}
	

function loadNextCarouselFrame() {
	haltCarouselJS();
	$("#carouselCurrentFrame").transition({x: "-60vw"}, carouselDelay, "ease-in-out");
	$("#carouselNextFrame").transition({x: "0"}, carouselDelay, "ease-in-out", function(){
		incrementCarouselFrameId();
		resetCarouselCSS();
		setCarouselJS();
	});

}

function resetSectionCSS() {
	$("#sectionPreviousFrame").css({transform: "translate(-100vw, 0)", position: "absolute"});
	$("#sectionCurrentFrame").css({transform: "none", position: "relative"});
	$("#sectionNextFrame").css({transform: "translate(100vw, 0)", position: "absolute"});
}

function haltMenuJS() {
	$("#homeLink").off("click");
	$("#sobreLink").off("click");
	$("#servicosLink").off("click");
	$("#fotosLink").off("click");
	$("#videosLink").off("click");
	$("#repertorioLink").off("click");
	$("#depoimentosLink").off("click");

}

function setMenuJS() {
	$("#homeLink").click(loadHome);
	$("#sobreLink").click(loadSobre);
	$("#servicosLink").click(loadServicos);
	$("#fotosLink").click(loadFotos);
	$("#videosLink").click(loadVideos);
	$("#repertorioLink").click(loadRepertorio);
	$("#depoimentosLink").click(loadDepoimentos);
}

function resetSectionHtml(targetSectionRecord) {
	$("#sectionPreviousFrame").html("");
	$("#sectionCurrentFrame").html($(targetSectionRecord.id).html());
	$("#sectionNextFrame").html("");
}

function insertSectionCallback(targetSectionRecord) {
	resetSectionHtml(targetSectionRecord);
	resetSectionCSS();
	setMenuJS();
}

function insertNextSection(targetSectionRecord) {
	let targetSectionHtml = $(targetSectionRecord.id).html();

	$("#sectionNextFrame").html(targetSectionHtml);

	$("#sectionNextFrame").css("position", "relative");
	$("#sectionNextFrame").transition({x: "0vw"}, sectionFrameTransitionDelay);
	$("#sectionCurrentFrame").css("position", "absolute");
	$("#sectionCurrentFrame").transition({x: "-100vw"}, sectionFrameTransitionDelay, "ease", function() {
		insertSectionCallback(targetSectionRecord);
	});
}

function insertPreviousSection(targetSectionRecord) {
	let targetSectionHtml = $(targetSectionRecord.id).html();

	$("#sectionPreviousFrame").html(targetSectionHtml);

	$("#sectionPreviousFrame").css("position", "relative");
	$("#sectionPreviousFrame").transition({x: "0vw"}, sectionFrameTransitionDelay);
	$("#sectionCurrentFrame").css("position", "absolute");
	$("#sectionCurrentFrame").transition({x: "100vw"}, sectionFrameTransitionDelay, "ease", function() {
		insertSectionCallback(targetSectionRecord);
	});
}

function insertSectionTemplate(targetSectionRecord) {
	haltMenuJS();
	haltCarouselJS();
	$("iframe").css({opacity: '0', pointerEvents: "none"});

	if(currentSectionRecord.index === targetSectionRecord.index) {
		setMenuJS();
		return;
	} else if (currentSectionRecord.index < targetSectionRecord.index){
		insertNextSection(targetSectionRecord);
	} else {
		insertPreviousSection(targetSectionRecord);
	}

	animateBlocks(targetSectionRecord.blockArray);

	currentSectionRecord = targetSectionRecord;
}

function animateBlocks(blockPositionArray) {
	$("#block1").transition(blockPositionArray[0], sectionFrameTransitionDelay);
	$("#block2").transition(blockPositionArray[1], sectionFrameTransitionDelay);
	$("#block3").transition(blockPositionArray[2], sectionFrameTransitionDelay);
	$("#block4").transition(blockPositionArray[3], sectionFrameTransitionDelay);
	$("#block5").transition(blockPositionArray[4], sectionFrameTransitionDelay);
}

function loadSobre() {
	insertSectionTemplate(sobreSectionRecord);
}

function loadServicos() {
	insertSectionTemplate(servicosSectionRecord);
	setTimeout(setServicosJS, sectionFrameTransitionDelay);
}

function fotosTriggerModal() {
	$(".foto").click(function() {
		$("html").css("overflow", "hidden");
		$("#fotoModal").css('display', 'block');
		$("#fotoModal").click(function() {
			$("#fotoModal").css("display", "none");
			$("html").css('overflowY', 'scroll');
		});
		$("#fotoModalContent").css("background-image", $(this).css("background-image"));
	});
}

function loadFotos() {
	insertSectionTemplate(fotosSectionRecord);
	for(let index = 0; index < 7; index++) {
		setTimeout(function() {
			$(".foto").eq(index).transition({opacity: "1"});
		}, sectionFrameTransitionDelay + 100 * index);
	}
	setTimeout(fotosTriggerModal, sectionFrameTransitionDelay);
}

function loadVideos() {
	insertSectionTemplate(videoSectionRecord);
	setTimeout(function() {
		$("iframe").css({opacity: '1', pointerEvents: "auto"});}, sectionFrameTransitionDelay);
}


function loadMomentos() {
	$(".momentosThumbnail").click(function() {
		$(".momentosOverfill").removeClass('momentosOverfillActive');
		$(this).children('.momentosOverfill').addClass('momentosOverfillActive');
		let that = this;
		$("#momentosDescription h3, #momentosDescription p").animate({opacity : 0}, sectionFrameTransitionDelay/4, "swing", function() {
			$("#momentosDescription h3").html(momentosTexts[$(that).attr('id')].h3);
			$("#momentosDescription p").html(momentosTexts[$(that).attr('id')].p);
			$(this).animate({opacity : 1}, sectionFrameTransitionDelay/4);
		});
	});
}

function loadRepertorio() {
	insertSectionTemplate(repertorioSectionRecord);
	for(let i = 1; i <= 10; i++) {
		setTimeout(function() {
			$("#momentosThumbnail" + i).transition({opacity: 1});
		}, sectionFrameTransitionDelay + 100 * i);
	}

	setTimeout(loadMomentos ,sectionFrameTransitionDelay);
}

function loadDepoimentos() {
	insertSectionTemplate(depoimentosSectionRecord);
	for(let i = 0; i < 6; i++) {
		setTimeout(function() {
			$(".depoimentosColumn").eq(i).transition({opacity: 1});
		}, sectionFrameTransitionDelay + (100 * (i + 1)));
	}
}

function normalizeServicosFrameId(frameId) {
	if(frameId <= 0) {
		return servicosMaxFrameId + (frameId % servicosMaxFrameId);
	} else if(frameId > servicosMaxFrameId) {
		return ((frameId - 1) % servicosMaxFrameId) + 1;
	} else {
		return frameId;
	}
}

function servicosFrameUrl(frameId) {
	return "url('img/servicos/img" + normalizeServicosFrameId(frameId) + ".png')";
}

function servicosTextHtml(frameId) {
	return servicosTextArray[normalizeServicosFrameId(frameId) - 1];
}

function resetServicosCSS() {
	$("#servicosThumbnailPreviousFrame").css("transform", "translate(-40vw, 0)");
	$("#servicosThumbnailCurrentFrame").css({backgroundImage: servicosFrameUrl(servicosCurrentFrameId), transform: "translate(0, 0)"});
	$("#servicosThumbnailNextFrame").css("transform", "translate(40vw, 0)");
}

function servicosLoadText(frameId) {
	$("#servicosText").transition({opacity: 0}, servicosDelay/2, "ease", function () {
		$("#servicosText").html(servicosTextHtml(frameId));
		$("#servicosText").transition({opacity: 1}, servicosDelay/2);
	});
}

function servicosNextFrame() {
	haltServicosJS();
	servicosCurrentFrameId++;
	servicosLoadText(servicosCurrentFrameId);
	$("#servicosThumbnailNextFrame").css("background-image", servicosFrameUrl(servicosCurrentFrameId));
	$("#servicosThumbnailNextFrame").transition({x: "0"}, servicosDelay);
	$("#servicosThumbnailCurrentFrame").transition({x: "-40vw"}, servicosDelay, "ease", function() {
		resetServicosCSS();
		setServicosJS();
	});
}

function servicosPreviousFrame() {
	haltServicosJS();
	servicosCurrentFrameId--;
	servicosLoadText(servicosCurrentFrameId);
	$("#servicosThumbnailPreviousFrame").css("background-image", servicosFrameUrl(servicosCurrentFrameId));
	$("#servicosThumbnailPreviousFrame").transition({x: "0"}, servicosDelay);
	$("#servicosThumbnailCurrentFrame").transition({x: "40vw"}, servicosDelay, "ease", function() {
		resetServicosCSS();
		setServicosJS();
	});
}

function haltServicosJS() {
	$("#servicosLeftButton").off("click");
	$("#servicosRightButton").off("click");
}

function setServicosJS() {
	$("#servicosLeftButton").click(servicosNextFrame);
	$("#servicosRightButton").click(servicosPreviousFrame);
}



