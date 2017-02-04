
$('#partPicker').on('submit', function(e){
  e.preventDefault();
  var machine = $('#myMachine select').val();
  var part = $('#needPart select').val();
  var message = $('#message input[type="text"]').val();

  var str = `Machine: ${machine} \nNeeds part: ${part} \nSpecial Instructions: ${message}`;
  // console.log(str);

  $('#sent').html(`<h4>Machine:</h4> <p>${machine}<p> \n<h4>Needs Part:</h4> <p>${part}</p> \n<h4>Special Instructions:</h4> <p>${message}</p>`);

  $('#mBack').removeClass('hidden');
});
