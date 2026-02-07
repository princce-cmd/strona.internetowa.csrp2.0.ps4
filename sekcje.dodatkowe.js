<script>
function toggleExpand(btn) {
  // 1. Znajdź treść, która jest pod przyciskiem
  const content = btn.nextElementSibling;
  
  // 2. Znajdź WSZYSTKIE inne sekcje na stronie
  const allContents = document.querySelectorAll('.expand-content');
  
  // 3. Zamknij wszystkie inne sekcje
  allContents.forEach(item => {
    if (item !== content) {
      item.style.maxHeight = null;
    }
  });

  // 4. Otwórz tę, którą kliknąłeś
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
</script>