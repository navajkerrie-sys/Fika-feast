(function(){
var K="cf_consent",cc=document.getElementById("cc"),an=document.getElementById("an"),em=document.getElementById("em");
function get(){try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}}
function set(v){try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}}
function show(){var c=get()||{};an.checked=!!c.analytics;em.checked=!!c.embeds;cc.classList.add("on")}
/* No analytics or embeds exist. Load them here ONLY when v.analytics / v.embeds is true. */
function apply(v){}
function save(a,e){var v={analytics:a,embeds:e,ts:Date.now()};set(v);cc.classList.remove("on");apply(v)}
document.getElementById("sv").onclick=function(){save(an.checked,em.checked)};
document.getElementById("rj").onclick=function(){save(false,false)};
document.getElementById("al").onclick=function(){save(true,true)};
var c=get();if(c)apply(c);else show();
var pages=document.querySelectorAll(".page");
function route(){var p=location.hash.replace(/^#/,"")||"/",f=false;
pages.forEach(function(s){var on=s.dataset.p===p;s.classList.toggle("on",on);if(on)f=true});
if(!f)pages[0].classList.add("on");window.scrollTo(0,0)}
function go(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"})}
document.addEventListener("click",function(ev){
var t=ev.target.closest("[data-cc]");if(t){ev.preventDefault();show();return}
var s=ev.target.closest("[data-s]");if(s){ev.preventDefault();var id=s.dataset.s;
if((location.hash||"#/")!=="#/"){location.hash="#/";setTimeout(function(){go(id)},60)}else go(id)}});
window.addEventListener("hashchange",route);route();
})();
