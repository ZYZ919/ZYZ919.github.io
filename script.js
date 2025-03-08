document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const complimentContainer = document.getElementById('complimentContainer');
    const bigText = document.getElementById('bigText');
    const moreBtn = document.getElementById('moreBtn');
    const backBtn = document.getElementById('backBtn');
    const moreCompliments = document.getElementById('moreCompliments');
    
    // 添加星星背景
    createStars(30);
    
    // 提交按钮点击事件
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            showCompliment(name);
        } else {
            alert('请输入名字！');
        }
    });
    
    // 按下回车键提交
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
    
    // 显示更多夸奖
    moreBtn.addEventListener('click', function() {
        moreCompliments.classList.remove('hidden');
        moreBtn.style.display = 'none';
        
        // 添加浮动动画
        moreCompliments.classList.add('float');
    });
    
    // 返回按钮点击事件
    backBtn.addEventListener('click', function() {
        complimentContainer.classList.add('hidden');
        moreCompliments.classList.add('hidden');
        nameInput.value = '';
        nameInput.focus();
    });
    
    // 显示赞美内容
    function showCompliment(name) {
        bigText.textContent = `${name}，你真是个大美女！`;
        complimentContainer.classList.remove('hidden');
        nameInput.blur();
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