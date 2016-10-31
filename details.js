//var animateLeft1 = function animateLeft(obj, from, to) {
//  if (from >= to) {
//    obj.style.visibility = 'hidden';
//    return;
//  }
//  else {
//    var box = obj;
//    box.style.marginLeft = from + "px";
//    setTimeout(function () {
//      animateLeft1(obj, from + 5, to);
//    }, 0)
//  }
//};
//
//var animateMe1 = function animateMe() {
//  animateLeft1(document.getElementById('home-page'), 100, 900);
//};

$('.d-close').on('click', function () {
  closeDetails();
});

$('.detail-page').mouseover(function () {
  resetSceneElement('d-card');
});

$('.detail-page').on('click', '.d-card', function () {
  resetSceneElement('d-card');
  $(this).toggleClass('flipped');
});

$('.card').on('click', function () {
  $('.front')[0].childNodes[0].nodeValue = cards[$(this)[0].cardIndex].name;
  $('.back')[0].childNodes[0].nodeValue = cards[$(this)[0].cardIndex].desc;
});

var resetSceneElement = function resetSceneElement(obj_id) {
  var element = document.getElementById(obj_id);
  var exp = new RegExp("scene_element--((\\w|-)*)", "g");
  var matchResults = element.className.match(exp);
  if(!!matchResults && matchResults.length > 0) {
    for(var i = 0; i < matchResults.length; i++)
      removeClass(element, matchResults[i]);
  }
};

var openDetails = function openDetails() {
  var home_page = document.getElementById("home-page");
  var page_mask = document.getElementById("page-mask");
  var detail_page = document.getElementById("detail-page");
  var d_card = document.getElementById("d-card");

  resetSceneElement("home-page");
  resetSceneElement("detail-page");

  addClass(home_page, "scene_element--home-fadeoutleft");
  addClass(page_mask, "show");
  removeClass(detail_page, "hide");
  removeClass(detail_page, "scene_element--detail-fadeoutright");
  addClass(detail_page, "scene_element--detail-fadeinright");
  addClass(d_card, "scene_element--fadeinup");
};

var closeDetails = function closeDetails() {
  var home_page = document.getElementById("home-page");
  var page_mask = document.getElementById("page-mask");
  var detail_page = document.getElementById("detail-page");
  var d_card = document.getElementById("d-card");

  resetSceneElement("home-page");
  resetSceneElement("detail-page");

  removeClass(home_page, "page-mask");
  removeClass(home_page, "scene_element--home-fadeoutleft");
  removeClass(page_mask, "show");
  removeClass(d_card, "scene_element--fadeinup");
  addClass(home_page, "scene_element--home-fadeinleft");
  addClass(detail_page, "scene_element--detail-fadeoutright");
};



