
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.getElementById('themeToggle');
  toggle && toggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      document.documentElement.style.setProperty('--bg','#f4f7fb');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--text','#0b1221');
      document.documentElement.style.setProperty('--muted','#65758a');
    } else {
      document.documentElement.style.setProperty('--bg','#0b1221');
      document.documentElement.style.setProperty('--card','#0f1b32');
      document.documentElement.style.setProperty('--text','#eaf2ff');
      document.documentElement.style.setProperty('--muted','#9aa6c2');
    }
  });
});
