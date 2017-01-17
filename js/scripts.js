$(function(){
  $("form#stresstest").submit(function(event){
    $("#advice ul li").remove();
    var stressRelated = 0;
    var warningSigns = 0;
    var manageStress = 0;

    $("input:checkbox[name=stress-related]:checked").each(function(){
      stressRelated += parseInt($(this).val());
    });

    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningSigns += parseInt($(this).val());
    });

    $("input:checkbox[name=manage-stress]:checked").each(function(){
      manageStress += parseInt($(this).val());
    });

    if(stressRelated >= 4 || warningSigns >= 6 ){
      $("#advice ul").append("<li>Take rest, see a doctor!! <br></li>");
    }else if(stressRelated >=3 || warningSigns >= 2){
      $("#advice ul").append("<li>It might be better for you to take some rest!! <br></li>");
    }else{
      $("#advice ul").append("<li>It seems you are fine, but always relax!!<br></li>");
    };

    if(manageStress >= 2){
      $("#advice ul").append("<li>It seems that you are working on stress managenent. Keep working</li>");
    };

    $("#advice").show();
    event.preventDefault();
  });
});
