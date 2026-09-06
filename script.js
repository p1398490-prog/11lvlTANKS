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
const historicalData = {
  'КР-1': ['СССР', 'Дата не установлена', 'Кировец-2, Объекты 263/3 и 259', 'Собирательный образ советского тяжёлого танка', 'В видео КР-1 названа собирательным образом советских тяжёлых танков, а не конкретным историческим проектом. Корпус напоминает Кировец-2, башня объединяет черты Объектов 263/3 и 259, но внешняя подвеска признана выдумкой.'],
  'AMX 67 Imbattable': ['Франция', '1957', 'AMX 50 B', 'Манёвренный тяжёлый танк', 'Французская идея быстрой тяжёлой машины получила развитие в виде усиленного барабана.'],
  'FV4025 Contriver': ['Великобритания', '1962', 'FV230 Canopener', 'Универсальная платформа', 'Британская конструкторская линия соединила защищённость с гибкой тактикой применения орудия.'],
  'Taschenratte': ['Германия', 'Дата не установлена', 'Предмассовые проекты Maus', 'Полностью выдуманная машина', 'В ролике машина названа полностью выдуманной. Единственная заметная историческая отсылка — элементы подвески, похожие на решения предмассовых проектов.'],
  'T803': ['США', '1967–1972', 'MBT-70 / XM803', 'Полуисторичное развитие MBT-70', 'По ролику, T-803 полуисторичен: индекс отсылает к XM803, дальнейшему развитию MBT-70 после выхода Германии из проекта. От исторической основы в игре в основном остались название и общая компоновка.'],
  'BZ-79': ['Китай', 'Дата не установлена', 'WZ113 и отдельные визуальные отсылки', 'Полностью выдуманный тяжёлый танк', 'Видео прямо называет BZ-79 полностью выдуманным. Внешность смешивает башню в духе Abrams, элементы Leopard и корпус с отсылкой к KZ113, а ракетные ускорители признаны неисторичными.'],
  'Black Rock': ['Международный проект', '1988', 'Особая машина', 'Экспериментальная броня', 'Условный проект закрытой программы с многослойной бронёй и модульной компоновкой.'],
  'Объект 432У': ['СССР', '1964', 'Объект 430У', 'Средний танк нового поколения', 'Советская школа искала баланс низкого силуэта и огневой мощи через адаптивную защиту.'],
  'Leopard 120 Verbessert': ['Германия', 'Конец холодной войны — 2002', 'Leopard 1A1 / 1A4 и Leopard 2K', 'Модернизация Leopard 1 с 120-мм орудием', 'По ролику, машина близка к проекту Leopard 120: промежуточная идея между Leopard 1A4 и 2K. Установка 120-мм орудия на Leopard 1 действительно прорабатывалась, включая вариант с RH120 L44.'],
  'CS 67 Szakal': ['Польша', 'Дата не установлена', 'Советские и польские инженерные решения', 'Собирательный образ', 'В видео машина названа полностью неисторичной. Внешние детали напоминают отдельные решения советских танков, но подтверждённого прототипа автор не отмечает.'],
  'AS-XX 40 t': ['Франция', '1952–1953', 'AS52', 'Проект перед Leclerc', 'В ролике AS-XX 40 t связывается с реальным французским проектом AS52, одним из предшественников Leclerc. У AS52 был сменный боекомплект, размещённый в корме барабанами.'],
  'XM69 Hacker': ['США', 'Дата не установлена', 'XM803 / KСМ1 — только визуальные отсылки', 'Полностью выдуманная башня', 'Видео называет XM69 Hacker выдуманной машиной: башня неисторична, а корпус лишь номинально напоминает KСМ1 и американские проекты.'],
  'Hirschkäfer': ['Германия', 'Дата проекта не установлена', 'Немецкий проект на расширенном корпусе «Пумы»', 'Почти историчная ПТ-САУ', 'В ролике Hirschkäfer названа почти историчной. За основу взят существовавший концепт, визуально переработанный и расширенный для размещения экипажа и автомата заряжания.'],
  'Strv 107-12': ['Швеция', 'Дата проекта не установлена', 'Проект на базе UDES', 'Безбашенная машина с кормовым боекомплектом', 'По ролику, это вполне реальный шведский проект на базе UDES: машина напоминала Strv 103, имела орудие 105–120 мм, массу около 25–30 тонн и дополнительный боекомплект в корме.'],
  'AT-FV230 Breaker': ['Великобритания', '1950', 'FV217 Badger', 'Штурмовая ПТ-САУ', 'Британские противотанковые проекты делали ставку на лобовую броню и скорострельность.'],
  'LeKpz Borkenkäfer': ['Германия', '1973', 'Rheinmetall Panzerwagen', 'Разведывательная машина', 'Лёгкая платформа объединяет немецкую оптику с импульсной разведкой впереди группы.'],
  'Vz. 63P': ['Чехословакия', '1963', 'Vz. 55', 'Тяжёлый танк огневой поддержки', 'Чехословацкая линия сочетала компактность и мощное вооружение с гибким взрывателем.'],
  'BV-111': ['Швеция', '1981', 'UDES 15/16', 'Адаптивный средний танк', 'Проект опирается на шведские идеи подвески и смены темпа боя без потери мобильности.'],
  'CAV mod. 71': ['Италия', '1971', 'Progetto M40 mod. 65', 'Автомат заряжания', 'Итальянская традиция экспериментальных механизмов превращена в короткие серии выстрелов.'],
  'WZ-219': ['Китай', '1970', 'WZ-132-1', 'Активная разведка', 'Китайская лёгкая машина использует компактность и инфракрасный поиск для раннего обнаружения.'],
  'Ho-Ri Shugo': ['Япония', '1945', 'Ho-Ri 3', 'Противотанковый резерв', 'Японская ветка Ho-Ri получила ракетную установку для усиления первого залпа.'],
  'Gorilla': ['США', '1968', 'T110E4', 'Тяжёлая огневая мощь', 'Американский проект сохраняет идею мощной ПТ-САУ и дольше удерживает давление на направлении.'],
  'Fauteur': ['Франция', '1954', 'AMX M4 mle. 54', 'Штурмовой тяжёлый танк', 'Французская концепция тяжёлого танка получила оружие для агрессивных ближних разменов.'],
  'Executor': ['Великобритания', '2010', 'Concept No. 5', 'Быстрый средний танк', 'Современная британская идея высокой подвижности дополнена турбонаддувом.'],
  'Pz.Kpfw. Neu': ['Германия', '1967', 'Kpz. 67', 'Технологичный тяжёлый танк', 'Немецкая точность соединена с системой калибровки снаряда и расчётливой тактикой.'],
  'PTZ-78': ['Китай', '1978', 'WZ-113G FT', 'Ракетная ПТ-САУ', 'Концепция противотанковой машины с последовательным ускорением боеприпасов.'],
  'STK-2': ['Япония', '1971', 'Type 71', 'Тяжёлый танк удержания', 'Японская линия делает акцент на контроле температуры орудия в затяжном бою.'],
  'Ares 90 C': ['Италия', '1990', 'Ares 90', 'Средний танк поддержки', 'Итальянский проект превращает управление нагревом автопушки в отдельный тактический ресурс.'],
  'Объект 279': ['СССР', '1959', 'Опытный Объект 279', 'Танк прорыва', 'В ролике Объект 279 назван полностью историчной машиной. В реальности это советский опытный тяжёлый танк, созданный для преодоления зон разрушения и ядерного поля боя.'],
  'BZT-70': ['СССР / США', '1962–1968', 'MBT-70 / XM803', 'Историчная база с игровым переосмыслением', 'В ролике BZT-70 упомянут рядом с MBT-B как историчная основа линейки. Название отсылает к MBT-70 — совместному германо-американскому проекту, из которого вырос американский XM803.'],
  'MBT-B': ['США / Германия', '1962–1968', 'MBT-70', 'Основной боевой танк нового поколения', 'Видео называет MBT-B полностью историчной машиной и связывает её с реальным совместным проектом MBT-70, который продолжался в американском XM803 после выхода Германии из программы.'],
  'Champion': ['Великобритания', '1984', 'Экспериментальная платформа', 'Танк длительного боя', 'Проект делает ставку на выносливость систем и эффективное охлаждение.'],
  'ARL Projet F': ['Франция', '1946', 'ARL 44', 'Тяжёлая платформа', 'После войны французские конструкторы искали собственный путь к тяжёлому танку.'],
  'Eisbär': ['Германия', '1952', 'Экспериментальные тяжёлые танки', 'Танк северного театра', 'Образ связан с эксплуатацией техники в холодном климате и подготовкой боеприпасов.'],
  'Mausekönig': ['Германия', '1946', 'Maus', 'Сверхтяжёлый акционный танк', '«Королевский Маус» развивает идею сверхтяжёлой брони и использует откат как ресурс.']
};
Object.entries(historicalData).forEach(([name, data]) => {
  const vehicle = vehicles.find(item => item.name === name);
  Object.assign(vehicle, { country: data[0], year: data[1], prototype: data[2], design: data[3], history: data[4] });
});
const labels = { heavy: 'ТТ', medium: 'СТ', td: 'ПТ', light: 'ЛТ' };
const favoriteKey = 'xi-tanks-favorites';
const favorites = new Set(JSON.parse(localStorage.getItem(favoriteKey) || '[]'));
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
      <a class="card-link" href="tank.html?name=${encodeURIComponent(vehicle.name)}" aria-label="Открыть страницу танка ${vehicle.name}">
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
      </a>
      <div class="card-actions">
        <button class="favorite-button ${favorites.has(vehicle.name) ? 'active' : ''}" type="button" data-favorite="${vehicle.name}" aria-label="${favorites.has(vehicle.name) ? 'Убрать из избранного' : 'Добавить в избранное'}">★</button>
      </div>
    </article>
  `).join('');
  emptyState.hidden = visible.length > 0;
  grid.querySelectorAll('[data-favorite]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    const name = button.dataset.favorite;
    favorites.has(name) ? favorites.delete(name) : favorites.add(name);
    localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
    renderVehicles();
  }));
}

if (grid) {
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
}

const detail = document.querySelector('#tank-detail');
if (detail) {
  const requestedName = new URLSearchParams(window.location.search).get('name');
  const vehicle = vehicles.find(item => item.name === requestedName) || vehicles[0];
  const historicalContext = `${vehicle.history} Предшественник этой машины — ${vehicle.prototype}; игровая концепция продолжает эту инженерную линию через механику «${vehicle.mechanic.toLowerCase()}».`;

  document.title = `${vehicle.name} — Предел техники`;
  detail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-visual" style="--vehicle-color: ${vehicle.color}">
        <img src="assets/images/${vehicle.cardImage || vehicle.image}" alt="${vehicle.name}" onload="this.parentElement.classList.add('has-image')" onerror="this.hidden = true">
        <span class="class-tag">${labels[vehicle.type]} · XI</span>
        <span class="image-note">IMAGE / ${vehicle.cardImage || vehicle.image}</span>
      </div>
      <div class="detail-heading">
        <p class="eyebrow"><span></span> Карточка машины / XI уровень</p>
        <h1>${vehicle.name}</h1>
        <p class="detail-lead">${vehicle.role} с уникальной специализацией: ${vehicle.mechanic.toLowerCase()}.</p>
        <div class="detail-actions">
          <a class="button button-primary" href="index.html#catalog">Вернуться в каталог <span>↗</span></a>
          <a class="button button-quiet" href="https://www.youtube.com/watch?v=AlFilU3aKOE" target="_blank" rel="noreferrer">Источник: видео <span>↗</span></a>
        </div>
      </div>
    </div>
    <div class="detail-columns">
      <section class="detail-panel">
        <p class="section-label">01 / Профиль</p>
        <h2>Что важно<br><span>в бою</span></h2>
        <p>Эта машина раскрывается через свою основную роль — ${vehicle.role.toLowerCase()}. Планируйте позицию от сильной стороны и включайте особую механику «${vehicle.mechanic.toLowerCase()}» в момент, когда она меняет исход размена.</p>
        <div class="spec-list"><div><span>Роль</span><b>${vehicle.role}</b></div><div><span>Уникальная механика</span><b>${vehicle.mechanic}</b></div><div><span>Наследник</span><b>${vehicle.ancestor}</b></div></div>
      </section>
      <section class="detail-history">
        <p class="section-label">02 / Историческая справка</p>
        <h2>Откуда<br><span>растут гусеницы</span></h2>
        <p>${historicalContext}</p>
        <div class="history-facts"><div><span>Страна</span><b>${vehicle.country}</b></div><div><span>Период проекта</span><b>${vehicle.year}</b></div><div><span>Конструкторская идея</span><b>${vehicle.design}</b></div></div>
        <div class="history-quote">«Каждая новая машина — это не отказ от прошлого, а следующий ответ на вопрос о том, каким должен быть танк».</div>
      </section>
    </div>
  `;
}
