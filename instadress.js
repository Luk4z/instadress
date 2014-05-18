function createInstadress() {
  $('body').append('<input type="text" id="instadress" />');
  $instadress = $('#instadress');
  $instadress.css({
    'padding': '3px',
    'font-size': '14px',
    'border': 'solid 1px #878787',
    'position': 'fixed',
    'top': '0',
    'right': '0',
    'z-index': '100000'
  });
  $instadress.hide();
}

function toggleInstadress() {
  $(document).keypress(function(e) {
    if (!($('textarea').is(':focus') || $('input').is(':focus'))) {
      $instadress.fadeIn('fast');
      $instadress.focus();
    }
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 8 && $instadress.val().length === 0 ) {
      $instadress.fadeOut();
    }
    else if (e.keyCode === 13 && $instadress.val().length > 0) {
      goToInstadress();
    }
  });
}

function goToInstadress() {
  $url = $instadress.val();
  window.location.assign(($url.indexOf('.') === -1 ? "http://google.com/search?q=" : "http://" ) + $url);
}

createInstadress();
toggleInstadress();
