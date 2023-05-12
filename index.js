const contentContainer = document.getElementById("content-container");
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
