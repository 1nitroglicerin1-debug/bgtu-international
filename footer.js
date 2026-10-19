/**
 * footer.js — Сквозной подвал сайта БГТУ (Центр международного сотрудничества)
 * Единый компонент: бренд, соцсети (VK, Telegram), навигация, копирайт.
 * Использование в HTML:
 *   <div id="footer-placeholder"></div>
 *   <script src="footer.js"></script>
 */
(function () {
  'use strict';

  var VK_URL = 'https://vk.com/tubryansk';
  var TG_URL = 'https://t.me/tubryansk';

  var html = ''
    + '<footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">'
    +   '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
    +     '<div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-gray-800 pb-8">'
    +       '<div class="flex flex-col md:flex-row gap-6 items-center">'
    +         '<div class="flex items-center gap-2">'
    +           '<div class="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white font-serif font-bold">Б</div>'
    +           '<span class="font-serif font-bold text-white tracking-tight">БГТУ</span>'
    +         '</div>'
    +         '<div class="text-sm text-center md:text-left leading-relaxed">Брянский государственный технический университет<br>Центр международного сотрудничества</div>'
    +       '</div>'
    +       '<div class="flex gap-4 text-xl">'
    +         '<a href="' + VK_URL + '" target="_blank" rel="noopener noreferrer" '
    +           'class="hover:!text-white transition-colors" aria-label="ВКонтакте" title="ВКонтакте">'
    +           '<i class="fab fa-vk"></i></a>'
    +         '<a href="' + TG_URL + '" target="_blank" rel="noopener noreferrer" '
    +           'class="hover:!text-white transition-colors" aria-label="Telegram" title="Telegram">'
    +           '<i class="fab fa-telegram"></i></a>'
    +       '</div>'
    +     '</div>'
    +     '<div class="text-sm text-center md:text-left flex flex-col md:flex-row justify-between">'
    +       '<span>© 2026 БГТУ. Все права защищены.</span>'
    +       '<div class="flex gap-4 mt-4 md:mt-0">'
    +         '<a href="history.html" class="hover:!text-white transition-colors">История университета</a>'
    +         '<a href="privacy.html" class="hover:!text-white transition-colors">Политика конфиденциальности</a>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    + '</footer>';

  var mount = document.getElementById('footer-placeholder');
  if (mount) mount.innerHTML = html;
})();
