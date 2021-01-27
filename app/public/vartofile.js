function save_installform()
{
    var bluetooth=document.forms["installform"]["bluetooth"].checked;
    var upnp=document.forms["installform"]["upnp"].checked;
    var airplay=document.forms["installform"]["airplay"].checked;
    var snapcast=document.forms["installform"]["snapcast"].checked;
    var spotify=document.forms["installform"]["spotify"].checked;
    alert("Bluetooth: " + bluetooth + " | UPnP: " + upnp + " | Airplay: " + airplay + " | Spotify: " + spotify + " | Snapcast: " + snapcast);
    return true;
}
