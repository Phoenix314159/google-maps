function initMap() {
    var address = {lat: 40.761, lng: -111.891};
        //"{!SUBSTITUTE(JSENCODE(Property__c.Address__c),'\n',' ')} {!SUBSTITUTE(JSENCODE(Property__c.City__c),'\n',' ')} {!SUBSTITUTE(JSENCODE(Property__c.State__c),'\n',' ')}";
    var infowindow = new google.maps.InfoWindow({
        content: "<b>{!Property__c.Address__c}</b><br>" + address + " "
    });
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: address
    });
    var marker = new google.maps.Marker({
        position: address,
        map: map,
        title: "hello man"
            //"{!Property__c.Address__c}"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    google.maps.event.addListener(infowindow, 'closeclick', function() {
        map.setCenter(marker.getPosition());
    });
}