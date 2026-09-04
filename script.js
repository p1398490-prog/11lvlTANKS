const vehicles = [
  { name: 'КР-1', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'ИС-7', mechanic: 'Реактивная защита', color: '#526452', image: 'tank-kr-1.png' },
  { name: 'AMX 67 Imbattable', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'AMX 50 B', mechanic: 'Усиленный барабан', color: '#65736e', image: 'tank-amx-67-imbattable.png' },
  { name: 'FV4025 Contriver', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'FV230 Canopener', mechanic: 'Тактический режим', color: '#58655a', image: 'tank-fv4025-contriver.png' },
  { name: 'Taschenratte', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Maus', mechanic: 'Два тактических орудия', color: '#4b5b4c', image: 'tank-taschenratte.jpg', cardImage: 'tank-taschenratte.png' },
  { name: 'T803', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'T110E5', mechanic: 'Стабилизатор корпуса', color: '#65705f', image: 'tank-t803.png' },
  { name: 'BZ-79', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'BZ-75', mechanic: 'Улучшенный форсаж', color: '#59655c', image: 'tank-bz-79.png' },
  { name: 'Black Rock', type: 'heavy', role: 'Награда за ЛБЗ', ancestor: 'Особая машина', mechanic: 'Секретная конфигурация', color: '#343d37', image: 'tank-black-rock.png' },
  { name: 'Объект 432У', type: 'medium', role: 'Средний танк', ancestor: 'Объект 430У', mechanic: 'Адаптивная броня', color: '#5e6c60', image: 'tank-object-432u.png' },
  { name: 'Leopard 120 Verbessert', type: 'medium', role: 'Средний танк', ancestor: 'Leopard 1', mechanic: 'Точный выстрел', color: '#78816f', image: 'tank-leopard-120-verbessert.png' },
  { name: 'CS 67 Szakal', type: 'medium', role: 'Средний танк', ancestor: 'CS-63', mechanic: 'Динамика двигателя', color: '#6a7866', image: 'tank-cs-67-szakal.png' },
  { name: 'AS-XX 40 t', type: 'medium', role: 'Средний танк', ancestor: 'Bat.-Châtillon 25 t', mechanic: 'Расширенная перезарядка', color: '#67746d', image: 'tank-as-xx-40-t.png' },
  { name: 'XM69 Hacker', type: 'medium', role: 'Средний танк', ancestor: 'M48A5 Patton', mechanic: 'Сканирование уязвимостей', color: '#596b61', image: 'tank-xm69-hacker.png' },
  { name: 'Hirschkäfer', type: 'td', role: 'ПТ-САУ', ancestor: 'Grille 15', mechanic: 'Баллистический расчёт', color: '#4f5e52', image: 'tank-hirschkafer.png' },
  { name: 'Strv 107-12', type: 'td', role: 'ПТ-САУ', ancestor: 'Strv 103B', mechanic: 'Осадный протокол', color: '#647268', image: 'tank-strv-107-12.png' },
  { name: 'AT-FV230 Breaker', type: 'td', role: 'ПТ-САУ', ancestor: 'FV217 Badger', mechanic: 'Проламывающий снаряд', color: '#515e50', image: 'tank-at-fv230-breaker.png' },
  { name: 'LeKpz Borkenkäfer', type: 'light', role: 'Лёгкий танк', ancestor: 'Rheinmetall Panzerwagen', mechanic: 'Разведывательный импульс', color: '#73806c', image: 'tank-lekpz-borkenkafer.png' },
  { name: 'Vz. 63P', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Vz. 55', mechanic: 'Регулируемый взрыватель', color: '#5f6b5e', image: 'tank-vz-63p.png' },
  { name: 'BV-111', type: 'medium', role: 'Средний танк', ancestor: 'UDES 15/16', mechanic: 'Режим внешней подачи боеприпасов', color: '#69766b', image: 'tank-bv-111.png' },
  { name: 'CAV mod. 71', type: 'medium', role: 'Средний танк', ancestor: 'Progetto M40 mod. 65', mechanic: 'Механизм ускоренного заряжания', color: '#64736b', image: 'tank-cav-mod-71.png' },
  { name: 'WZ-219', type: 'light', role: 'Лёгкий танк', ancestor: 'WZ-132-1', mechanic: 'ИК-система поиска и слежения', color: '#73826c', image: 'tank-wz-219.png' },
  { name: 'Ho-Ri Shugo', type: 'td', role: 'ПТ-САУ', ancestor: 'Ho-Ri 3', mechanic: 'Спаренная ракетная установка', color: '#566458', image: 'tank-ho-ri-shugo.png' },
  { name: 'Gorilla', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'T110E4', mechanic: 'Многозарядная система заряжания', color: '#4e5d51', image: 'tank-gorilla.png' },
  { name: 'Fauteur', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'AMX M4 mle. 54', mechanic: 'Индукционный дожигатель заряда', color: '#617064', image: 'tank-fauteur.png' },
  { name: 'Executor', type: 'medium', role: 'Средний танк', ancestor: 'Concept No. 5', mechanic: 'Вспомогательный турбонагнетатель высокого давления', color: '#68776b', image: 'tank-executor.png' },
  { name: 'Pz.Kpfw. Neu', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Kpz. 67', mechanic: 'Система калибровки снаряда', color: '#59685d', image: 'tank-pzkpfw-neu.png' },
  { name: 'PTZ-78', type: 'td', role: 'ПТ-САУ', ancestor: 'WZ-113G FT', mechanic: 'Последовательные ракетные ускорители', color: '#526254', image: 'tank-ptz-78.png' },
  { name: 'STK-2', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Type 71', mechanic: 'Усовершенствованная система охлаждения орудия', color: '#59695c', image: 'tank-stk-2.png' },
  { name: 'Ares 90 C', type: 'medium', role: 'Средний танк', ancestor: 'Ares 90', mechanic: 'Автопушка с управлением нагревом', color: '#667568', image: 'tank-ares-90-c.png' },
  { name: 'Объект 279', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда первого сезона «Орбиты»', mechanic: 'Центробежный нагнетатель', color: '#596b5c', image: 'tank-object-279.png' },
  { name: 'BZT-70', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда первого сезона «Орбиты»', mechanic: 'Электромашинный усилитель', color: '#4f6154', image: 'tank-bzt-70.png' },
  { name: 'MBT-B', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда первого сезона «Орбиты»', mechanic: 'Электромагнитное реле', color: '#657664', image: 'tank-mbt-b.png' },
  { name: 'Champion', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда второго сезона «Орбиты»', mechanic: 'Бак охлаждающей жидкости', color: '#617263', image: 'tank-champion.png' },
  { name: 'ARL Projet F', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда второго сезона «Орбиты»', mechanic: 'Перераспределение мощности', color: '#536455', image: 'tank-arl-projet-f.png' },
  { name: 'Eisbär', type: 'heavy', role: 'Тяжёлый танк', ancestor: 'Награда второго сезона «Орбиты»', mechanic: 'Подогрев боеприпасов', color: '#6e7b6c', image: 'tank-eisbar.png' },
  { name: 'Mausekönig', type: 'heavy', role: 'Акционный тяжёлый танк', ancestor: 'Кампания ЛБЗ «Новые горизонты»', mechanic: 'Рекуператор отката', color: '#4f5f52', image: 'tank-mausekonig.png' }
];
const labels = { heavy: 'ТТ', medium: 'СТ', td: 'ПТ', light: 'ЛТ' };
const grid = document.querySelector('#vehicle-grid');
const search = document.querySelector('#search');
const emptyState = document.querySelector('#empty-state');
const previousButton = document.querySelector('#carousel-prev');
const nextButton = document.querySelector('#carousel-next');
let activeFilter = 'all';

function renderVehicles() {
  const query = search.value.trim().toLowerCase();
  const visible = vehicles.filter(vehicle => {
    const matchesFilter = activeFilter === 'all' || vehicle.type === activeFilter;
    const matchesSearch = [vehicle.name, vehicle.ancestor, vehicle.mechanic].some(value => value.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = visible.map((vehicle, index) => `
    <article class="vehicle-card" data-vehicle="${vehicle.name}" style="animation-delay: ${index * 35}ms">
      <div class="card-image" style="--vehicle-color: ${vehicle.color}">
        <img class="vehicle-image" src="assets/images/${vehicle.cardImage || vehicle.image}" alt="${vehicle.name}" onload="this.parentElement.classList.add('has-image')" onerror="this.hidden = true">
        <span class="image-note">IMAGE / ${vehicle.cardImage || vehicle.image}</span>
        <span class="class-tag">${labels[vehicle.type]} · XI</span>
      </div>
      <div class="card-info">
        <span class="card-role">${vehicle.role}</span>
        <h3>${vehicle.name}</h3>
        <p>${vehicle.mechanic}</p>
        <div class="card-meta"><span>Наследник</span><strong>${vehicle.ancestor}</strong></div>
      </div>
    </article>
  `).join('');
  emptyState.hidden = visible.length > 0;
}

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-button.active').classList.remove('active');
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    renderVehicles();
  });
});
search.addEventListener('input', renderVehicles);
previousButton.addEventListener('click', () => grid.scrollBy({ left: -grid.clientWidth * 0.82, behavior: 'smooth' }));
nextButton.addEventListener('click', () => grid.scrollBy({ left: grid.clientWidth * 0.82, behavior: 'smooth' }));
renderVehicles();
