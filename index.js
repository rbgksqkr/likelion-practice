import "./style.css";
const inputContainer = document.getElementById("input-container");
const contentContainer = document.getElementById("content-container");

const writerForm = document.getElementById("writer-form");
const postForm = document.getElementById("post-form");

const inputWriter = document.getElementById("input-writer");
const inputPost = document.getElementById("input-post");

const homePath = "http://likelion.kro.kr:8000/";

const fetchPostList = async () => {
  const fetchList = await fetch(homePath)
    .then((res) => res.json())
    .catch((error) => console.log("data fetch error:", error));
  const data = fetchList.data;

  if (data.length > 0) {
    data.map((item) => {
      const container = document.createElement("div");
      container.classList.add("post");
      container.innerText = `작성자 : ${item.writer} / 내용 : ${item.content}`;
      const button = document.createElement("button");
      button.id = item.id;
      button.classList.add("delete-button");
      button.innerText = "삭제";
      button.addEventListener("click", deletePost);
      container.appendChild(button);
      contentContainer.appendChild(container);
    });
  } else {
    const container = document.createElement("div");
    container.innerText =
      "방명록에 글이 없습니다 \n\n 첫 방명록을 적어주세요 !";
    inputContainer.appendChild(container);
  }
  console.log(data);
};

const handleWritePost = async (e) => {
  if (inputWriter.value.length === 0 || inputPost.value.length === 0) {
    e.preventDefault();
    alert("모두 입력해주세요 !");
    return;
  }
  const result = await createPost(inputWriter.value, inputPost.value);
  if (result.status === 200) {
    inputWriter.value = "";
    inputPost.value = "";
  } else {
    e.preventDefault();
    alert("방명록 생성 실패 !");
  }
};

const createPost = async (name, content) => {
  const item = {
    name,
    content,
  };
  const response = await fetch(homePath + "new/", {
    method: "POST",
    body: JSON.stringify(item),
  }).then((res) => res.json());

  return response;
};

const deletePost = async (e) => {
  if (confirm("삭제하시겠습니까?") === true) {
    await fetch(`${homePath}${e.target.id}/`, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload();
        return res.json();
      })
      .catch((error) => console.log("delete 실패 에러:", error));
  }
};

fetchPostList();
writerForm.addEventListener("submit", handleWritePost);
postForm.addEventListener("submit", handleWritePost);
