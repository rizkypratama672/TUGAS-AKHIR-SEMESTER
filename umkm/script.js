var NOMOR="6281234567890";
document.querySelectorAll(".wa-link").forEach(function(a){
 a.href="https://wa.me/"+NOMOR+"?text="+encodeURIComponent(a.dataset.msg);
 a.target="_blank";a.rel="noopener";
});
