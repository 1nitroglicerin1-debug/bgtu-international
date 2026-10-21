/**
 * footer.js — Сквозной подвал сайта БГТУ (Центр международного сотрудничества)
 * Единый компонент: бренд, соцсети (VK, Telegram), навигация, копирайт.
 * Использование в HTML:
 *   <div id="footer-placeholder"></div>
 *   <script src="footer.js"></script>
 */
(function () {
  'use strict';

  var VK_URL = 'https://vk.com/soyuz_bstu';
  var TG_URL = 'https://t.me/+79038681211';

  var html = ''
    + '<footer class="bg-gray-900 text-gray-400 py-12 border-t-4 border-brand-accent">'
    +   '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
    +     '<div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-gray-800 pb-8">'
    +       '<div class="flex flex-col md:flex-row gap-6 items-center">'
    +         '<div class="flex items-center gap-2">'
    +           '<img src="/images/bgtu-logo.png" alt="БГТУ" class="w-10 h-10 rounded-full object-contain">'
    +           '<span class="font-serif font-bold text-white tracking-tight">БГТУ</span>'
    +         '</div>'
    +         '<div class="text-sm text-center md:text-left leading-relaxed">Брянский государственный технический университет<br>Центр международного сотрудничества</div>'
    +       '</div>'
    +       '<div class="flex gap-4">'
    +         '<a href="' + VK_URL + '" target="_blank" rel="noopener noreferrer" '
    +           'class="w-11 h-11 rounded-full flex items-center justify-center text-[#0077FF] bg-[#0077FF]/15 hover:bg-[#0077FF] hover:text-white hover:-translate-y-1 transition-all shadow" aria-label="ВКонтакте" title="ВКонтакте">'
    +           '<i class="fab fa-vk text-lg"></i></a>'
    +         '<a href="' + TG_URL + '" target="_blank" rel="noopener noreferrer" '
    +           'class="w-11 h-11 rounded-full flex items-center justify-center text-[#229ED9] bg-[#229ED9]/15 hover:bg-[#229ED9] hover:text-white hover:-translate-y-1 transition-all shadow" aria-label="Telegram" title="Telegram">'
    +           '<i class="fab fa-telegram text-lg"></i></a>'
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
