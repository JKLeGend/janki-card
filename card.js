$('.container').on('click', '.card', function () {
  $(this).toggleClass('flipped');
});

(function(Trello){
  function renderWithTemplate(card) {
    return "<li class='card'>" +
        "<div class='front'>" + card.name + "</div>" +
        "<div class='back'>" + card.desc + "</div>" +
        "</li>";
  }

  function renderCards(cards) {
    var htmlString = "";
    for(index in cards) {
      htmlString += renderWithTemplate(cards[index]);
    };

    $('.container').empty().append(htmlString);
  }

  function authenticationSuccess() {
    console.log('Successful authentication');
  }

  function authenticationFailure() {
    console.log('Failed authentication');
  }

  Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });

  $.get("https://api.trello.com/1/boards/57f458c071beece565f9772d/cards?lists=open&list_fields=name&fields=name,desc&key=186a85bd4aa2a21068b3ebb9fafd69f4&token=729bffdc82324cfb1fe7fa0646b02806d1030df485bf2871fc6edb50fbefe92f", function(res){
    renderCards(res);
  })


})(Trello);


