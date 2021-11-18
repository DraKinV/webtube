var imgpause =
  "https://icons-for-free.com/iconfiles/png/512/control+music+pause+play+stop+icon-1320185679471109801.png";
var imgplay =
  "https://icons-for-free.com/iconfiles/png/512/blue+control+go+music+pause+play+icon-1320185679167007716.png";

var imagelist = ["https://cdn.glitch.me/18aed833-9ae5-44ff-94dd-21985a768514%2Fasssss.png?v=1637065346772","https://cdn.glitch.me/18aed833-9ae5-44ff-94dd-21985a768514%2FAnhChin.jpg?v=1637139313247",];
var imagename = ["Ác Ma Đội Mồ", "Mama Chin"];
var imageauthor = ["Lưu Văn Khánh", "Lưu Văn Khánh"];


const domainweb = "https://diamond-paper-fibre.glitch.me/";

init();

function init() {
  const ua = navigator.userAgent;
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    if (window.location.href != domainweb + "m-index.html") {
      window.open("m-index.html", "_self");
    }
  } else {
    if (
      window.location.href != domainweb + "index.html" &&
      window.location.href != domainweb + "index-light.html"
    ) {
      window.open("index.html", "_self");
    }
  }
}

// elsewhere in code

function searchclick() {
  if (document.getElementById("searchinput").value == "") {
    document.getElementById("searchinput").blur();
  } else {
    window.location.href =
      "https://www.youtube.com/results?search_query=" +
      document
        .getElementById("searchinput")
        .value.split(" ")
        .join("+");
  }
}

/* JS comes here */
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.lang = "vi-VN";
function runSpeechRecognition() {
  // get output div reference
  var output = document.getElementById("searchinput");
  // get action element reference
  // new speech recognition object

  // This runs when the speech recognition service starts
  recognition.onstart = function() {
    document.getElementById("cancel").style.display = "initial";
    document.getElementById("waveimg").style.display = "initial";
  };

  recognition.onspeechend = function() {
    recognition.stop();
    document.getElementById("cancel").style.display = "none";
    document.getElementById("waveimg").style.display = "none";
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.value = transcript;
  };
  // start recognition
  recognition.start();
}

function cancelmic() {
  recognition.stop();
  document.getElementById("cancel").style.display = "none";
  document.getElementById("waveimg").style.display = "none";
}

var nowid = "playvideo0";
var currentid = "playvideo0";

function comingsoon() {
  console.log(decodeURIComponent(document.cookie));
}

function play(id) {
  currentid = "playvideo" + id;
  if (document.getElementById(currentid).src == imgplay) {
    $(".channel").attr("src", imgplay);
    document.getElementById(currentid).src = imgpause;
    document.getElementById("divdance").style.display = "initial";
    document.getElementById("musicaudio").src = linkaudio[id];
    document.getElementById("musicaudio").style.display = "";
    document.getElementById("musicaudio").load();
    document.getElementById("musicaudio").play();
    nowid = currentid;
  } else {
    document.getElementById("musicaudio").style.display = "none";
    document.getElementById("divdance").style.display = "none";
    document.getElementById("musicaudio").pause();
    document.getElementById(currentid).src = imgplay;
  }
}

var nowtag = "#alltag";

function allclick() {
  if (document.getElementById("alltag").className == "tag") {
    $(".video").show();
    document.getElementById("alltag").className = "active";
    $(nowtag).attr('class', 'tag');
    nowtag = "#alltag";
  }
}

function nhacvietclick() {
  if (document.getElementById("nhacviettag").className == "tag") {
    $(".video").hide();
    $(".nhacviet").show();
    document.getElementById("nhacviettag").className = "active";
    $("#alltag").attr('class', 'tag');
    $(nowtag).attr('class', 'tag');
    nowtag = "#nhacviettag";
  }
}

function nhactrungclick() {
  if (document.getElementById("nhactrungtag").className == "tag") {
    $(".video").hide();
    $(".nhactrung").show();
    document.getElementById("nhactrungtag").className = "active";
    $("#alltag").attr('class', 'tag');
    $(nowtag).attr('class', 'tag');
    nowtag = "#nhactrungtag";
  }
}

function nhacnuocngoaiclick() {
  if (document.getElementById("nhacnuocngoaitag").className == "tag") {
    $(".video").hide();
    $(".nhacnuocngoai").show();
    document.getElementById("nhacnuocngoaitag").className = "active";
    $("#alltag").attr('class', 'tag');
    $(nowtag).attr('class', 'tag');
    nowtag = "#nhacnuocngoaitag";
  }
}

function nhactuankietclick() {
  if (document.getElementById("nhactuankiettag").className == "tag") {
    $(".video").hide();
    $(".nhactuankiet").show();
    document.getElementById("nhactuankiettag").className = "active";
    $("#alltag").attr('class', 'tag');
    $(nowtag).attr('class', 'tag');
    nowtag = "#nhactuankiettag";
  }
}

function setCookie(cvalue) {
  if (document.getElementById("modelight").textContent == "light_mode") {
    document.cookie = "lightmode = no";
  } else {
    document.cookie = "lightmode = yes";
  }

  checkCookie();
}

function getCookie() {
  let name = "lightmode" + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var loadinit = false;
function checkCookie() {
  let user = getCookie();
  if (user == "yes") {
    if (window.location.href == domainweb + "index.html") {
      changethemelight();
    }
  } else {
    if (window.location.href == domainweb + "index.html") {
      changethemedark();
    }
  }
  if (loadinit == false) {
    AddNewElementsByJquery();
    loadinit = true;
  }
}

function changethemedark() {
  $("#modelight").text("dark_mode");
  $("link[href='styledark.css']").attr("href", "stylelight.css");
}

function changethemelight() {
  $("#modelight").text("light_mode");
  $("link[href='stylelight.css']").attr("href", "styledark.css");
}

function AddNewElementsByJquery() {
  for (var index in linkyt) {
    $("#mainvideo").append(
      '<div class="' +
        hashtag[index] +
        ' video grid-item"><a href="' +
        linkyt[index] +
        '" target="_blank"><img src="' +
        thumbnail[index] +
        '" /><img class="openyoutube" src="https://cdn.glitch.me/7a14764c-62e2-49cc-8a28-07a2ef5baa86%2Fopenyoutube.png?v=1636617685487"></a><div class="info"><img id="playvideo' +
        index +
        '" class="channel" src="https://icons-for-free.com/iconfiles/png/512/blue+control+go+music+pause+play+icon-1320185679167007716.png" onclick="play(' +
        index +
        ')"/><label class="title">' +
        titleVideo[index] +
        '</label><div class="infoad"><p>' +
        SingerVideo[index] +
        "</p><p>" +
        TimeVideo[index] +
        "</p></div></div></div>"
    );
  }
}
function openexport() {
  document.getElementById("modal-container").style.opacity= "1";
  document.getElementById("modal-container").style.pointerEvents = "auto";
}

function closejson() {
  document.getElementById("modal-container").style.opacity= "0";
  document.getElementById("modal-container").style.pointerEvents = "none";
}

function openexport2() {
  document.getElementById("imageKhanh").style.opacity= "1";
  document.getElementById("imageKhanh").style.pointerEvents = "auto";
}

function closejson2() {
  document.getElementById("imageKhanh").style.opacity= "0";
  document.getElementById("imageKhanh").style.pointerEvents = "none";
}

var indexImagelist = 0;
let lengthlistimage = imagelist.length - 1;

function arrowright() {
    if (indexImagelist<lengthlistimage) {
        indexImagelist++;
        document.getElementById("imageKhanhnice").src=imagelist[indexImagelist];
        document.getElementById("imageAuthorP").textContent = "Tác giả: "+imageauthor[indexImagelist];
        document.getElementById("imageNameP").textContent = "Tác phẩm: " +imagename[indexImagelist];
        document.getElementById("indexImageP").textContent = "#" + (indexImagelist+1);
    }
    else {
      alert ("Đã đến ảnh cuối");
    }
}

function arrowleft() {
    if (indexImagelist > 0) {
        indexImagelist--;
        document.getElementById("imageKhanhnice").src=imagelist[indexImagelist];
        document.getElementById("imageAuthorP").textContent = "Tác giả: "+imageauthor[indexImagelist];
        document.getElementById("imageNameP").textContent = "Tác phẩm: " +imagename[indexImagelist];
        document.getElementById("indexImageP").textContent = "#" + (indexImagelist+1);
    }   
    else {
      alert ("Đã đến ảnh đầu");
    }
}


