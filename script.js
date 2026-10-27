const words=["ULTRA MAANGAS","RED CIRCLE","SIGN IN FIRST","BOTTOM ANIMATED"];
let wi=0,ci=0,del=false;
function type(){const e=document.getElementById("typed");if(!e)return;let c=words[wi];e.textContent="> "+c.slice(0,ci)+" _";if(!del){ci++;if(ci>c.length+14)del=true}else{ci--;if(ci==0){del=false;wi=(wi+1)%words.length}}setTimeout(type,del?45:95);}type();

// PROTECTION - DAPAT SIGN IN MUNA BAGO MABUKSAN WEBSITE
(function(){
  const logged=localStorage.getItem('logged'),reg=localStorage.getItem('isRegistered');
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(page!=='login.html'){
    if(!reg){
      alert('🔒 BOSS! Dapat mag Sign Up ka muna!\nGawa ka username at password para mabuksan website mo!');
      location.href='login.html';
      return;
    }
    if(logged!=='true'){
      alert('🔒 BOSS! Mag Sign In ka muna bago mabuksan website mo!');
      location.href='login.html';
      return;
    }
  }else{
    if(logged==='true') location.href='index.html';
  }
})();

function logout(){
  if(!confirm('Mag logout ka na Boss? Need mo ulit mag Sign In para mabuksan website!')) return;
  localStorage.removeItem('logged');
  location.href='login.html';
}
function openLB(i){document.getElementById('lbImg').src=document.querySelectorAll('.box3d img')[i].src;document.getElementById('lightbox').classList.add('active')}
function closeLB(){document.getElementById('lightbox').classList.remove('active')}
function toggleEye(id){const inp=document.getElementById(id);inp.type=inp.type==='password'?'text':'password'}

// BOTTOM NAV ANIMATION PAG TAP - PAGE TRANSITION
document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('.bottom-nav a');
  links.forEach(a=>{
    a.addEventListener('click',e=>{
      if(a.classList.contains('active')) {e.preventDefault();return}
      e.preventDefault();
      const sec=document.querySelector('.sec');
      if(sec) sec.classList.add('exit');
      setTimeout(()=>{location.href=a.href},280);
    });
  });
});