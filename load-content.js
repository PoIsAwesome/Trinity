async function loadJSON(path){
  const res = await fetch(path);
  return await res.json();
}

async function init(){
  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('year2')?.textContent = new Date().getFullYear();

  const about = await loadJSON('content/about.json');
  if(about){
    document.getElementById('displayName').textContent = about.name;
    document.getElementById('shortBio').textContent = about.tagline;
    document.getElementById('aboutText').innerHTML = about.html;
    document.getElementById('profileImage').src = about.image;
  }

  const schedule = await loadJSON('content/schedule.json');
  if(schedule && document.getElementById('scheduleList')){
    schedule.entries.forEach(e=>{
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${e.title}</strong><br><small>${e.time}</small><p>${e.note}</p>`;
      document.getElementById('scheduleList').appendChild(div);
    });
  }
}
init();
