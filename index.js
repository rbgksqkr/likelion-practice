const contentContainer = document.getElementById("content-container");
const postForm = document.getElementById("post-form");
const inputWriter = document.getElementById("input-writer");
const inputPost = document.getElementById("input-post");

const url = "http://likelion.kro.kr:8000/";

const fetchPostList = async () => {
  const fetchList = await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log("data fetch error:", error));
  const data = fetchList.data;

  if (data.length > 0) {
    data.map((item) => {
      const container = document.createElement("div");
      container.innerText = `작성자 : ${item.writer} / 내용 : ${item.content}`;
      contentContainer.appendChild(container);
    });
  } else {
    const container = document.createElement("div");
    container.innerText =
      "방명록에 글이 없습니다 \n\n 첫 방명록을 적어주세요 !";
    contentContainer.appendChild(container);
  }
  console.log(data);
};

const handleWritePost = async (e) => {
  const result = await createPost(inputWriter.value, inputPost.value);
  inputWriter.value = "";
  inputPost.value = "";
};

const createPost = async (name, content) => {
  const item = {
    name,
    content,
  };
  const response = await fetch(url + "new/", {
    method: "POST",
    body: JSON.stringify(item),
  }).then((res) => res.json());

  return response;
};

postForm.addEventListener("submit", handleWritePost);
