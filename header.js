/**
 * header.js — Сквозная шапка сайта БГТУ (Центр международного сотрудничества)
 * Единый компонент: навигация, mega-menu, мобильное меню, поиск с фильтрацией.
 * Использование в HTML:
 *   <div id="header-placeholder"></div>
 *   <script src="header.js" data-page="index.html"></script>
 */
(function () {
  'use strict';

  var PAGES = [
    { url: 'index.html',           title: 'Главная',                       desc: 'Главная страница Центра международного сотрудничества БГТУ' },
    { url: 'history.html',         title: 'История университета',           desc: 'История Брянского государственного технического университета с 1929 года' },
    { url: 'admission-steps.html', title: 'Как поступить (алгоритм)',       desc: 'Пошаговая инструкция по поступлению в БГТУ для иностранцев' },
    { url: 'admission-rules.html', title: 'Правила приёма',                 desc: 'Правила и сроки приёма иностранных граждан в БГТУ' },
    { url: 'documents.html',       title: 'Требования к документам',        desc: 'Список документов для поступления в БГТУ' },
    { url: 'programs.html',        title: 'Программы обучения',             desc: 'Направления подготовки: IT, машиностроение, энергетика, экономика' },
    { url: 'tuition.html',         title: 'Стоимость обучения',             desc: 'Цены и стоимость обучения в БГТУ для иностранных студентов' },
    { url: 'russian-courses.html', title: 'Курсы русского языка',          desc: 'Курсы дополнительного обучения «Русский язык» для иностранцев' },
    { url: 'invitation.html',      title: 'Оформление приглашения',         desc: 'Как получить официальное приглашение на учёбу в БГТУ' },
    { url: 'visa-process.html',    title: 'Получение учебной визы',         desc: 'Процедура получения учебной визы в Россию' },
    { url: 'migration-rules.html', title: 'Миграционный учёт',              desc: 'Постановка на миграционный учёт после прибытия в РФ' },
    { url: 'med-insurance.html',   title: 'Медицинская страховка (ДМС)',   desc: 'Оформление добровольного медицинского страхования для студентов' },
    { url: 'med-exam.html',        title: 'Медосмотр и дактилоскопия',     desc: 'Медицинский осмотр и дактилоскопия для иностранных граждан' },
    { url: 'campus.html',          title: 'Общежитие БГТУ',                desc: 'Общежитие Брянского государственного технического университета' },
    { url: 'rules-campus.html',    title: 'Правила проживания',             desc: 'Правила проживания в общежитиях БГТУ' },
    { url: 'living-costs.html',    title: 'Цены и расходы в Брянске',       desc: 'Бюджет студента: цены на еду, транспорт и проживание в Брянске' },
    { url: 'city-guide.html',      title: 'Гид по Брянску',                 desc: 'Информация о городе Брянске для иностранных студентов' },
    { url: 'student-club.html',    title: 'Клуб интернациональной дружбы',  desc: 'Союз БГТУ: клуб интернациональной дружбы, мероприятия и адаптация' },
    { url: 'security.html',        title: 'Безопасность',                   desc: 'Правила безопасности и законы РФ для иностранных студентов' },
    { url: 'testimonials.html',    title: 'Отзывы студентов',               desc: 'Отзывы иностранных студентов об учёбе в БГТУ' },
    { url: 'contacts.html',        title: 'Контакты',                       desc: 'Контактные данные Центра международного сотрудничества БГТУ' },
    { url: 'privacy.html',         title: 'Политика конфиденциальности',    desc: 'Политика обработки персональных данных сайта БГТУ' }
  ];

  var VK_URL   = 'https://vk.com/soyuz_bstu';
  var TG_URL   = 'https://t.me/+79038681211';
  var WA_URL   = 'https://wa.me/79038681211';
  var MAIL_URL = 'mailto:mobstu@bk.ru';
  var TEL_URL  = 'tel:+79038681211';

  function buildHeaderHTML() {
    var h = '';
    h += '<header class="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md">';
    h += '  <div class="bg-gray-100 border-b border-gray-200 py-1 hidden lg:block text-xs text-gray-600">';
    h += '    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">';
    h += '      <div class="flex space-x-6 font-medium">';
    h += '        <a href="' + MAIL_URL + '" class="hover:text-brand-blue transition-colors flex items-center gap-1"><i class="fas fa-envelope text-gray-400"></i> mobstu@bk.ru</a>';
    h += '        <a href="' + TEL_URL + '" class="hover:text-brand-blue transition-colors flex items-center gap-1"><i class="fas fa-phone-alt text-gray-400"></i> +7 (903) 868-12-11</a>';
    h += '        <span class="flex items-center gap-1 text-gray-500"><i class="far fa-clock text-gray-400"></i> Пн-Пт 10:00 - 16:00 (МСК)</span>';
    h += '      </div>';
    h += '      <div class="flex items-center space-x-4">';
    h += '        <a href="#" class="!text-gray-600 hover:!text-brand-blue flex items-center gap-1 transition-colors"><i class="fas fa-eye"></i> Версия для слабовидящих</a>';
    h += '        <div class="flex items-center gap-2 border-l border-gray-300 pl-4">';
    h += '          <a href="index.html" class="font-bold !text-brand-blue underline decoration-2 underline-offset-4">RU</a>';
    h += '          <a href="en.html" class="!text-gray-500 hover:!text-brand-blue transition-colors">EN</a>';
    h += '          <a href="fr.html" class="!text-gray-500 hover:!text-brand-blue transition-colors">FR</a>';
    h += '        </div>';
    h += '      </div>';
    h += '    </div>';
    h += '  </div>';
    h += '  <div class="border-b border-gray-100 bg-white relative z-20">';
    h += '    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">';
    h += '      <div class="flex justify-between items-center h-20 md:h-24">';
    h += '        <a href="index.html" class="flex-shrink-0 flex items-center gap-4 cursor-pointer">';
    h += '          <div class="w-12 h-12 bg-brand-blue rounded flex items-center justify-center text-white font-serif font-bold text-2xl shadow-inner">Б</div>';
    h += '          <div class="flex flex-col">';
    h += '            <span class="font-serif font-bold text-xl md:text-2xl leading-none text-brand-blue tracking-tight">БГТУ | International</span>';
    h += '            <span class="text-[11px] uppercase tracking-widest text-gray-500 font-medium mt-1">Центр международного<br>сотрудничества</span>';
    h += '          </div>';
    h += '        </a>';
    h += '        <div class="hidden md:flex items-center space-x-6">';
    h += '          <div class="relative">';
    h += '            <input type="text" id="site-search" placeholder="Поиск по сайту..." class="bg-gray-100 border border-gray-200 text-sm rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:border-brand-blue transition-colors" autocomplete="off">';
    h += '            <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-blue"><i class="fas fa-search"></i></button>';
    h += '            <div id="search-results" class="hidden absolute top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 max-h-80 overflow-y-auto z-[200]"></div>';
    h += '          </div>';
    h += '          <a href="contacts.html" class="bg-brand-accent text-brand-blue px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all shadow-md uppercase tracking-wider flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-brand-blue/40 animate-pulse"></span>Поступить</a>';
    h += '        </div>';
    h += '        <div class="lg:hidden flex items-center gap-4">';
    h += '          <div class="flex gap-2">';
    h += '            <a href="index.html" class="text-xs font-bold !text-brand-blue">RU</a>';
    h += '            <a href="en.html" class="text-xs !text-gray-500">EN</a>';
    h += '            <a href="fr.html" class="text-xs !text-gray-500">FR</a>';
    h += '          </div>';
    h += '          <button type="button" id="mobile-menu-btn" class="text-brand-blue hover:text-brand-accent focus:outline-none p-2 bg-gray-100 rounded"><i class="fas fa-bars text-2xl"></i></button>';
    h += '        </div>';
    h += '      </div>';
    h += '    </div>';
    h += '  </div>';
    h += '  <div class="bg-brand-blue text-white hidden lg:block relative">';
    h += '    <div class="max-w-7xl mx-auto px-4">';
    h += '      <nav class="flex justify-between items-center h-14 text-sm font-medium uppercase tracking-wider">';
    h += '        <div class="nav-item h-full flex items-center cursor-pointer hover:bg-blue-900 px-3 transition-colors border-b-4 border-transparent hover:border-brand-accent">';
    h += '          <span>Поступление <i class="fas fa-chevron-down ml-1 text-[10px]"></i></span>';
    h += '          <div class="mega-menu-content cursor-default"><div class="mega-menu-inner">';
    h += '            <div class="mega-menu-column"><h4>Шаги для поступления</h4><ul>';
    h += '              <li><a href="admission-steps.html"><i class="fas fa-angle-right"></i> Как поступить (Алгоритм)</a></li>';
    h += '              <li><a href="admission-rules.html"><i class="fas fa-angle-right"></i> Правила приема</a></li>';
    h += '              <li><a href="documents.html"><i class="fas fa-angle-right"></i> Требования к документам</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column"><h4>Программы и цены</h4><ul>';
    h += '              <li><a href="programs.html"><i class="fas fa-angle-right"></i> Доступные направления</a></li>';
    h += '              <li><a href="tuition.html"><i class="fas fa-angle-right"></i> Стоимость обучения</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column col-span-2 bg-gray-50 p-6 rounded-lg ml-4">';
    h += '              <h4 class="flex items-center gap-2 !mb-2 !border-none !pb-0"><i class="fas fa-clipboard-check text-brand-blue"></i> Начать процесс</h4>';
    h += '              <p class="text-sm text-gray-600 mb-4 normal-case">Оставьте заявку, и наши специалисты свяжутся с вами для консультации по документам.</p>';
    h += '              <a href="contacts.html" class="inline-block bg-brand-accent !text-brand-blue px-4 py-2 rounded font-bold text-sm hover:bg-yellow-500 transition-colors">Подать заявку онлайн</a>';
    h += '            </div>';
    h += '          </div></div>';
    h += '        </div>';
    h += '        <div class="nav-item h-full flex items-center hover:bg-blue-900 px-3 transition-colors border-b-4 border-transparent hover:border-brand-accent">';
    h += '          <a href="russian-courses.html" class="text-white hover:!text-white flex items-center w-full h-full">Курсы «Русский язык»</a>';
    h += '        </div>';
    h += '        <div class="nav-item h-full flex items-center cursor-pointer hover:bg-blue-900 px-3 transition-colors border-b-4 border-transparent hover:border-brand-accent">';
    h += '          <span>Виза и Миграция <i class="fas fa-chevron-down ml-1 text-[10px]"></i></span>';
    h += '          <div class="mega-menu-content cursor-default"><div class="mega-menu-inner">';
    h += '            <div class="mega-menu-column"><h4>До въезда в РФ</h4><ul>';
    h += '              <li><a href="invitation.html"><i class="fas fa-envelope-open-text text-brand-blue"></i> Оформление приглашения</a></li>';
    h += '              <li><a href="visa-process.html"><i class="fas fa-passport text-brand-blue"></i> Получение учебной визы</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column"><h4>По прибытии</h4><ul>';
    h += '              <li><a href="migration-rules.html"><i class="fas fa-file-signature text-brand-blue"></i> Миграционный учет</a></li>';
    h += '              <li><a href="med-insurance.html"><i class="fas fa-notes-medical text-brand-blue"></i> Медицинская страховка (ДМС)</a></li>';
    h += '              <li><a href="med-exam.html"><i class="fas fa-stethoscope text-brand-blue"></i> Медосмотр и дактилоскопия</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column col-span-2"><div class="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded">';
    h += '              <h4 class="!text-red-700 !border-none !mb-1 !pb-0"><i class="fas fa-exclamation-triangle"></i> Важно</h4>';
    h += '              <p class="text-sm text-red-900 normal-case mb-2">Нарушение миграционных правил ведет к штрафам и депортации. Встаньте на учет в течение 3 дней после въезда.</p>';
    h += '              <a href="contacts.html" class="text-xs font-bold !text-red-700 underline">Контакты визового отдела</a>';
    h += '            </div></div>';
    h += '          </div></div>';
    h += '        </div>';
    h += '        <div class="nav-item h-full flex items-center cursor-pointer hover:bg-blue-900 px-3 transition-colors border-b-4 border-transparent hover:border-brand-accent">';
    h += '          <span>Жизнь студента <i class="fas fa-chevron-down ml-1 text-[10px]"></i></span>';
    h += '          <div class="mega-menu-content cursor-default"><div class="mega-menu-inner">';
    h += '            <div class="mega-menu-column border-r border-gray-100 pr-4"><h4 class="!text-brand-accent">Проживание</h4><ul>';
    h += '              <li><a href="campus.html"><i class="fas fa-bed text-brand-blue"></i> Общежития БГТУ</a></li>';
    h += '              <li><a href="rules-campus.html"><i class="fas fa-clipboard-list text-brand-blue"></i> Правила проживания</a></li>';
    h += '              <li><a href="living-costs.html"><i class="fas fa-wallet text-brand-blue"></i> Цены и расходы в Брянске</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column pl-4"><h4>Адаптация</h4><ul>';
    h += '              <li><a href="city-guide.html"><i class="fas fa-city text-brand-blue"></i> Гид по Брянску</a></li>';
    h += '              <li><a href="student-club.html"><i class="fas fa-users text-brand-blue"></i> Клуб иностранных студентов</a></li>';
    h += '              <li><a href="security.html"><i class="fas fa-shield-alt text-brand-blue"></i> Безопасность</a></li>';
    h += '            </ul></div>';
    h += '            <div class="mega-menu-column col-span-2">';
    h += '              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=300&q=80" alt="Student Life" class="rounded-lg shadow-sm w-full h-40 object-cover mb-4">';
    h += '              <p class="text-sm text-gray-600 normal-case">Мы помогаем иностранным студентам быстрее адаптироваться в России и найти новых друзей.</p>';
    h += '            </div>';
    h += '          </div></div>';
    h += '        </div>';
    h += '        <div class="nav-item h-full flex items-center cursor-pointer hover:bg-blue-900 px-3 transition-colors border-b-4 border-transparent hover:border-brand-accent">';
    h += '          <a href="contacts.html" class="text-white hover:!text-white">Контакты</a>';
    h += '        </div>';
    h += '      </nav>';
    h += '    </div>';
    h += '  </div>';
    h += '  <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full z-50 max-h-[80vh] overflow-y-auto">';
    h += '    <div class="bg-gray-50 flex items-center justify-between px-4 py-3 border-b border-gray-200">';
    h += '      <span class="text-xs font-bold uppercase tracking-wider !text-brand-blue">Меню абитуриента</span>';
    h += '      <a href="' + TEL_URL + '" class="text-brand-accent"><i class="fas fa-phone-alt"></i></a>';
    h += '    </div>';
    h += '    <div class="px-4 pb-6 space-y-1 mt-2">';
    h += '      <a href="index.html" class="block px-3 py-3 text-base font-bold !text-brand-blue border-b border-gray-100">Главная</a>';
    h += '      <div><button type="button" class="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-3 text-base !text-gray-800 border-b border-gray-100 focus:outline-none"><span>Поступление</span><i class="fas fa-chevron-down text-xs transition-transform duration-200"></i></button>';
    h += '        <div class="mobile-dropdown-content hidden bg-gray-50 px-4 py-2 space-y-2">';
    h += '          <a href="admission-steps.html" class="block py-2 text-sm text-gray-600">Как поступить (Алгоритм)</a>';
    h += '          <a href="admission-rules.html" class="block py-2 text-sm text-gray-600">Правила приема</a>';
    h += '          <a href="documents.html" class="block py-2 text-sm text-gray-600">Требования к документам</a>';
    h += '          <a href="programs.html" class="block py-2 text-sm text-gray-600">Доступные направления</a>';
    h += '          <a href="tuition.html" class="block py-2 text-sm text-gray-600">Стоимость обучения</a>';
    h += '        </div>';
    h += '      </div>';
    h += '      <a href="russian-courses.html" class="block px-3 py-3 text-base font-bold !text-brand-blue border-b border-gray-100">Курсы «Русский язык»</a>';
    h += '      <div><button type="button" class="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-3 text-base !text-gray-800 border-b border-gray-100 focus:outline-none"><span>Виза и Миграция</span><i class="fas fa-chevron-down text-xs transition-transform duration-200"></i></button>';
    h += '        <div class="mobile-dropdown-content hidden bg-gray-50 px-4 py-2 space-y-2">';
    h += '          <a href="invitation.html" class="block py-2 text-sm text-gray-600">Оформление приглашения</a>';
    h += '          <a href="visa-process.html" class="block py-2 text-sm text-gray-600">Получение учебной визы</a>';
    h += '          <a href="migration-rules.html" class="block py-2 text-sm text-gray-600">Миграционный учет</a>';
    h += '          <a href="med-insurance.html" class="block py-2 text-sm text-gray-600">Медицинская страховка</a>';
    h += '          <a href="med-exam.html" class="block py-2 text-sm text-gray-600">Медосмотр и дактилоскопия</a>';
    h += '        </div>';
    h += '      </div>';
    h += '      <div><button type="button" class="mobile-dropdown-btn w-full flex justify-between items-center px-3 py-3 text-base !text-gray-800 border-b border-gray-100 focus:outline-none"><span>Проживание и жизнь</span><i class="fas fa-chevron-down text-xs transition-transform duration-200"></i></button>';
    h += '        <div class="mobile-dropdown-content hidden bg-gray-50 px-4 py-2 space-y-2">';
    h += '          <a href="campus.html" class="block py-2 text-sm text-gray-600">Общежития БГТУ</a>';
    h += '          <a href="rules-campus.html" class="block py-2 text-sm text-gray-600">Правила проживания</a>';
    h += '          <a href="living-costs.html" class="block py-2 text-sm text-gray-600">Цены и расходы в Брянске</a>';
    h += '          <a href="city-guide.html" class="block py-2 text-sm text-gray-600">Гид по Брянску</a>';
    h += '          <a href="student-club.html" class="block py-2 text-sm text-gray-600">Клуб иностранных студентов</a>';
    h += '          <a href="security.html" class="block py-2 text-sm text-gray-600">Безопасность</a>';
    h += '        </div>';
    h += '      </div>';
    h += '      <a href="contacts.html" class="block px-3 py-3 text-base !text-gray-800 border-b border-gray-100">Контакты</a>';
    h += '    </div>';
    h += '  </div>';
    h += '</header>';
    return h;
  }

  var mount = document.getElementById('header-placeholder');
  if (!mount) return;

  mount.innerHTML = buildHeaderHTML();

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('hidden');
    });
  }

  var dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
  dropdownBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var content = this.nextElementSibling;
      if (content) content.classList.toggle('hidden');
      var icon = this.querySelector('.fa-chevron-down') || this.querySelector('.fa-chevron-up');
      if (icon) icon.classList.toggle('rotate-180');
    });
  });

  var searchInput = document.getElementById('site-search');
  var searchResults = document.getElementById('search-results');

  if (searchInput && searchResults) {
    function renderResults(query) {
      query = query.trim().toLowerCase();
      if (!query) { searchResults.classList.add('hidden'); return; }
      var matches = PAGES.filter(function (p) {
        return p.title.toLowerCase().indexOf(query) !== -1
            || p.desc.toLowerCase().indexOf(query) !== -1
            || p.url.toLowerCase().indexOf(query) !== -1;
      });
      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="px-4 py-6 text-center text-sm text-gray-400"><i class="fas fa-search-minus text-2xl mb-2 block"></i>Ничего не найдено</div>';
      } else {
        searchResults.innerHTML = matches.map(function (p) {
          return '<a href="' + p.url + '" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">'
            + '<div class="w-8 h-8 bg-brand-blue/10 rounded flex items-center justify-center flex-shrink-0"><i class="fas fa-file-alt text-brand-blue text-xs"></i></div>'
            + '<div class="min-w-0"><div class="text-sm font-bold text-gray-800 truncate">' + p.title + '</div>'
            + '<div class="text-xs text-gray-400 truncate">' + p.desc + '</div></div></a>';
        }).join('');
      }
      searchResults.classList.remove('hidden');
    }
    searchInput.addEventListener('input', function () { renderResults(this.value); });
    searchInput.addEventListener('focus', function () { if (this.value.trim()) renderResults(this.value); });
    document.addEventListener('click', function (e) {
      if (!searchResults.contains(e.target) && e.target !== searchInput) searchResults.classList.add('hidden');
    });
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var first = searchResults.querySelector('a'); if (first) window.location.href = first.href; }
      if (e.key === 'Escape') { searchResults.classList.add('hidden'); searchInput.blur(); }
    });
  }
})();