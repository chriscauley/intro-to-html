function pass_test(i) { localStorage.setItem('test'+i,1); check_test(i); }
function fail_test(i) { localStorage.setItem('test'+i,0); check_test(i); }
function check_test(i) {
  var status = $("#status"), pass = localStorage['test'+i];
  status.removeClass("right").removeClass("wrong");
  if (pass==1) { $("#status").html("test passed!"); status.addClass("right"); }
  if (pass==0) { $("#status").html("test failed :("); status.addClass("wrong"); }
}

function test_0() {
  if ($("p").length>0 && $("title").length>0) {
    if ($("p").html().length>0) {
      pass_test(0); return;
    }
  }
  fail_test(0);
}

function test_1() {
  var hs = $("h1,h2,h3,h4,h5,h6");
  var valid = hs.length>0 && hs.children().length==0 && !!hs.text();
  if ($("p").length<2) { valid=false; }
  if ($("p").find("i,b").length<2) { valid=false; }
  if ($("i b, b i").length==0) { valid=false; }
  if (valid) { pass_test(1); }
  else { fail_test(1) }
}

function test_2() {
  var valid1=false,valid2=false, valid3=true;
  $("ul a").each(function(){
    if ($(this).text().length<2) {valid3=false;}
    if (!!this.href.match(/\.?\/?lesson-3\.html$/)) { valid1=true; }
    if (!!this.href.match("google.com")) {
      if (!!this.href.match(/^http\:\/\/google.com/)) { valid2=true; return; }
      if (!!this.href.match(/^http\:\/\/www.google.com/)) { valid2=true; return; }
      alert("close, but not quite. Try clicking on the google link.");
    }
  });
  if ($("ul li").length<5) {valid1=false; }
  if (valid1&&valid2&&valid3){ pass_test(2); }
  else { fail_test(2) }
}

function test_3() {
  var valid = ($("img").attr("src") && $("img").attr("width") && $("img").attr("height"));
  if (valid) { pass_test(3); }
  else { fail_test(3) }
}

function test_4() {
  valid = true;
  if ($("tbody tr").length<3) { valid = false }
  var data = ['tomas','17','78','95','93'];
  $("tr").last().children().each(function(i) {
    if (!$(this).text().toLowerCase().match(data[i])) { valid=false }
  });
  if (!$("[border]").length||!$("[cellpadding]").length) { valid=false }
  if (!$("tbody tr").eq(1).children().eq(1).text().match("monkey")) { valid = false; }
  if ($("thead td").last().attr("colspan")!=3) { valid = false; }
  if (valid) { pass_test(4); }
  else { fail_test(4) }
}

function test_5() {
  var s = window.location.search;
  var ss =['name=','email='];
  var valid=true;
  for (var i=0; i<ss.length; i++) {
    if (!s.match(ss[i])) { valid = false; }
  }
  var color = $("[name=color]").last().val();
  if (!s.match("color="+color)) { valid = false; }
  if (valid) { pass_test(5); }
  else { fail_test(5) }
}

function clear() { localStorage.clear() }

function all_tests() {
  $("li").each(function(i) {
    var pass = localStorage['test'+i];
    if (pass==1) { $(this).prepend($("<span class='right'>passed!</span>")) }
    if (pass==0) { $(this).prepend($("<span class='wrong'>failed.</span>")) }
  });
}

$(document).ready(function() {
  var l = window.location.href;
  var p = l.match(/(\d+).html/);
  if (!p) { all_tests(); console.log('nopage'); return; }
  p = p.pop()*1;
  var elements = [
    '<div class="toc"><a href="./toc.html">Table of Contents</a></div>'
  ]
  var name = 'lesson';
  if (!!l.match('lesson') || !!l.match('answer')) {
    // var name = 'slides';
    elements.push('<button id="status" onclick="test_'+p+'(); return false;">check answer</button>');
  }
    if (p>0) { elements.push('<a class="prev" href="'+name+'-'+(p-1)+'.html">Previous Lesson</a>'); }
  if (p<5) { elements.push('<a class="next" href="'+name+'-'+(p+1)+'.html">Next Lesson</a>'); }
  for (var i=0; i<elements.length; i++) { $("body").append($(elements[i])); }
  check_test(p);
});