function saveUserInfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    // URL에 정보 추가
    var url = window.location.href.split('?')[0] + `?name=${name}&age=${age}`;

    // 정보 표시
    document.getElementById("displayUserInfo").innerHTML = `<p>이름: ${name}</p><p>나이: ${age}</p>`;

    // URL 갱신
    window.history.replaceState({}, document.title, url);
}

// 페이지 로드 시 URL에서 정보 읽어오기
window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');
    var age = params.get('age');

    if (name && age) {
        document.getElementById("name").value = name;
        document.getElementById("age").value = age;
        document.getElementById("displayUserInfo").innerHTML = `<p>이름: ${name}</p><p>나이: ${age}</p>`;
    }
};
