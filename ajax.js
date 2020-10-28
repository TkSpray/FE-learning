let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.status);
    }
  }
};
