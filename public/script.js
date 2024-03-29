function saveUserInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // URL에 정보 추가
    var url = window.location.href.split('?')[0] + `?username=${username}&password=${password}`;

    // 정보 표시
    document.getElementById("displayUserInfo").innerHTML = `<p>아이디: ${username}</p><p>비밀번호: ${password}</p>`;

    // URL 갱신
    window.history.replaceState({}, document.title, url);

    alert("코딩 애플에서 소개 된 완전 힙하고 엄청난 기술로 아이디와 비번을 숨기고 있으니 안심하세요");
}

// 페이지 로드 시 URL에서 정보 읽어오기
window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('username');
    var password = params.get('password');

    if (username && password) {
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
        document.getElementById("displayUserInfo").innerHTML = `<p>아이디: ${username}</p><p>비밀번호: ${password}</p>`;
    }
};
