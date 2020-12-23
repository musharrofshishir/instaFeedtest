

//! Instagram API Testing

// $(window).on('load', function(){

//     $.instagramFeed({
//         'username':'ui.colour',
//         'container': '#instaPhotos',
//         'items_per_row': 3,        
//         'display_gallery':true
//         // 'display_profile':false
//     });
// });

// [
//     {
//         "access_token": "IGQVJYLXV5RkpFcWR2RDA1aGVCb09HTzR0TWY5aElMV1AwcHM5ZADdxbXAtM05mVzhJMlNIZAWhCTEJKUFJjUlB4RzZAPQXBjT0k3RThQcG1ZAOGJxQlZAWV19LN3BUTWxib2o0QmZAfT0JTdXdmbWtlT0pTUUJmeTdSbnVGTVBr", 
//         "user_id": 17841400538296897
//     }
// ]
//! long
// [{
//     "access_token":"IGQVJYVHI1bHlGX3NYTkhsNnNLLWhibThITkUzSjJoRHpxSW5rZA1ZAIQ3V5R1dUR0Y4dUtIbTJ2OHNNZAXhNWkUxak5kc1BkdTY1V1hCQXBrTGhNOXVQWFljUFp1MlkxUlFHaVkxd1BR",
//     "token_type":"bearer",
//     "expires_in":5184000
// }] 

jQuery.fn.spectragram.accessData = {
	accessToken: "IGQVJYVHI1bHlGX3NYTkhsNnNLLWhibThITkUzSjJoRHpxSW5rZA1ZAIQ3V5R1dUR0Y4dUtIbTJ2OHNNZAXhNWkUxak5kc1BkdTY1V1hCQXBrTGhNOXVQWFljUFp1MlkxUlFHaVkxd1BR"
};

$('#instaPhotos').spectragram({
    size: 'medium',
    wrapEachWith:"<div class='col-lg-4 col-md-6 col-sm-12 p-1'></div>"    
});