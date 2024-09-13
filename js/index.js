// 스크롤에 따라 nav 배경 생성
window.addEventListener('scroll', function() {
    const nav_container = document.querySelector('nav .container');
    if (window.scrollY > 200) {
        nav_container.classList.add('scrolled');
    } else {
        nav_container.classList.remove('scrolled');
    }
});

// 메인 페이지 폴리곤 움직이기
window.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const speedblock = 50;

    var obj = document.querySelector('.polygon .beige');
    obj.style.left   = (0 - mouseX/speedblock) + 'px';
    obj.style.top = (0 - mouseY/speedblock) + 'px';

    var obj = document.querySelector('.polygon .red');
    obj.style.left   = (-300 + mouseX/speedblock) + 'px';
    obj.style.bottom = (100  + mouseY/speedblock) + 'px';

    var obj = document.querySelector('.polygon .blue-lg');
    obj.style.right  = (-300 + mouseX/speedblock) + 'px';
    obj.style.bottom = (200  + mouseY/speedblock) + 'px';

    var obj = document.querySelector('.polygon .blue-sm');
    obj.style.right  = (80 + mouseX/speedblock) + 'px';
    obj.style.bottom = (600  + mouseY/speedblock) + 'px';
});
