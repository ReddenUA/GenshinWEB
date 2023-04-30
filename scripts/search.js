const searchInput = document.getElementById('search-sinput');
const characterList = document.getElementById('chara-filter').getElementsByTagName('a');

searchInput.addEventListener('input', function() {
  const searchString = searchInput.value.toLowerCase();
  
  Array.from(characterList).forEach(function(character) {
    const characterName = character.querySelector('.chara-name').textContent.toLowerCase();
    
    if (characterName.indexOf(searchString) > -1) {
      character.style.display = 'block';
    } else {
      character.style.display = 'none';
    }
  });
});
