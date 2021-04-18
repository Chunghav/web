$(document).ready(function(){
    $(".uniDrop-filter-txt").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".uniDrop-links li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  
  
  $(document).ready(function(){
    $(".uniDrop-filter-txt-toggle").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".uniDrop-links-toggle li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  $(document).ready(function(){
    $(".majorDrop-filter-txt").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".majorDrop-links li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  $(document).ready(function(){
    $(".majorDrop-filter-txt-toggle").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".majorDrop-links-toggle li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });