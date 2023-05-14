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
  const container = document.createElement("div");
  container.classList.add("post");
  container.innerText = `작성자 : ${name} \n 내용 : ${content}`;
  bodyContainer.appendChild(container);
};

fetchOnePost();
