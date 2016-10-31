var cards = [
    {name: "0", desc: "this is 0"},
    {name: "1", desc: "this is 1"},
    {name: "2", desc: "this is 2"},
    {name: "3", desc: "this is 3"},
    {name: "4", desc: "this is 4"},
    {name: "5", desc: "this is 5"},
    {name: "6", desc: "this is 6"},
    {name: "7", desc: "this is 7"}
];
var timeFlag = -1;
var renderCards = function renderCards(cards) {
    timeFlag++;
    var outputArray = [];
    var elements = document.getElementsByClassName("card");
    for (var index = 0; index < elements.length; index++) {
        outputArray[index] = (index % cards.length + elements.length * timeFlag) % cards.length;
    }
    for (var index = 0; index < outputArray.length; index++) {
        elements[index].childNodes[0].nodeValue = cards[outputArray[index]].name;
        elements[index]["cardIndex"] = outputArray[index];
    }
};

function start() {
    renderCards(cards);
    setInterval(renderCards, 10000, cards);
}

start();

//(function (Trello) {
//    var timeFlag = -1;
//    var renderCards = function renderCards(cards) {
//        timeFlag++;
//        var outputArray = [];
//        var elements = document.getElementsByClassName("card");
//        for (var index = 0; index < elements.length; index++) {
//            outputArray[index] = (index % cards.length + elements.length * timeFlag) % cards.length;
//        }
//        for (var index = 0; index < outputArray.length; index++) {
//            elements[index].childNodes[0].nodeValue = cards[outputArray[index]].name;
//            elements[index]["cardIndex"] = outputArray[index];
//        }
//    };
//
//    function authenticationSuccess() {
//        console.log('Successful authentication');
//    }
//
//    function authenticationFailure() {
//        console.log('Failed authentication');
//    }
//
//    Trello.authorize({
//        type: 'popup',
//        name: 'Getting Started Application',
//        scope: {
//            read: 'true',
//            write: 'true'
//        },
//        expiration: 'never',
//        success: authenticationSuccess,
//        error: authenticationFailure
//    });
//
//    $.get("https://api.trello.com/1/boards/57f458c071beece565f9772d/cards?lists=open&list_fields=name&fields=name,desc&key=186a85bd4aa2a21068b3ebb9fafd69f4&token=729bffdc82324cfb1fe7fa0646b02806d1030df485bf2871fc6edb50fbefe92f", function (res) {
//        cards = res;
//        renderCards(cards);
//        setInterval(renderCards, 5000, cards);
//    })
//
//})(Trello);


