import "./style.css";

const bodyContainer = document.getElementById("body-container");

const homePath = "http://likelion.kro.kr:8000/";
const url = new URL(window.location.href);

const fetchOnePost = async () => {
  const urlParams = url.searchParams;
  const id = urlParams.get("id");
  const detailUrl = `${homePath}${id}/`;
  const fetchPost = await fetch(detailUrl)
    .then((res) => res.json())
    .catch((error) => console.log("data fetch error:", error));
  const name = fetchPost.data["name"];
  const content = fetchPost.data["content"];
  const date = fetchPost.data["created_at"];
  const container = document.createElement("div");
  container.classList.add("post");
  container.innerText = `\u00a0\u00a0\u00a0\u00a0내용 : ${content}\n작성자 : ${name}\n작성일 : ${date}`;
  bodyContainer.appendChild(container);
};

fetchOnePost();
