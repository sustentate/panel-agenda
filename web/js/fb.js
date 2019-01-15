window.fbAsyncInit = function() {
    FB.init({
      appId            : '2306383569597047',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.2'
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
     
  };


(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/es_LA/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
 
 function statusChangeCallback(response){
     if(response.status === 'connected'){
         console.log("Logeado");
         testAPI();
     } else{
         console.log("deslogeado");
     }
 }

/*  function testAPI(){
    FB.api(
        '/1509669989140316',
        'GET',
         {"fields":"feed"},
        function(response) {
            if(response && !response.error){
                console.log(response);
            }
        }
      );
 } */
 function testAPI(){
    FB.api(
        '/1509669989140316',
        'GET',
        {"fields":"feed{full_picture,permalink_url.limit(1),message},name,fan_count"},
        function(response) {
            if(response && !response.error){
                /* console.log(response); */
                var array = response.feed.data; 
                var name = response.name;
                var fan = response.fan_count;
                var like = document.getElementById('likes');
                var feed = document.getElementById('feedfb');
                like.innerHTML = "<div class='text-likes'><h4>"+name+"<br></h1> <i class='fas fa-thumbs-up'></i> "+fan+" </div>";
                feed.innerHTML = "<h1> Ultimos "+array.length+" post </h1>";
                array.forEach(element => {
                   let img = element.full_picture;
                   let msg = element.message;
                   let url = element.permalink_url;
                   
               feed.innerHTML += "<div class='divsfb'><a href="+url+"><img src="+img+" class='imgfeedfb'></a>"+msg+"</div>";
               });
            }
        }
      );

    /*   FB.api(
        '/1509669989140316',
        'GET',
        {"fields":"unread_notif_count,unread_message_count,scheduled_posts{message},instagram_accounts{follow_count,followed_by_count,media_count,username,profile_pic}"},
        function(response) {
            console.log(response);
        }
      );  */
 }


 /* 
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/es_LA/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   FB.getLoginStatus(function(response) {
   function statusChangeCallback(response) {
                  console.log('statusChangeCallback');
                  console.log(response);
                  // The response object is returned with a status field that lets the
                  // app know the current login status of the person.
                  // Full docs on the response object can be found in the documentation
                  // for FB.getLoginStatus().
                  if (response.status === 'connected') {
                      // Logged into your app and Facebook.
                      console.log('Welcome!  Fetching your information.... ');
                      FB.api('/me', function (response) {
                          console.log('Successful login for: ' + response.name);
                          document.getElementById('status').innerHTML =
                            'Thanks for logging in, ' + response.name + '!';
                      });
                  } else {
                      // The person is not logged into your app or we are unable to tell.
                      document.getElementById('status').innerHTML = 'Please log ' +
                        'into this app.';
                  }
              }
}); */