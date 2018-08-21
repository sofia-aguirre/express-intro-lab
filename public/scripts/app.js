console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  const handleSuccess = json =>  {
    json.albums.foreach((album) => {
      $('.albumsList').append(`<li>${album.title}</li>`);
    })
  }

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');
  
  
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  });
  

});
