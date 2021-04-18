$(document).ready(function() {
    $("#sortByRank").click(function() {

        $(".uniDrop-links li").sort(function(a, b) {
          return parseInt(a.id) - parseInt(b.id);
        }).each(function() {
          var elem = $(this);
          elem.remove();
          $(elem).appendTo(".uniDrop-links");
        });
        $("#currentSort").text("(sorted by ranking)");
    });
  });


  $(document).ready(function(){
      $("#sortByAlpha").click(function(){

        $(".uniDrop-links li").sort(function(a, b){
          return $(a).text().localeCompare($(b).text());
      }).appendTo(".uniDrop-links");
      $("#currentSort").text("(sorted by alphabet)");
      });
  });


  //////////toggle sort//////////


  $(document).ready(function() {
    $("#sortByRank-btn-toggle").click(function() {
  
      if ($(".rank-sort2").hasClass('fa-sort-numeric-down')) {
        $(".uniDrop-links-toggle li").sort(function(a, b) {
          return parseInt(b.id) - parseInt(a.id);
        }).each(function() {
          var elem = $(this);
          elem.remove();
          $(elem).appendTo(".uniDrop-links-toggle");
        });
        $(".rank-sort2").toggleClass('fa-sort-numeric-up fa-sort-numeric-down');
      } 
      else {
        $(".uniDrop-links-toggle li").sort(function(a, b) {
          return parseInt(a.id) - parseInt(b.id);
        }).each(function() {
          var elem = $(this);
          elem.remove();
          $(elem).appendTo(".uniDrop-links-toggle");
        });
        $(".rank-sort2").toggleClass('fa-sort-numeric-up fa-sort-numeric-down');
  
      }
  
    });
  });


  $(document).ready(function(){
      $("#sortByAlpha-btn-toggle").click(function(){

        if($(".alpha-sort2").hasClass('fa-sort-alpha-down')){
            $(".uniDrop-links-toggle li").sort(function(a, b){
                return $(b).text().localeCompare($(a).text());
            }).appendTo(".uniDrop-links-toggle");
            $(".alpha-sort2").toggleClass('fa-sort-alpha-up fa-sort-alpha-down');
        }

        else{
            $(".uniDrop-links-toggle li").sort(function(a, b){
            return $(a).text().localeCompare($(b).text());
        }).appendTo(".uniDrop-links-toggle");
        $(".alpha-sort2").toggleClass('fa-sort-alpha-up fa-sort-alpha-down');
        }

        
      })
  })

  //////////////////////////////////////////////////////


  $(".uni-major-list li").sort(function(a, b){
    return $(a).text().localeCompare($(b).text());
}).appendTo(".uni-major-list");