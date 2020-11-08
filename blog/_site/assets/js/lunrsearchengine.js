
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Drive Today is place for reading opinionated views on cars",
    "body": "Drive Today is all about creating great content focused around the cars, we strive to offer opinionated views on all types of cars and a deeper dive into what is going on in the automotive industry.  Go checkout fequent updates on Twitter → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Drive Today. We will reply as soon as possible!   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               Mini Cooper S Sport Hatch is a dream sunday driver                         1 2 3 4 5                      :       Bottom line is the Cooper is a bundle of fun, nippy and exciting to drive. Unfortunately, it is a pretty impractical car for everyday use. :                                                                               ryan                 30 Oct 2020                                                                                                                           BMW 3 Series is an all-round great car                         1 2 3 4 5                      :       The BMW 3 series that is being reviewed is a 2-litre unleaded saloon E90 model, for those who are unsure this is the model in production between 2004-2013, this one. . . :                                                                               ryan                 20 Sep 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mini-cooper-s-sport-hatch/",
    "title": "Mini Cooper S Sport Hatch is a dream sunday driver",
    "body": "2020/10/30 - Bottom line is the Cooper is a bundle of fun, nippy and exciting to drive. Unfortunately, it is a pretty impractical car for everyday use. A quick breakdown of the entire driving experience in this vehicle was 3 days, around 400 miles and £60 in fuel. Throughout the test drive, I took the car on multiple different roads to see how it performed. What I found during the test drive was that it felt most at home on country roads. While on the country roads it felt like it wanted to just keep on giving, the steering is a little heavy which made it feel more precise and comfortable when tackling what the Formby roads had to give. Fact that it is so nippy made taking corners much more fun as you do not have to worry about getting back up to speed. The sound that came from the engine when the turbo is engaged became highly addictive and I frequently wound the window down in the cold autumn weather just to hear the whine from the engine each time I set off from the lights. Where it didn’t feel so comfortable was on the motorway. Driving along at 70 miles per hour made the Mini feel a little uneasy and the sound from inside was quite loud. It is safe to say, if you are going to be doing plenty of long-distance motorway driving, then this might not be the car for you. Practicality of the vehicle again is lacking in space and storage. While driving the Mini I tested out the practicality by doing some shopping and it was at this point that I realised that the large bag full of Christmas presents did not fit in the boot (if you can call it that). It did however handle the weekly shop comfortably. While on the point of practicality I want to point out that while this is a “5 seat” vehicle, you would be lucky to fit anyone in the back of the two-door hatch. They build this car for two people and no more. Overall, I highly approve of the Mini Cooper S, it is extremely enjoyable and put and smile on my face and keep it there the entire time that I was behind the wheel. Although this may not be the most practical car particularly for carrying large loads, it is certainly a fun car and will make a fantastic Sunday driver. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/bmw-3-series-e90/",
    "title": "BMW 3 Series is an all-round great car",
    "body": "2020/09/20 - The BMW 3 series that is being reviewed is a 2-litre unleaded saloon E90 model, for those who are unsure this is the model in production between 2004-2013, this one is a 2010 model. It was driven as a long term every day driver and was operated in a variety of different conditions and environments. An interesting fact about driving the 3 series is that it offers a great deal in both practicality and enjoyment. It is a large car with 5 seats and can comfortably accommodate for all of them seats to be occupied. The boot is large and has a wide opening so that it is easy to access anything stored in it. It should be stated that like all BMW vehicles, this is a rear wheel drive. If you have not driven a rear wheel vehicle before then you will certainly notice the different when driving a BMW 3 series, especially when it comes to cornering the vehicle at high speeds. Where you may find yourself driving along at a steady speed you may not want to put your foot down on the gas pedal otherwise you might find the rear end twitching a bit. On country roads the car could find its way around corners without any issues and still find the power to get back up to speed without too much hassle. Where the 3 series is really in its prime is motorway driving and you’re A-roads. The large build of the car made it steady and comfortable when travelling along at high speeds. It is also quite in the cockpit when driving along the motorway at 70 miles per hour and found itself staying comfortably within its lane. Many of the E90 3 series came without a console screen, for many people that may be considered a negative factor when deciding if they wanted to own and drive a car. For me it was a blessing, it was less of a distraction and when night driving it became much more engaging not having a distractive bright screen lighting up the entire interior. I was able to focus more on the road ahead and became more immersed in the driving experience. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});