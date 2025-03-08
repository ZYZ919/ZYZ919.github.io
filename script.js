document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const greetingContainer = document.getElementById('greetingContainer');
    const greetingText = document.getElementById('greetingText');
    const backBtn = document.getElementById('backBtn');
    
    // 添加星星背景
    createStars(20);
    
    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            showGreeting(name);
        } else {
            alert('请输入你的名字！');
        }
    });
    
    // 返回按钮点击事件
    backBtn.addEventListener('click', function() {
        greetingContainer.classList.add('hidden');
        nameInput.value = '';
        nameInput.focus();
    });
    
    // 按下回车键提交
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    // 显示祝福语
    function showGreeting(name) {
        greetingText.textContent = `生日快乐，${name}！`;
        greetingContainer.classList.remove('hidden');
        nameInput.blur();
        
        // 添加浮动动画
        setTimeout(function() {
            greetingContainer.classList.add('float');
        }, 500);
    }
    
    // 创建星星背景
    function createStars(count) {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        document.body.appendChild(starsContainer);
        
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = `${Math.random() * 4 + 2}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }
});