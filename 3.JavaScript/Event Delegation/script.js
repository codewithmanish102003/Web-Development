document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log('Clicked:', e.target.textContent);
    }
  });
  
  document.getElementById('add').addEventListener('click', () => {
    const btn = document.createElement('button');
    btn.textContent = 'New Button';
    document.getElementById('list').appendChild(btn);
  });
  