// ===== Thinkpool AI - Main Application =====

// ===== 초기 샘플 데이터 =====
const SAMPLE_DATA = {
    users: [
        { id: 1, name: '김지능', email: 'kim@ai.com', password: '1234', role: 'admin', joinDate: '2025-01-15' },
        { id: 2, name: '이딥러닝', email: 'lee@ai.com', password: '1234', role: 'member', joinDate: '2025-02-20' },
        { id: 3, name: '박뉴럴', email: 'park@ai.com', password: '1234', role: 'member', joinDate: '2025-03-10' },
        { id: 4, name: '최트랜스', email: 'choi@ai.com', password: '1234', role: 'member', joinDate: '2025-04-05' },
        { id: 5, name: '정컴퓨터', email: 'jung@ai.com', password: '1234', role: 'member', joinDate: '2025-05-12' },
    ],
    posts: [
        {
            id: 1, title: 'GPT-5 출시 소식과 주요 변경점 정리',
            content: 'OpenAI에서 GPT-5를 공식 출시했습니다. 주요 변경점은 다음과 같습니다.\n\n1. 멀티모달 성능 대폭 향상\n2. 추론 능력 강화\n3. 코드 생성 정확도 개선\n4. 긴 문맥 처리 능력 향상\n\n여러분의 의견은 어떠신가요?',
            category: '정보', author: '김지능', authorId: 1,
            date: '2025-12-01', views: 342, likes: 28, pinned: true,
            tags: ['GPT', 'OpenAI', 'LLM']
        },
        {
            id: 2, title: 'PyTorch vs TensorFlow 2025년 비교',
            content: '2025년 기준 PyTorch와 TensorFlow의 장단점을 비교해봤습니다.\n\n## PyTorch\n- 연구 분야에서 압도적 점유율\n- 직관적인 API\n- 동적 그래프 기본\n\n## TensorFlow\n- 프로덕션 배포에 강점\n- TFLite 모바일 지원\n- TPU 최적화\n\n여러분은 어떤 프레임워크를 사용하시나요?',
            category: '토론', author: '이딥러닝', authorId: 2,
            date: '2025-11-28', views: 215, likes: 15, pinned: false,
            tags: ['PyTorch', 'TensorFlow', '딥러닝']
        },
        {
            id: 3, title: 'Transformer 모델 처음 공부하려면?',
            content: '안녕하세요, AI 공부를 시작한 초보자입니다.\n\nTransformer 모델을 공부하고 싶은데 어디서부터 시작해야 할지 모르겠습니다.\n\n추천해주실 자료나 학습 경로가 있을까요?\n\n현재 파이썬 기초와 선형대수 기본은 알고 있습니다.',
            category: '질문', author: '박뉴럴', authorId: 3,
            date: '2025-11-25', views: 189, likes: 12, pinned: false,
            tags: ['Transformer', '입문', '학습경로']
        },
        {
            id: 4, title: 'AI 기반 코드 리뷰 도구 개발 프로젝트',
            content: '안녕하세요! AI를 활용한 자동 코드 리뷰 도구를 개발하고 있습니다.\n\n## 프로젝트 개요\n- LLM 기반 코드 품질 분석\n- 보안 취약점 자동 탐지\n- 성능 개선 제안\n\n## 기술 스택\n- Python, FastAPI\n- OpenAI API\n- React (프론트엔드)\n\n참여하실 분을 모집합니다. 관심 있으신 분은 댓글 남겨주세요!',
            category: '프로젝트', author: '최트랜스', authorId: 4,
            date: '2025-11-20', views: 156, likes: 22, pinned: false,
            tags: ['프로젝트', '코드리뷰', 'LLM']
        },
        {
            id: 5, title: 'Stable Diffusion 3.5 모델 사용 후기',
            content: 'Stable Diffusion 3.5 모델을 사용해본 후기를 공유합니다.\n\n이전 버전에 비해 텍스트 렌더링 품질이 크게 향상되었고, 전반적인 이미지 품질도 많이 좋아졌습니다.\n\nVRAM 요구사항은 여전히 높지만, 최적화 기법을 적용하면 8GB GPU에서도 동작합니다.',
            category: '정보', author: '정컴퓨터', authorId: 5,
            date: '2025-11-18', views: 278, likes: 31, pinned: false,
            tags: ['StableDiffusion', '이미지생성', 'AI아트']
        },
        {
            id: 6, title: 'RAG 시스템 구축 시 청크 사이즈 최적화',
            content: 'RAG(Retrieval-Augmented Generation) 시스템을 구축할 때 문서 청크 사이즈가 성능에 미치는 영향을 실험해봤습니다.\n\n결론적으로 512~1024 토큰이 가장 좋은 성능을 보였고, 오버랩을 20% 정도 주면 컨텍스트 손실을 줄일 수 있었습니다.',
            category: '정보', author: '김지능', authorId: 1,
            date: '2025-11-15', views: 198, likes: 19, pinned: false,
            tags: ['RAG', 'LLM', '검색증강생성']
        },
        {
            id: 7, title: 'LoRA vs QLoRA 파인튜닝 비교 실험',
            content: 'LLaMA 모델을 LoRA와 QLoRA로 각각 파인튜닝한 결과를 공유합니다.\n\n## 실험 조건\n- 모델: LLaMA-3-8B\n- 데이터셋: 한국어 대화 10만건\n- GPU: A100 40GB\n\n## 결과\n- LoRA: 벤치마크 점수 82.3\n- QLoRA: 벤치마크 점수 80.1\n- 학습 시간: QLoRA가 40% 빠름\n\n성능 차이가 크지 않아 리소스 제한 시 QLoRA를 추천합니다.',
            category: '정보', author: '이딥러닝', authorId: 2,
            date: '2025-11-10', views: 267, likes: 35, pinned: false,
            tags: ['LoRA', 'QLoRA', '파인튜닝']
        },
        {
            id: 8, title: 'AI 윤리에 대한 토론: 어디까지 허용해야 할까?',
            content: 'AI 기술이 발전하면서 윤리적 문제가 점점 중요해지고 있습니다.\n\n1. 딥페이크 기술의 규제 범위\n2. AI 생성 콘텐츠의 저작권\n3. 자율 판단 AI의 책임 소재\n4. AI 편향성 문제\n\n여러분의 생각은 어떠신가요? 자유롭게 의견을 나눠봅시다.',
            category: '토론', author: '박뉴럴', authorId: 3,
            date: '2025-11-05', views: 312, likes: 24, pinned: false,
            tags: ['AI윤리', '토론', '규제']
        },
    ],
    comments: [
        { id: 1, postId: 1, author: '이딥러닝', authorId: 2, content: '정리 감사합니다! 멀티모달 성능이 특히 기대됩니다.', date: '2025-12-01' },
        { id: 2, postId: 1, author: '박뉴럴', authorId: 3, content: '가격 정책은 어떻게 되나요?', date: '2025-12-02' },
        { id: 3, postId: 2, author: '김지능', authorId: 1, content: '저는 PyTorch를 주로 사용합니다. 연구에는 확실히 PyTorch가 편하더라고요.', date: '2025-11-29' },
        { id: 4, postId: 3, author: '김지능', authorId: 1, content: '"Attention is All You Need" 논문부터 읽어보시는 걸 추천합니다. 이후 Jay Alammar의 블로그가 시각적으로 잘 설명되어 있어요.', date: '2025-11-26' },
        { id: 5, postId: 3, author: '이딥러닝', authorId: 2, content: '3Blue1Brown의 유튜브 영상도 추천합니다!', date: '2025-11-27' },
        { id: 6, postId: 4, author: '정컴퓨터', authorId: 5, content: '참여하고 싶습니다! 프론트엔드 담당 가능합니다.', date: '2025-11-21' },
    ],
    ebooks: [
        {
            id: 1, title: '처음 시작하는 머신러닝', author: '김지능',
            category: '머신러닝', price: 15000, pages: 320,
            description: '머신러닝의 기초 개념부터 실전 프로젝트까지. 파이썬 코드 예제와 함께 배우는 머신러닝 입문서입니다.\n\n- 지도학습/비지도학습 기초\n- Scikit-learn 실습\n- 실전 프로젝트 5개 포함',
            rating: 4.5, sales: 128, color: '#6c5ce7'
        },
        {
            id: 2, title: '딥러닝 완벽 가이드', author: '이딥러닝',
            category: '딥러닝', price: 25000, pages: 480,
            description: '딥러닝의 이론과 실전을 모두 다루는 종합 가이드.\n\n- CNN, RNN, Transformer 아키텍처\n- PyTorch 실습 코드\n- 최신 모델 구현 예제',
            rating: 4.8, sales: 256, color: '#0984e3'
        },
        {
            id: 3, title: 'NLP 자연어처리 실전', author: '박뉴럴',
            category: 'NLP', price: 20000, pages: 380,
            description: '자연어처리의 기초부터 최신 LLM 활용까지.\n\n- 토큰화, 임베딩, 어텐션\n- BERT, GPT 구현\n- 한국어 NLP 특화 내용',
            rating: 4.6, sales: 89, color: '#00b894'
        },
        {
            id: 4, title: '컴퓨터 비전 with OpenCV', author: '최트랜스',
            category: '컴퓨터비전', price: 18000, pages: 350,
            description: 'OpenCV와 딥러닝을 활용한 컴퓨터 비전 실습서.\n\n- 이미지 처리 기초\n- 객체 탐지 (YOLO, SSD)\n- 이미지 분류 및 세그멘테이션',
            rating: 4.3, sales: 67, color: '#e17055'
        },
        {
            id: 5, title: '강화학습 마스터 클래스', author: '정컴퓨터',
            category: '머신러닝', price: 22000, pages: 420,
            description: '강화학습의 이론과 실전 구현.\n\n- Q-Learning, DQN\n- Policy Gradient\n- 게임 AI 만들기 프로젝트',
            rating: 4.4, sales: 45, color: '#fdcb6e'
        },
        {
            id: 6, title: 'LLM 애플리케이션 개발', author: '김지능',
            category: 'NLP', price: 0, pages: 280,
            description: 'LLM을 활용한 실전 애플리케이션 개발 가이드. 무료 공개!\n\n- OpenAI API 활용\n- RAG 시스템 구축\n- 프롬프트 엔지니어링\n- 챗봇 개발 프로젝트',
            rating: 4.9, sales: 512, color: '#a29bfe'
        },
    ],
    resources: [
        {
            id: 1, title: 'Attention Is All You Need 논문 번역본',
            description: 'Transformer 논문의 한국어 번역 및 해설 자료',
            category: '논문', fileType: 'PDF', fileSize: '3.2MB',
            uploader: '김지능', uploaderId: 1, date: '2025-10-15', downloads: 234
        },
        {
            id: 2, title: 'PyTorch 딥러닝 기초 튜토리얼',
            description: 'PyTorch를 처음 배우는 분들을 위한 단계별 튜토리얼',
            category: '튜토리얼', fileType: 'IPYNB', fileSize: '15MB',
            uploader: '이딥러닝', uploaderId: 2, date: '2025-10-20', downloads: 189
        },
        {
            id: 3, title: '한국어 감성 분석 데이터셋',
            description: '영화 리뷰 기반 한국어 감성 분석 데이터셋 (50,000건)',
            category: '데이터셋', fileType: 'CSV', fileSize: '45MB',
            uploader: '박뉴럴', uploaderId: 3, date: '2025-11-01', downloads: 156
        },
        {
            id: 4, title: 'YOLO v8 객체 탐지 코드',
            description: 'YOLOv8을 활용한 실시간 객체 탐지 구현 코드',
            category: '코드', fileType: 'PY', fileSize: '2.1MB',
            uploader: '최트랜스', uploaderId: 4, date: '2025-11-05', downloads: 98
        },
        {
            id: 5, title: 'GPT 프롬프트 엔지니어링 가이드',
            description: '효과적인 프롬프트 작성법과 실전 예제 모음',
            category: '튜토리얼', fileType: 'PDF', fileSize: '8.5MB',
            uploader: '정컴퓨터', uploaderId: 5, date: '2025-11-10', downloads: 312
        },
        {
            id: 6, title: 'Diffusion Models 수학적 기초',
            description: 'Diffusion 모델의 수학적 배경을 정리한 논문 해설',
            category: '논문', fileType: 'PDF', fileSize: '5.7MB',
            uploader: '김지능', uploaderId: 1, date: '2025-11-12', downloads: 145
        },
        {
            id: 7, title: 'LangChain RAG 파이프라인 템플릿',
            description: 'LangChain을 사용한 RAG 시스템 구축 템플릿 코드',
            category: '코드', fileType: 'ZIP', fileSize: '12MB',
            uploader: '이딥러닝', uploaderId: 2, date: '2025-11-15', downloads: 178
        },
    ],
    settings: {
        siteName: 'Thinkpool AI',
        siteDesc: '인공지능 기술을 함께 탐구하고, 지식을 나누며, 미래를 만들어가는 커뮤니티',
        adminPassword: 'admin',
        allowSignup: true,
        allowGuest: true
    }
};

// ===== 데이터 관리 =====
function initData() {
    if (!localStorage.getItem('aicom_initialized')) {
        localStorage.setItem('aicom_users', JSON.stringify(SAMPLE_DATA.users));
        localStorage.setItem('aicom_posts', JSON.stringify(SAMPLE_DATA.posts));
        localStorage.setItem('aicom_comments', JSON.stringify(SAMPLE_DATA.comments));
        localStorage.setItem('aicom_ebooks', JSON.stringify(SAMPLE_DATA.ebooks));
        localStorage.setItem('aicom_resources', JSON.stringify(SAMPLE_DATA.resources));
        localStorage.setItem('aicom_settings', JSON.stringify(SAMPLE_DATA.settings));
        localStorage.setItem('aicom_cart', JSON.stringify([]));
        localStorage.setItem('aicom_purchases', JSON.stringify([]));
        localStorage.setItem('aicom_initialized', 'true');
    }
}

function getData(key) {
    const data = localStorage.getItem('aicom_' + key);
    return data ? JSON.parse(data) : [];
}

function setData(key, data) {
    localStorage.setItem('aicom_' + key, JSON.stringify(data));
}

function getNextId(key) {
    const items = getData(key);
    return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
}

// ===== 인증 시스템 =====
let currentUser = null;

function loadSession() {
    const session = localStorage.getItem('aicom_session');
    if (session) {
        currentUser = JSON.parse(session);
        updateAuthUI();
    }
}

function updateAuthUI() {
    const avatar = document.getElementById('userAvatar');
    const name = document.getElementById('userName');
    const role = document.getElementById('userRole');
    const btn = document.getElementById('btnAuth');

    if (currentUser) {
        avatar.textContent = currentUser.name.charAt(0);
        name.textContent = currentUser.name;
        role.textContent = currentUser.role === 'admin' ? '관리자' : '회원';
        btn.textContent = '로그아웃';
    } else {
        avatar.textContent = 'G';
        name.textContent = '게스트';
        role.textContent = '방문자';
        btn.textContent = '로그인';
    }
}

function toggleAuth() {
    if (currentUser) {
        currentUser = null;
        localStorage.removeItem('aicom_session');
        updateAuthUI();
        showToast('로그아웃 되었습니다.', 'info');
        navigateTo('home');
    } else {
        openModal('authModal');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const users = getData('users');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('aicom_session', JSON.stringify(user));
        updateAuthUI();
        closeModal('authModal');
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        showToast(`${user.name}님 환영합니다!`, 'success');
    } else {
        showToast('이메일 또는 비밀번호가 올바르지 않습니다.', 'error');
    }
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        showToast('모든 필드를 입력해주세요.', 'error');
        return;
    }

    const users = getData('users');
    if (users.find(u => u.email === email)) {
        showToast('이미 등록된 이메일입니다.', 'error');
        return;
    }

    const newUser = {
        id: getNextId('users'),
        name, email, password,
        role: 'member',
        joinDate: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    setData('users', users);

    currentUser = newUser;
    localStorage.setItem('aicom_session', JSON.stringify(newUser));
    updateAuthUI();
    closeModal('authModal');
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
    showToast('회원가입이 완료되었습니다!', 'success');
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('authModalTitle').textContent = '로그인';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('authModalTitle').textContent = '회원가입';
}

// ===== 네비게이션 =====
let currentPage = 'home';

function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    const navTarget = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navTarget) navTarget.classList.add('active');

    // 사이드바 닫기 (모바일)
    document.getElementById('sidebar').classList.remove('open');

    // 페이지 로드
    window.scrollTo(0, 0);
    switch (page) {
        case 'home': renderHome(); break;
        case 'community': renderPosts(); break;
        case 'ebook': renderEbooks(); break;
        case 'resources': renderResources(); break;
        case 'admin': renderAdmin(); break;
    }
}

// 네비게이션 클릭 이벤트
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
});

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// ===== 모달 =====
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// ===== 토스트 알림 =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===== 홈 페이지 =====
function renderHome() {
    const posts = getData('posts');
    const ebooks = getData('ebooks');
    const resources = getData('resources');
    const users = getData('users');

    // 통계
    document.getElementById('statMembers').textContent = users.length;
    document.getElementById('statPosts').textContent = posts.length;
    document.getElementById('statEbooks').textContent = ebooks.length;
    document.getElementById('statResources').textContent = resources.length;

    // 최근 게시글
    const recentPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    const postHtml = recentPosts.map(post => `
        <div class="post-mini-item" onclick="viewPost(${post.id})">
            <div class="post-mini-title">
                <span class="post-category-badge ${post.category}">${post.category}</span>
                ${post.title}
            </div>
            <div class="post-mini-meta">${post.author} &middot; ${post.date} &middot; 조회 ${post.views}</div>
        </div>
    `).join('');
    document.getElementById('homeRecentPosts').innerHTML = postHtml || '<div class="empty-state"><p>게시글이 없습니다.</p></div>';

    // 인기 전자책
    const popularEbooks = [...ebooks].sort((a, b) => b.sales - a.sales).slice(0, 4);
    const ebookHtml = popularEbooks.map(eb => `
        <div class="ebook-mini-card" onclick="viewEbook(${eb.id})">
            <div class="ebook-mini-title">${eb.title}</div>
            <div class="ebook-mini-price">${eb.price > 0 ? eb.price.toLocaleString() + '원' : '무료'}</div>
        </div>
    `).join('');
    document.getElementById('homePopularEbooks').innerHTML = ebookHtml || '<div class="empty-state"><p>전자책이 없습니다.</p></div>';
}

// ===== 커뮤니티 게시판 =====
let postFilter = 'all';
const POSTS_PER_PAGE = 6;
let postPage = 1;

function renderPosts() {
    let posts = getData('posts');
    const search = document.getElementById('communitySearch').value.toLowerCase();

    // 필터
    if (postFilter !== 'all') {
        posts = posts.filter(p => p.category === postFilter);
    }
    if (search) {
        posts = posts.filter(p =>
            p.title.toLowerCase().includes(search) ||
            p.content.toLowerCase().includes(search) ||
            p.author.toLowerCase().includes(search)
        );
    }

    // 정렬: 고정 먼저, 이후 날짜순
    posts.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date) - new Date(a.date);
    });

    // 페이지네이션
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    if (postPage > totalPages) postPage = 1;
    const start = (postPage - 1) * POSTS_PER_PAGE;
    const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

    const html = pagePosts.map(post => {
        const comments = getData('comments').filter(c => c.postId === post.id);
        return `
            <div class="post-item ${post.pinned ? 'pinned' : ''}" onclick="viewPost(${post.id})">
                <span class="post-category-badge ${post.category}">${post.category}</span>
                <div class="post-info">
                    <div class="post-title">${post.pinned ? '&#128204; ' : ''}${post.title}</div>
                    <div class="post-meta">
                        <span>${post.author}</span>
                        <span>${post.date}</span>
                    </div>
                </div>
                <div class="post-stats">
                    <span>&#128065; ${post.views}</span>
                    <span>&#9829; ${post.likes}</span>
                    <span>&#128172; ${comments.length}</span>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('postList').innerHTML = html || '<div class="empty-state"><div class="empty-state-icon">&#128196;</div><p>게시글이 없습니다.</p></div>';

    // 페이지네이션 렌더
    let pagHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        pagHtml += `<button class="${i === postPage ? 'active' : ''}" onclick="goToPostPage(${i})">${i}</button>`;
    }
    document.getElementById('postPagination').innerHTML = pagHtml;
}

function goToPostPage(page) {
    postPage = page;
    renderPosts();
}

function filterPosts() {
    postPage = 1;
    renderPosts();
}

function filterPostCategory(cat, btn) {
    postFilter = cat;
    postPage = 1;
    document.querySelectorAll('#page-community .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPosts();
}

function viewPost(id) {
    const posts = getData('posts');
    const post = posts.find(p => p.id === id);
    if (!post) return;

    // 조회수 증가
    post.views++;
    setData('posts', posts);

    // 렌더
    const comments = getData('comments').filter(c => c.postId === id);
    const isAuthor = currentUser && currentUser.id === post.authorId;

    document.getElementById('postDetail').innerHTML = `
        <div class="post-detail-header">
            <div class="post-detail-category">
                <span class="post-category-badge ${post.category}">${post.category}</span>
            </div>
            <h1>${post.title}</h1>
            <div class="post-detail-meta">
                <span>&#128100; ${post.author}</span>
                <span>&#128197; ${post.date}</span>
                <span>&#128065; ${post.views}</span>
                <span>&#9829; ${post.likes}</span>
            </div>
        </div>
        <div class="post-detail-body">${escapeHtml(post.content)}</div>
        ${post.tags && post.tags.length ? `
            <div class="post-detail-tags">
                ${post.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
            </div>
        ` : ''}
        <div class="post-detail-actions">
            <button class="like-btn ${isLiked(id) ? 'liked' : ''}" onclick="toggleLike(${id})">
                &#9829; 좋아요 ${post.likes}
            </button>
            ${isAuthor ? `
                <button class="btn btn-outline btn-sm" onclick="editPost(${id})">수정</button>
                <button class="btn btn-danger btn-sm" onclick="deletePost(${id})">삭제</button>
            ` : ''}
        </div>
    `;

    // 댓글
    const commentHtml = comments.map(c => {
        const canDelete = currentUser && (currentUser.id === c.authorId || currentUser.role === 'admin');
        return `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-author">${c.author}</span>
                    <span class="comment-date">${c.date}</span>
                </div>
                <div class="comment-body">${escapeHtml(c.content)}</div>
                ${canDelete ? `<button class="comment-delete" onclick="deleteComment(${c.id}, ${id})">삭제</button>` : ''}
            </div>
        `;
    }).join('');

    document.getElementById('commentsSection').innerHTML = `
        <h3 class="comments-header">댓글 ${comments.length}개</h3>
        <div class="comment-form">
            <textarea id="commentInput" placeholder="${currentUser ? '댓글을 입력하세요...' : '로그인 후 댓글을 작성할 수 있습니다.'}"></textarea>
            <button class="btn btn-primary" onclick="submitComment(${id})">등록</button>
        </div>
        <div class="comment-list">${commentHtml}</div>
    `;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-post-detail').classList.add('active');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function isLiked(postId) {
    const likes = JSON.parse(localStorage.getItem('aicom_likes') || '[]');
    return likes.includes(postId);
}

function toggleLike(postId) {
    let likes = JSON.parse(localStorage.getItem('aicom_likes') || '[]');
    const posts = getData('posts');
    const post = posts.find(p => p.id === postId);

    if (likes.includes(postId)) {
        likes = likes.filter(id => id !== postId);
        post.likes--;
    } else {
        likes.push(postId);
        post.likes++;
    }

    localStorage.setItem('aicom_likes', JSON.stringify(likes));
    setData('posts', posts);
    viewPost(postId);
}

function submitComment(postId) {
    if (!currentUser) {
        showToast('로그인 후 댓글을 작성할 수 있습니다.', 'error');
        return;
    }

    const content = document.getElementById('commentInput').value.trim();
    if (!content) {
        showToast('댓글 내용을 입력해주세요.', 'error');
        return;
    }

    const comments = getData('comments');
    comments.push({
        id: getNextId('comments'),
        postId,
        author: currentUser.name,
        authorId: currentUser.id,
        content,
        date: new Date().toISOString().split('T')[0]
    });
    setData('comments', comments);
    showToast('댓글이 등록되었습니다.', 'success');
    viewPost(postId);
}

function deleteComment(commentId, postId) {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    let comments = getData('comments');
    comments = comments.filter(c => c.id !== commentId);
    setData('comments', comments);
    showToast('댓글이 삭제되었습니다.', 'info');
    viewPost(postId);
}

function openWritePost() {
    if (!currentUser && !getData('settings').allowGuest) {
        showToast('로그인 후 글을 작성할 수 있습니다.', 'error');
        return;
    }
    document.getElementById('writePostTitle').textContent = '글쓰기';
    document.getElementById('editPostId').value = '';
    document.getElementById('postCategory').value = '';
    document.getElementById('postTitleInput').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('postTags').value = '';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-write-post').classList.add('active');
}

function editPost(id) {
    const post = getData('posts').find(p => p.id === id);
    if (!post) return;

    document.getElementById('writePostTitle').textContent = '글 수정';
    document.getElementById('editPostId').value = id;
    document.getElementById('postCategory').value = post.category;
    document.getElementById('postTitleInput').value = post.title;
    document.getElementById('postContent').value = post.content;
    document.getElementById('postTags').value = (post.tags || []).join(', ');

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-write-post').classList.add('active');
}

function submitPost(e) {
    e.preventDefault();
    const editId = document.getElementById('editPostId').value;
    const category = document.getElementById('postCategory').value;
    const title = document.getElementById('postTitleInput').value;
    const content = document.getElementById('postContent').value;
    const tags = document.getElementById('postTags').value
        .split(',').map(t => t.trim()).filter(t => t);

    const posts = getData('posts');

    if (editId) {
        // 수정
        const post = posts.find(p => p.id === parseInt(editId));
        if (post) {
            post.category = category;
            post.title = title;
            post.content = content;
            post.tags = tags;
        }
        setData('posts', posts);
        showToast('게시글이 수정되었습니다.', 'success');
        viewPost(parseInt(editId));
    } else {
        // 새글
        const newPost = {
            id: getNextId('posts'),
            title, content, category, tags,
            author: currentUser ? currentUser.name : '게스트',
            authorId: currentUser ? currentUser.id : 0,
            date: new Date().toISOString().split('T')[0],
            views: 0, likes: 0, pinned: false
        };
        posts.push(newPost);
        setData('posts', posts);
        showToast('게시글이 등록되었습니다.', 'success');
        navigateTo('community');
    }
}

function deletePost(id) {
    if (!confirm('게시글을 삭제하시겠습니까?')) return;
    let posts = getData('posts');
    posts = posts.filter(p => p.id !== id);
    setData('posts', posts);

    let comments = getData('comments');
    comments = comments.filter(c => c.postId !== id);
    setData('comments', comments);

    showToast('게시글이 삭제되었습니다.', 'info');
    navigateTo('community');
}

// ===== 전자책 스토어 =====
let ebookFilter = 'all';

function renderEbooks() {
    let ebooks = getData('ebooks');
    const search = document.getElementById('ebookSearch').value.toLowerCase();

    if (ebookFilter !== 'all') {
        ebooks = ebooks.filter(e => e.category === ebookFilter);
    }
    if (search) {
        ebooks = ebooks.filter(e =>
            e.title.toLowerCase().includes(search) ||
            e.author.toLowerCase().includes(search)
        );
    }

    const html = ebooks.map(eb => {
        const stars = '&#9733;'.repeat(Math.floor(eb.rating)) + (eb.rating % 1 >= 0.5 ? '&#9734;' : '');
        return `
            <div class="ebook-card" onclick="viewEbook(${eb.id})">
                <div class="ebook-cover">
                    <div class="ebook-cover-bg" style="background: linear-gradient(135deg, ${eb.color}, ${eb.color}88);"></div>
                    <span>&#128214;</span>
                </div>
                <div class="ebook-body">
                    <div class="ebook-category">${eb.category}</div>
                    <div class="ebook-title">${eb.title}</div>
                    <div class="ebook-author">${eb.author}</div>
                    <div class="ebook-footer">
                        <span class="ebook-price ${eb.price === 0 ? 'free' : ''}">${eb.price > 0 ? eb.price.toLocaleString() + '원' : '무료'}</span>
                        <span class="ebook-rating">${stars} ${eb.rating}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('ebookGrid').innerHTML = html || '<div class="empty-state"><div class="empty-state-icon">&#128214;</div><p>전자책이 없습니다.</p></div>';
    updateCartBadge();
}

function filterEbooks() {
    renderEbooks();
}

function filterEbookCategory(cat, btn) {
    ebookFilter = cat;
    document.querySelectorAll('#page-ebook .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEbooks();
}

function viewEbook(id) {
    const ebook = getData('ebooks').find(e => e.id === id);
    if (!ebook) return;

    const stars = '&#9733;'.repeat(Math.floor(ebook.rating)) + (ebook.rating % 1 >= 0.5 ? '&#9734;' : '');
    const purchased = getData('purchases').includes(id);

    document.getElementById('ebookDetail').innerHTML = `
        <div class="ebook-detail-cover">
            <div class="ebook-cover-bg" style="background: linear-gradient(135deg, ${ebook.color}, ${ebook.color}88);"></div>
            <span>&#128214;</span>
        </div>
        <div class="ebook-detail-info">
            <div class="ebook-category">${ebook.category}</div>
            <h1>${ebook.title}</h1>
            <div class="ebook-detail-meta">
                <span>&#128100; 저자: ${ebook.author}</span>
                <span>&#128196; ${ebook.pages}페이지</span>
                <span>${stars} ${ebook.rating} / 5.0</span>
                <span>&#128722; 판매 ${ebook.sales}부</span>
            </div>
            <div class="ebook-detail-desc">${escapeHtml(ebook.description)}</div>
            <div class="ebook-detail-price">${ebook.price > 0 ? ebook.price.toLocaleString() + '원' : '무료'}</div>
            <div class="ebook-detail-actions">
                ${purchased ? '<button class="btn btn-outline" disabled>구매 완료</button>' : `
                    ${ebook.price > 0 ? `<button class="btn btn-primary" onclick="addToCart(${ebook.id})">장바구니 담기</button>` : ''}
                    <button class="btn ${ebook.price === 0 ? 'btn-primary' : 'btn-outline'}" onclick="purchaseEbook(${ebook.id})">
                        ${ebook.price === 0 ? '무료 다운로드' : '바로 구매'}
                    </button>
                `}
            </div>
        </div>
    `;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-ebook-detail').classList.add('active');
}

function addToCart(id) {
    const cart = getData('cart');
    if (cart.includes(id)) {
        showToast('이미 장바구니에 있습니다.', 'info');
        return;
    }
    cart.push(id);
    setData('cart', cart);
    updateCartBadge();
    showToast('장바구니에 추가되었습니다.', 'success');
}

function updateCartBadge() {
    const cart = getData('cart');
    document.getElementById('cartBadge').textContent = cart.length;
}

function openCart() {
    const cart = getData('cart');
    const ebooks = getData('ebooks');

    if (cart.length === 0) {
        document.getElementById('cartContent').innerHTML = '<div class="cart-empty"><div class="empty-state-icon">&#128722;</div><p>장바구니가 비어있습니다.</p></div>';
    } else {
        const items = cart.map(id => ebooks.find(e => e.id === id)).filter(Boolean);
        const total = items.reduce((sum, e) => sum + e.price, 0);

        const html = items.map(e => `
            <div class="cart-item">
                <span class="cart-item-title">${e.title}</span>
                <span class="cart-item-price">${e.price.toLocaleString()}원</span>
                <button class="cart-item-remove" onclick="removeFromCart(${e.id})">&times;</button>
            </div>
        `).join('');

        document.getElementById('cartContent').innerHTML = `
            ${html}
            <div class="cart-total">
                <span>총 합계</span>
                <span class="cart-total-price">${total.toLocaleString()}원</span>
            </div>
            <div class="cart-actions">
                <button class="btn btn-outline" onclick="clearCart()">비우기</button>
                <button class="btn btn-primary" onclick="purchaseCart()">전체 구매</button>
            </div>
        `;
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-cart').classList.add('active');
}

function removeFromCart(id) {
    let cart = getData('cart');
    cart = cart.filter(i => i !== id);
    setData('cart', cart);
    updateCartBadge();
    openCart();
    showToast('장바구니에서 제거되었습니다.', 'info');
}

function clearCart() {
    setData('cart', []);
    updateCartBadge();
    openCart();
    showToast('장바구니를 비웠습니다.', 'info');
}

function purchaseEbook(id) {
    const purchases = getData('purchases');
    if (!purchases.includes(id)) {
        purchases.push(id);
        setData('purchases', purchases);

        const ebooks = getData('ebooks');
        const ebook = ebooks.find(e => e.id === id);
        if (ebook) {
            ebook.sales++;
            setData('ebooks', ebooks);
        }
    }

    // 장바구니에서 제거
    let cart = getData('cart');
    cart = cart.filter(i => i !== id);
    setData('cart', cart);
    updateCartBadge();

    showToast('구매가 완료되었습니다!', 'success');
    viewEbook(id);
}

function purchaseCart() {
    const cart = getData('cart');
    if (cart.length === 0) return;

    const purchases = getData('purchases');
    const ebooks = getData('ebooks');

    cart.forEach(id => {
        if (!purchases.includes(id)) {
            purchases.push(id);
            const ebook = ebooks.find(e => e.id === id);
            if (ebook) ebook.sales++;
        }
    });

    setData('purchases', purchases);
    setData('ebooks', ebooks);
    setData('cart', []);
    updateCartBadge();
    showToast('전체 구매가 완료되었습니다!', 'success');
    navigateTo('ebook');
}

// ===== 자료실 =====
let resourceFilter = 'all';

function renderResources() {
    let resources = getData('resources');
    const search = document.getElementById('resourceSearch').value.toLowerCase();

    if (resourceFilter !== 'all') {
        resources = resources.filter(r => r.category === resourceFilter);
    }
    if (search) {
        resources = resources.filter(r =>
            r.title.toLowerCase().includes(search) ||
            r.description.toLowerCase().includes(search)
        );
    }

    resources.sort((a, b) => new Date(b.date) - new Date(a.date));

    const html = resources.map(r => `
        <div class="resource-item">
            <div class="resource-icon ${r.fileType}">${r.fileType}</div>
            <div class="resource-info">
                <div class="resource-title">${r.title}</div>
                <div class="resource-desc">${r.description}</div>
            </div>
            <div class="resource-meta">
                <span>${r.uploader}</span>
                <span>${r.fileSize}</span>
                <span>&#8595; ${r.downloads}</span>
            </div>
            <button class="resource-download-btn" onclick="downloadResource(${r.id})">다운로드</button>
        </div>
    `).join('');

    document.getElementById('resourceList').innerHTML = html || '<div class="empty-state"><div class="empty-state-icon">&#128194;</div><p>자료가 없습니다.</p></div>';
}

function filterResources() {
    renderResources();
}

function filterResourceCategory(cat, btn) {
    resourceFilter = cat;
    document.querySelectorAll('#page-resources .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderResources();
}

function downloadResource(id) {
    const resources = getData('resources');
    const resource = resources.find(r => r.id === id);
    if (resource) {
        resource.downloads++;
        setData('resources', resources);
        showToast(`"${resource.title}" 다운로드가 시작됩니다. (시뮬레이션)`, 'success');
        renderResources();
    }
}

function openUploadResource() {
    if (!currentUser) {
        showToast('로그인 후 자료를 업로드할 수 있습니다.', 'error');
        return;
    }
    document.getElementById('uploadResourceTitle').textContent = '자료 업로드';
    document.getElementById('editResourceId').value = '';
    document.getElementById('resourceCategory').value = '';
    document.getElementById('resourceTitleInput').value = '';
    document.getElementById('resourceDesc').value = '';
    document.getElementById('resourceFileType').value = 'PDF';
    document.getElementById('resourceFileSize').value = '';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-upload-resource').classList.add('active');
}

function submitResource(e) {
    e.preventDefault();
    const editId = document.getElementById('editResourceId').value;
    const category = document.getElementById('resourceCategory').value;
    const title = document.getElementById('resourceTitleInput').value;
    const desc = document.getElementById('resourceDesc').value;
    const fileType = document.getElementById('resourceFileType').value;
    const fileSize = document.getElementById('resourceFileSize').value || '1MB';

    const resources = getData('resources');

    if (editId) {
        const resource = resources.find(r => r.id === parseInt(editId));
        if (resource) {
            resource.category = category;
            resource.title = title;
            resource.description = desc;
            resource.fileType = fileType;
            resource.fileSize = fileSize;
        }
        setData('resources', resources);
        showToast('자료가 수정되었습니다.', 'success');
    } else {
        resources.push({
            id: getNextId('resources'),
            title, description: desc, category, fileType, fileSize,
            uploader: currentUser.name,
            uploaderId: currentUser.id,
            date: new Date().toISOString().split('T')[0],
            downloads: 0
        });
        setData('resources', resources);
        showToast('자료가 업로드되었습니다.', 'success');
    }
    navigateTo('resources');
}

// ===== 관리자 페이지 =====
let adminAuthenticated = false;

function renderAdmin() {
    if (!adminAuthenticated) {
        document.getElementById('adminLock').style.display = 'block';
        document.getElementById('adminContent').style.display = 'none';
        return;
    }

    document.getElementById('adminLock').style.display = 'none';
    document.getElementById('adminContent').style.display = 'block';

    const users = getData('users');
    const posts = getData('posts');
    const ebooks = getData('ebooks');
    const resources = getData('resources');

    // 통계
    document.getElementById('adminStatUsers').textContent = users.length;
    document.getElementById('adminStatPosts').textContent = posts.length;
    document.getElementById('adminStatEbooks').textContent = ebooks.length;
    document.getElementById('adminStatResources').textContent = resources.length;

    renderAdminPosts();
    renderAdminEbooks();
    renderAdminResources();
    renderAdminUsers();
}

function adminLogin() {
    const pw = document.getElementById('adminPassword').value;
    const settings = getData('settings');

    if (pw === settings.adminPassword) {
        adminAuthenticated = true;
        document.getElementById('adminPassword').value = '';
        showToast('관리자 인증 성공!', 'success');
        renderAdmin();
    } else {
        showToast('비밀번호가 올바르지 않습니다.', 'error');
    }
}

function switchAdminTab(tab, btn) {
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('admin-' + tab).classList.add('active');
    btn.classList.add('active');
}

function renderAdminPosts() {
    const posts = getData('posts');
    const html = posts.sort((a, b) => b.id - a.id).map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.title.length > 30 ? p.title.slice(0, 30) + '...' : p.title}</td>
            <td>${p.author}</td>
            <td><span class="post-category-badge ${p.category}">${p.category}</span></td>
            <td>${p.date}</td>
            <td>${p.views}</td>
            <td class="actions">
                <button class="btn-pin" onclick="togglePin(${p.id})">${p.pinned ? '고정해제' : '고정'}</button>
                <button class="btn-delete" onclick="adminDeletePost(${p.id})">삭제</button>
            </td>
        </tr>
    `).join('');
    document.getElementById('adminPostsBody').innerHTML = html;
}

function togglePin(id) {
    const posts = getData('posts');
    const post = posts.find(p => p.id === id);
    if (post) {
        post.pinned = !post.pinned;
        setData('posts', posts);
        showToast(post.pinned ? '게시글이 고정되었습니다.' : '고정이 해제되었습니다.', 'info');
        renderAdminPosts();
    }
}

function adminDeletePost(id) {
    if (!confirm('게시글을 삭제하시겠습니까?')) return;
    let posts = getData('posts');
    posts = posts.filter(p => p.id !== id);
    setData('posts', posts);

    let comments = getData('comments');
    comments = comments.filter(c => c.postId !== id);
    setData('comments', comments);

    showToast('게시글이 삭제되었습니다.', 'info');
    renderAdmin();
}

function renderAdminEbooks() {
    const ebooks = getData('ebooks');
    const html = ebooks.sort((a, b) => b.id - a.id).map(e => `
        <tr>
            <td>${e.id}</td>
            <td>${e.title}</td>
            <td>${e.author}</td>
            <td>${e.category}</td>
            <td>${e.price > 0 ? e.price.toLocaleString() + '원' : '무료'}</td>
            <td>${e.sales}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editAdminEbook(${e.id})">수정</button>
                <button class="btn-delete" onclick="deleteAdminEbook(${e.id})">삭제</button>
            </td>
        </tr>
    `).join('');
    document.getElementById('adminEbooksBody').innerHTML = html;
}

function openAdminEbookForm() {
    document.getElementById('adminEbookForm').style.display = 'block';
    document.getElementById('adminEbookId').value = '';
    document.getElementById('adminEbookTitle').value = '';
    document.getElementById('adminEbookAuthor').value = '';
    document.getElementById('adminEbookCategory').value = '머신러닝';
    document.getElementById('adminEbookPrice').value = '';
    document.getElementById('adminEbookDesc').value = '';
    document.getElementById('adminEbookPages').value = '200';
}

function closeAdminEbookForm() {
    document.getElementById('adminEbookForm').style.display = 'none';
}

function editAdminEbook(id) {
    const ebook = getData('ebooks').find(e => e.id === id);
    if (!ebook) return;

    document.getElementById('adminEbookForm').style.display = 'block';
    document.getElementById('adminEbookId').value = id;
    document.getElementById('adminEbookTitle').value = ebook.title;
    document.getElementById('adminEbookAuthor').value = ebook.author;
    document.getElementById('adminEbookCategory').value = ebook.category;
    document.getElementById('adminEbookPrice').value = ebook.price;
    document.getElementById('adminEbookDesc').value = ebook.description;
    document.getElementById('adminEbookPages').value = ebook.pages;
}

function submitAdminEbook(e) {
    e.preventDefault();
    const editId = document.getElementById('adminEbookId').value;
    const title = document.getElementById('adminEbookTitle').value;
    const author = document.getElementById('adminEbookAuthor').value;
    const category = document.getElementById('adminEbookCategory').value;
    const price = parseInt(document.getElementById('adminEbookPrice').value) || 0;
    const desc = document.getElementById('adminEbookDesc').value;
    const pages = parseInt(document.getElementById('adminEbookPages').value) || 200;

    const colors = ['#6c5ce7', '#0984e3', '#00b894', '#e17055', '#fdcb6e', '#a29bfe'];
    const ebooks = getData('ebooks');

    if (editId) {
        const ebook = ebooks.find(e => e.id === parseInt(editId));
        if (ebook) {
            ebook.title = title;
            ebook.author = author;
            ebook.category = category;
            ebook.price = price;
            ebook.description = desc;
            ebook.pages = pages;
        }
        showToast('전자책이 수정되었습니다.', 'success');
    } else {
        ebooks.push({
            id: getNextId('ebooks'),
            title, author, category, price, description: desc, pages,
            rating: 0, sales: 0,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
        showToast('전자책이 추가되었습니다.', 'success');
    }

    setData('ebooks', ebooks);
    closeAdminEbookForm();
    renderAdminEbooks();
    document.getElementById('adminStatEbooks').textContent = ebooks.length;
}

function deleteAdminEbook(id) {
    if (!confirm('전자책을 삭제하시겠습니까?')) return;
    let ebooks = getData('ebooks');
    ebooks = ebooks.filter(e => e.id !== id);
    setData('ebooks', ebooks);
    showToast('전자책이 삭제되었습니다.', 'info');
    renderAdminEbooks();
    document.getElementById('adminStatEbooks').textContent = ebooks.length;
}

function renderAdminResources() {
    const resources = getData('resources');
    const html = resources.sort((a, b) => b.id - a.id).map(r => `
        <tr>
            <td>${r.id}</td>
            <td>${r.title}</td>
            <td>${r.category}</td>
            <td>${r.uploader}</td>
            <td>${r.downloads}</td>
            <td class="actions">
                <button class="btn-delete" onclick="deleteAdminResource(${r.id})">삭제</button>
            </td>
        </tr>
    `).join('');
    document.getElementById('adminResourcesBody').innerHTML = html;
}

function deleteAdminResource(id) {
    if (!confirm('자료를 삭제하시겠습니까?')) return;
    let resources = getData('resources');
    resources = resources.filter(r => r.id !== id);
    setData('resources', resources);
    showToast('자료가 삭제되었습니다.', 'info');
    renderAdminResources();
    document.getElementById('adminStatResources').textContent = resources.length;
}

function renderAdminUsers() {
    const users = getData('users');
    const html = users.sort((a, b) => b.id - a.id).map(u => `
        <tr>
            <td>${u.id}</td>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.joinDate}</td>
            <td><span style="color: ${u.role === 'admin' ? 'var(--accent)' : 'var(--text-secondary)'}">${u.role === 'admin' ? '관리자' : '회원'}</span></td>
            <td class="actions">
                <button class="btn-edit" onclick="toggleUserRole(${u.id})">${u.role === 'admin' ? '회원으로' : '관리자로'}</button>
                ${u.id !== 1 ? `<button class="btn-delete" onclick="deleteUser(${u.id})">삭제</button>` : ''}
            </td>
        </tr>
    `).join('');
    document.getElementById('adminUsersBody').innerHTML = html;
}

function toggleUserRole(id) {
    const users = getData('users');
    const user = users.find(u => u.id === id);
    if (user) {
        user.role = user.role === 'admin' ? 'member' : 'admin';
        setData('users', users);
        showToast(`${user.name}님의 역할이 변경되었습니다.`, 'success');
        renderAdminUsers();
    }
}

function deleteUser(id) {
    if (!confirm('회원을 삭제하시겠습니까?')) return;
    let users = getData('users');
    users = users.filter(u => u.id !== id);
    setData('users', users);
    showToast('회원이 삭제되었습니다.', 'info');
    renderAdmin();
}

function saveSettings(e) {
    e.preventDefault();
    const settings = getData('settings');
    settings.siteName = document.getElementById('settingSiteName').value;
    settings.siteDesc = document.getElementById('settingSiteDesc').value;

    const newPw = document.getElementById('settingAdminPw').value;
    if (newPw) {
        settings.adminPassword = newPw;
        document.getElementById('settingAdminPw').value = '';
    }

    settings.allowSignup = document.getElementById('settingAllowSignup').checked;
    settings.allowGuest = document.getElementById('settingAllowGuest').checked;
    setData('settings', settings);
    showToast('설정이 저장되었습니다.', 'success');
}

function resetAllData() {
    if (!confirm('모든 데이터가 초기화됩니다. 계속하시겠습니까?')) return;
    if (!confirm('정말로 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;

    localStorage.removeItem('aicom_initialized');
    localStorage.removeItem('aicom_session');
    localStorage.removeItem('aicom_likes');
    initData();
    currentUser = null;
    adminAuthenticated = false;
    updateAuthUI();
    showToast('데이터가 초기화되었습니다.', 'info');
    navigateTo('home');
}

function exportData() {
    const data = {
        users: getData('users'),
        posts: getData('posts'),
        comments: getData('comments'),
        ebooks: getData('ebooks'),
        resources: getData('resources'),
        settings: getData('settings')
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-community-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('데이터를 내보냈습니다.', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.users) setData('users', data.users);
            if (data.posts) setData('posts', data.posts);
            if (data.comments) setData('comments', data.comments);
            if (data.ebooks) setData('ebooks', data.ebooks);
            if (data.resources) setData('resources', data.resources);
            if (data.settings) setData('settings', data.settings);
            showToast('데이터를 가져왔습니다.', 'success');
            renderAdmin();
        } catch (err) {
            showToast('잘못된 파일 형식입니다.', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    initData();
    loadSession();
    navigateTo('home');
});

// 모달 외부 클릭 닫기
document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal('authModal');
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal('authModal');
    }
});
