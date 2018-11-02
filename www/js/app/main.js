$(document).ready(function() {
  getNewsList("null", "null");
});


function getNewsList(postID, source_id) {
  $.ajax({
    type: 'post',
    data: {
      code:"4a2204811369",
      post_id:postID,
      source_id:source_id
    },
    url: "https://pk.navinda.xyz/api/ceylon_news/v2.0/getNewsList.php",
    dataType: 'json',
    timeout: 60000, //60s
    success: function (data) {
      for (item in data) {
        $('#newsList').append(getNewListItem(data[item]));
      }
    }
  });
}


function getNewListItem(post) {
  var id,source,datetime,title,mainImg;
  id = post.id;
  source = post.source;
  datetime = post.datetime;
  title = post.title;
  mainImg = post.mainImg;
  var html = '<li class="list-item"><div class="list-item__left"><img class="list-item__thumbnail" src="' + mainImg + '" alt="mainImg"  onerror="imgError(this);"></div><div class="list-item__center" onclick="loadPost(' + "'" + id + "'" + ')"><div class="list-item__title sinhala">' + title + '</div><div class="list-item__subtitle" style="margin-top:5px;">' + source + " - " + datetime + '</div></div></li>'
  return(html);
}

function loadPost(id) {
  $.ajax({
    type: 'post',
    data: {
      code:"4a2204811369",
      post_id:postID,
      source_id:source_id
    },
    url: "https://pk.navinda.xyz/api/ceylon_news/v2.0/getNewsList.php",
    dataType: 'json',
    timeout: 60000, //60s
    success: function (data) {
      for (item in data) {
        $('#newsList').append(getNewListItem(data[item]));
      }
    }
  });
}


function imgError(image) {
    image.onerror = "";
    image.src = "https://image.freepik.com/free-icon/news-logo_318-38132.jpg";
    return true;
}


// handle slide menu
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
  .then(menu.close.bind(menu));
};

