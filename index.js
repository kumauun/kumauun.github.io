window.onscroll = function() {ScrollProgress()};

function ScrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = Math.floor(Math.min(((winScroll / height) * 100),100));
  document.getElementById("progress").innerText = scrolled + "%"
  document.getElementById("myBar").style.width = scrolled + "%";
} 