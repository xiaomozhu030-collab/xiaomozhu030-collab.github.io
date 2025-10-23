// 平滑滚动
document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 当前章节高亮
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) current = section.getAttribute('id');
  });
  document.querySelectorAll('.sidebar a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});
