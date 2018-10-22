$.getJSON("user.json", function (user) {
       let title = document.getElementById("title");
       let name = document.getElementById("user-name");
       let biography = document.getElementById("biography");
       title.innerHTML(user.title);
       name.innerHTML(user.name);
       biography.innerHTML(user.biography);
       console.log(user.name);
   });

// let requestURL = '../userinfo/user.json',
//     method = 'GET';
// let request = new XMLHttpRequest();
// request.open(method,requestURL,true);
// request.responseType = 'json';
// request.send(null);
// let user = JSON.parse(request.responseText);



