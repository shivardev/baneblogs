(() => {
  const form = document.getElementById('movies-filters');
  const grid = document.getElementById('movies-grid');
  if (!form || !grid) return;

  const cards = [...grid.querySelectorAll('.movie-card')];
  const fields = {
    search: document.getElementById('movie-search'),
    kind: document.getElementById('movie-kind'),
    genre: document.getElementById('movie-genre'),
    language: document.getElementById('movie-language'),
    country: document.getElementById('movie-country'),
    year: document.getElementById('movie-year'),
    status: document.getElementById('movie-status'),
    rating: document.getElementById('movie-rating'),
    sort: document.getElementById('movie-sort'),
    recommended: document.getElementById('movie-recommended'),
  };
  const count = document.getElementById('movies-count');
  const empty = document.getElementById('movies-empty');
  const split = value => (value || '').split('|').map(item => item.trim()).filter(Boolean);
  const normalize = value => (value || '').toLocaleLowerCase();

  const fillOptions = (select, values, numeric = false) => {
    const options = [...new Set(values.filter(Boolean))].sort((a, b) => numeric ? Number(b) - Number(a) : a.localeCompare(b));
    for (const value of options) select.add(new Option(value, value));
  };
  fillOptions(fields.genre, cards.flatMap(card => split(card.dataset.genres)));
  fillOptions(fields.language, cards.flatMap(card => split(card.dataset.languages)));
  fillOptions(fields.country, cards.map(card => card.dataset.country));
  fillOptions(fields.year, cards.map(card => card.dataset.year), true);

  function update() {
    const query = normalize(fields.search.value.trim());
    const visible = cards.filter(card => {
      const data = card.dataset;
      return (!query || normalize(`${data.title} ${data.description} ${data.genres} ${data.languages} ${data.country || ''}`).includes(query)) &&
        (!fields.kind.value || data.kind === fields.kind.value) &&
        (!fields.genre.value || split(data.genres).includes(fields.genre.value)) &&
        (!fields.language.value || split(data.languages).includes(fields.language.value)) &&
        (!fields.country.value || data.country === fields.country.value) &&
        (!fields.year.value || data.year === fields.year.value) &&
        (!fields.status.value || data.status === fields.status.value) &&
        (!fields.rating.value || Number(data.rating) >= Number(fields.rating.value)) &&
        (!fields.recommended.checked || data.recommended === 'true');
    });
    const sort = fields.sort.value;
    visible.sort((a, b) => {
      const x = a.dataset, y = b.dataset;
      if (sort === 'year-desc') return Number(y.year || 0) - Number(x.year || 0) || x.title.localeCompare(y.title);
      if (sort === 'year-asc') return Number(x.year || 9999) - Number(y.year || 9999) || x.title.localeCompare(y.title);
      if (sort === 'rating-desc') return Number(y.rating || -1) - Number(x.rating || -1) || x.title.localeCompare(y.title);
      if (sort === 'watched-desc') return (y.watched || '').localeCompare(x.watched || '') || x.title.localeCompare(y.title);
      if (sort === 'title-desc') return y.title.localeCompare(x.title);
      return x.title.localeCompare(y.title);
    });
    cards.forEach(card => { card.hidden = true; });
    visible.forEach(card => { card.hidden = false; grid.append(card); });
    count.textContent = `${visible.length} ${visible.length === 1 ? 'title' : 'titles'} shown`;
    empty.hidden = visible.length !== 0;
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('reset', () => requestAnimationFrame(update));
  update();
})();
