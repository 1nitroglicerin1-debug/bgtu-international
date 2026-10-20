/**
 * theme.js — авто-«оживление» hero и CTA на всех страницах БГТУ.
 * Подключается с атрибутом defer: отрабатывает после парсинга DOM.
 * Локально добавляет цветные blob-пятна и бегущий блик, не трогая контент.
 */
(function () {
  'use strict';

  function el(cls) { var d = document.createElement('div'); d.className = cls; return d; }

  function boot() {
    /* 1. Hero: цветные плавающие пятна */
    var hero = document.querySelector('section[class*="hero"]') || document.querySelector('[class*="hero-"]');
    if (hero) {
      hero.classList.add('overflow-hidden');
      if (getComputedStyle(hero).position === 'static') hero.classList.add('relative');

      if (!hero.querySelector('.blob')) {
        hero.appendChild(el('blob blob-violet animate-floaty w-72 h-72 -top-10 right-10'));
        hero.appendChild(el('blob blob-cyan animate-floaty-slow w-96 h-96 -bottom-16 -left-24'));
        hero.appendChild(el('blob blob-yellow animate-floaty-slow w-56 h-56 top-1/3 left-1/3'));
      }
      /* поднимаем контент hero над пятнами */
      hero.querySelectorAll(':scope > *').forEach(function (child) {
        if (!child.classList.contains('blob')) {
          child.classList.add('relative', 'z-10');
        }
      });
    }

    /* 2. Главные CTA-кнопки: бегущий блик + цветная тень */
    document.querySelectorAll('a[class*="bg-brand-accent"], button[class*="bg-brand-accent"]').forEach(function (b) {
      b.classList.add('btn-shimmer');
      b.style.boxShadow = '0 10px 30px rgba(234,179,8,0.35)';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
