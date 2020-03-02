jQuery(document).ready(function(){
  jQuery(".nameConvention").click(function(){
    jQuery("p.nameConvention").toggleClass("hidden");
  });

  jQuery(".return").click(function(){
    jQuery("p.return").toggleClass("hidden");
  });

  jQuery(".string").click(function(){
    jQuery("p.string").toggleClass("hidden");
  });

  jQuery(".boolean").click(function(){
    jQuery("p.boolean").toggleClass("hidden");
  });

  jQuery(".notNumber").click(function(){
    jQuery("p.notNumber").toggleClass("hidden");
  });

  jQuery(".alrt").click(function(){
    jQuery("p.alrt").toggleClass("hidden");
  });
});