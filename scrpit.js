

$(document).ready(function(){
showwk();


})

let num=0;
let maxplayers=11;
let playernumber = document.getElementsByClassName('number');
let batcount=0;
let ballcount=0;
let wicketcount=0;
let allcount=0;
let teama = document.getElementsByClassName('Team-A-number');
let teamb = document.getElementsByClassName('Team-B-number');
let teamacount=0;
let teambcount=0;

    
 function showselection(){
   $(".top").hide();
   $(".middleclass").hide();
   $("#ground").hide();
   $(".container").hide();
   $(".table-to-hide").hide();
   $(".hide-me").hide();
   $('.my-selected-table').show();
   $('.active').show();
   $('.active').css('display','initial');
   $('.data').hide();
   $('.add-data').hide();
 }

function showball(){
    $(".allrounder-display").hide();
    $(".batsmen-display").hide();
    $(".wicketkeeper-display").hide();
    $(".bowler-display").show();
    document.getElementById("ballshow").style.borderBottom="4px solid red";
    document.getElementById("allshow").style.borderBottom="none";
    document.getElementById("batshow").style.borderBottom="none";
    document.getElementById("wicketshow").style.borderBottom="none";
    
  }
 

  function showbat() {
    $(".allrounder-display").hide();
    $(".bowler-display").hide();
    $(".wicketkeeper-display").hide();
    $(".batsmen-display").show();
    document.getElementById("batshow").style.borderBottom="4px solid red";
    document.getElementById("ballshow").style.borderBottom="none";
    document.getElementById("allshow").style.borderBottom="none";
    document.getElementById("wicketshow").style.borderBottom="none";
  }
  function showall(){
    $(".bowler-display").hide();
    $(".batsmen-display").hide();
    $(".wicketkeeper-display").hide();
    $(".allrounder-display").show();
    document.getElementById("allshow").style.borderBottom="4px solid red";
    document.getElementById("batshow").style.borderBottom="none";
    document.getElementById("wicketshow").style.borderBottom="none";
    document.getElementById("ballshow").style.borderBottom="none";
  }
  function showwk(){
    $(".allrounder-display").hide();
    $(".batsmen-display").hide();
    $(".bowler-display").hide();
    $(".wicketkeeper-display").show();
    $(".my-selected-table").hide();
    document.getElementById("wicketshow").style.borderBottom="4px solid red";
    document.getElementById("ballshow").style.borderBottom="none";
    document.getElementById("allshow").style.borderBottom="none";
    document.getElementById("batshow").style.borderBottom="none";
  }
  //calling functions to display 
  document.getElementById("batshow").addEventListener("click",showbat);
  document.getElementById("ballshow").addEventListener("click",showball);
  document.getElementById("wicketshow").addEventListener("click",showwk);
  document.getElementById("allshow").addEventListener("click",showall);


//   mapping players to ground
//batsmen display
$(".batsmen-display").on("click",".Team-1",function(){
    $("#batsmenarea").append($(".image").html());
    // $('.selected-tab').append($('.select').html())

  //selected-team
  $(this).parent().parent().addClass('active');
  $('.my-dream-team').append($('.active')).html();
 // $('.active').clone().appendTo('.my-dream-table')
    var bar = document.getElementsByClassName('progress');
    bar[num].style.borderTop =  '14px solid green'; num++;
    playernumber[0].innerText =`${num}/${maxplayers}`;
    $(this).prop('disabled',true);
    //increasing count of team
    batcount++; teamacount++;
    teama[0].innerText = `${teamacount}/${maxplayers}`;
    if(batcount>2)
    {
     
       if(wicketcount<1)
      {
        showwk();
        alert('Select Atleast One Wicket Keeper');
        
      }
      else if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
      }
      else  if(ballcount<2)
      {
        showball()
        alert('Select Atleast Two Bowlers');
        
      }
    }
    else if(batcount>4)
    {
      $('.add-batsmen').prop('disabled',true);
      alert('Sorry! You have crossed the Batsmen Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }


});
$(".batsmen-display").on("click",".Team-2",function(){
  $("#batsmenarea").append($(".image").html());
  // $('.selected-tab').append($('.select').html())
  
  var bar = document.getElementsByClassName('progress');
  bar[num].style.borderTop =  '14px solid green'; num++;
  $(this).parent().parent().addClass('active');
  $('.my-dream-team').append($(' .active')).html();

  playernumber[0].innerText =`${num}/${maxplayers}`;
  $(this).prop('disabled',true);
   //increasing count of team
  batcount++; teambcount++;
    teamb[0].innerText = `${teambcount}/${maxplayers}`;
    if(batcount>2)
    {
     
       if(wicketcount<1)
      {
        showwk();
        alert('Select Atleast One Wicket Keeper');
        
      }
      else if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
      }
      else  if(ballcount<2)
      {
        showball()
        alert('Select Atleast Two Bowlers');
        
      }
    }
    else if(batcount>4)
    {
      $('.add-batsmen').prop('disabled',true);
      alert('You have crossed the Batsmen Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }


});
//end..
//wicket keeper display
$(".wicketkeeper-display").on("click",".Team-1",function(){
    $("#wicketkeeperarea").append($(".image").html());
    // $('.selected-tab').append($('.select').html())
    $(this).parent().parent().addClass('active');
  $('.my-dream-team').append($(' .active')).html();
    var bar = document.getElementsByClassName('progress');
    bar[num].style.borderTop =  '14px solid green'; num++;

   
    playernumber[0].innerText =`${num}/${maxplayers}`;
    $(this).prop('disabled',true);
     //increasing count of team
    wicketcount++; teamacount++;
    teama[0].innerText = `${teamacount}/${maxplayers}`;
    //display
    if(wicketcount>1)
    {
     
       if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
        
      }
      else  if(batcount<2)
      {
        showbat()
        alert('Select Atleast Two Batsmen');
        
      }
      else if(ballcount<2)
      {
        showball();
        alert('Select Atleast Two Bowlers');
      }
    }
    else if(wicketcount>1)
    {
      $('.add-wicketkeeper').prop('disabled',true);
      alert('Sorry! You have crossed the Wicket Keeper Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }
    
});
$(".wicketkeeper-display").on("click",".Team-2",function(){
  $("#wicketkeeperarea").append($(".image").html());
  // $('.selected-tab').append($('.select').html())
  $(this).parent().parent().addClass('active');
  $('.my-dream-team').append($(' .active')).html();
  var bar = document.getElementsByClassName('progress');
  bar[num].style.borderTop =  '14px solid green'; num++;


  playernumber[0].innerText =`${num}/${maxplayers}`;
  $(this).prop('disabled',true); 
   //increasing count of team
  wicketcount++; teambcount++;
    teamb[0].innerText = `${teambcount}/${maxplayers}`;
    //display
    if(wicketcount>1)
    {
     
       if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
        
      }
      else  if(batcount<2)
      {
        showbat()
        alert('Select Atleast Two Batsmen');
        
      }
      else if(ballcount<2)
      {
        showball();
        alert('Select Atleast Two Bowlers');
      }
    }
    else if(wicketcount>1)
    {
      $('.add-wicketkeeper').prop('disabled',true);
      alert('Sorry! You have crossed the Wicket Keeper Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }

});

//end..
//bowler display
$(".bowler-display").on("click",".Team-1",function(){
    $("#bowlerarea").append($(".image").html());
    // $('.selected-tab').append($('.select').html())
    var bar = document.getElementsByClassName('progress');
    bar[num].style.borderTop =  '14px solid green';
     num++;
     $(this).parent().parent().addClass('active');
     $('.my-dream-team').append($(' .active')).html();
     playernumber[0].innerText =`${num}/${maxplayers}`;
     $(this).prop('disabled',true);
     $(this).addClass("disabled");
      //increasing count of team
     ballcount++; teamacount++;
    teama[0].innerText = `${teamacount}/${maxplayers}`;
    //conditons
    if(ballcount>2)
    {
     
       if(wicketcount<1)
      {
        showwk();
        alert('Select Atleast One Wicket Keeper');
        
      }
      else  if(batcount<2)
      {
        showbat()
        alert('Select Atleast Two Batsmen');
        
      }
      else if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
      }
    }
    else if(ballcount>4)
    {
      $('.add-bowler').prop('disabled',true);
      alert('Sorry! You have crossed the Bowler Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }

});
$(".bowler-display").on("click",".Team-2",function(){
  $("#bowlerarea").append($(".image").html());
  // $('.selected-tab').append($('.select').html())
  var bar = document.getElementsByClassName('progress');
  bar[num].style.borderTop =  '14px solid green';
   num++;
   $(this).parent().parent().addClass('active');
   $('.my-dream-team').append($(' .active')).html();

   playernumber[0].innerText =`${num}/${maxplayers}`;
   $(this).prop('disabled',true);
   $(this).addClass("disabled");
    //increasing count of team
   ballcount++; teambcount++;
    teamb[0].innerText = `${teambcount}/${maxplayers}`;
    if(ballcount>2)
    {
     
       if(wicketcount<1)
      {
        showwk();
        alert('Select Atleast One Wicket Keeper');
        
      }
      else  if(batcount<2)
      {
        showbat()
        alert('Select Atleast Two Batsmen');
        
      }
      else if(allcount<1)
      {
        showall();
        alert('Select Atleast One All Rounder');
      }
    }
    else if(ballcount>4)
    {
      $('.add-bowler').prop('disabled',true);
      alert('Sorry! You have crossed the Bowler Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }

});
//end..
//all rounder display
$(".allrounder-display").on("click",".Team-1",function(){
    $("#allrounderarea").append($(".image").html()); 
    // $('.selected-tab').append($('.select').html())

    var bar = document.getElementsByClassName('progress');
    bar[num].style.borderTop =  '14px solid green';
    num++; allcount++;
    $(this).parent().parent().addClass('active');
    $('.my-dream-team').append($(' .active')).html();
    playernumber[0].innerText =`${num}/${maxplayers}`;
    $(this).prop('disabled',true);
     //increasing count of team
     teamacount++; allcount++;
    teama[0].innerText = `${teamacount}/${maxplayers}`;
    //display
    if(allcount>1)
    {
     
       if(wicketcount<1)
      {
        showwk();
        alert('Select Atleast One Wicket Keeper');
        
      }
      else  if(batcount<2)
      {
        showbat()
        alert('Select Atleast Two Batsmen');
        
      }
      else if(ballcount<2)
      {
        showbll();
        alert('Select Atleast Two Bowlers');
      }
    }
    else if(allcount>1)
    {
      $('.add-allrounder').prop('disabled',true);
      alert('Sorry! You have crossed the All Rounder Limit');
    }
    if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }


});
$(".allrounder-display").on("click",".Team-2",function(){
  $("#allrounderarea").append($(".image").html()); 
  // $('.selected-tab').append($('.select').html())
  var bar = document.getElementsByClassName('progress');
  bar[num].style.borderTop =  '14px solid green';
  num++;
  $(this).parent().parent().addClass('active');
  $('.my-dream-team').append($(' .active')).html();
  playernumber[0].innerText =`${num}/${maxplayers}`;
  $(this).prop('disabled',true);
   //increasing count of team
   allcount++; teambcount++;
   teamb[0].innerText = `${teambcount}/${maxplayers}`;
   //display
   if(allcount>1)
   {
    
      if(wicketcount<1)
     {
       showwk();
       alert('Select Atleast One Wicket Keeper');
       
     }
     else  if(batcount<2)
     {
       showbat()
       alert('Select Atleast Two Batsmen');
       
     }
     else if(ballcount<2)
     {
       showball();
       alert('Select Atleast Two Bowlers');
     }
   }
   else if(allcount>1)
   {
     $('.add-allrounder').prop('disabled',true);
     alert('Sorry! You have crossed the All Rounder Limit');
   }
   if(num>=11)
 {
   alert('Well Done!! Your Team is Ready..click OK to continue');
   showselection();
 }

});
//end ..



//displaying credits
let credits=0;
let but_td = document.getElementsByClassName('add-data');
let creditcount = document.getElementsByClassName('credits');
$('.add-data').click(function(){
  var cred = $(this).siblings('.data').text();
  credits = credits + parseInt(cred);
  creditcount[0].innerText = `${credits}`;
  console.log(credits)
});


//displaying new table






  




  
 





