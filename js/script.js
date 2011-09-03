/* Author: zires
*/
$("#blog ul li a").hover(
    function(){
      $(this).parent().css({"color": "#FFAA01"});
    },
    function(){
      $(this).parent().css({"color": "#fff"});
    }
);
