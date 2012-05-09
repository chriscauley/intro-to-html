function pass_test(i) { localStorage.setItem('test'+i,1); check_test(i); }
function fail_test(i) { localStorage.setItem('test'+i,0); check_test(i); }
function check_test(i) {
  var status = $("#status"), pass = localStorage['test'+i];
  status.removeClass("right").removeClass("wrong");
  console.log(status);
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
  var valid = hs.length>0 && hs.children==0 && !!hs.text();
  if ($("p").length<2) { valid=false; }
  if ($("p").find("i,b")<2) { valid=false; }
  if ($("i b, b i").length==0) { valid=false; }
  if (valid) { pass_test(1); }
  else { fail_test(1) }
}

function test_2() {
  var valid1=false,valid2=false;
  $("a").each(function(){
    if (!!this.href.match("lesson-3\.html")) { valid1=true }
    if (!!this.href.match("http://google.com")) { valid2=true }
  });
  if (valid1&&valid2){ pass_test(2); }
  else { fail_test(2) }
}

function test_3() {
  var valid = ($("img").attr("src") && $("img").attr("width") && $("img").attr("height"));
  if (valid) { pass_test(3); }
  else { fail_test(3) }
}

function test_4() {
  var s = window.location.search;
  var ss =['&name','&email','&comment'];
  var valid=true;
  for (var i=0; i<ss.length; i++) {
    if (!s.match(ss[i])) { valid = false; }
  }
  if (valid) { pass_test(4); }
  else { fail_test(4) }
}

function clear() { localStorage.clear() }