const $btn = document.querySelector("#search-btn");
const $text = document.querySelector("#search-text");
const $result = document.querySelector("#result");

const url = "https://dapi.kakao.com/v2/search/web";
const headers = { Authorization: "KakaoAK 334a7181dc951c6d7060e88ac6b86af6" };
function toJson(text) {
  return text.json();
}
function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });
  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    ""
  )}</ul>`;
}
function error() {
  console.log(2);
}

function search() {
  const value = $text.value;
  if (value === "") {
    alert("검색어를 입력하세요");
    return false;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then(toJson)
    .then(success)
    .catch(error);
  return true;
}

$btn.addEventListener("click", search);
