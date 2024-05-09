const moreContainer = document.getElementById("container");

getMoreData();

async function getMoreData() {
  const receiveData = location.href.split("?");
  console.log(location.href); // string 타입
  const moreUrl = new URL(location.href);
  console.log(moreUrl);
  const urlParams = moreUrl.searchParams;

  const createdTime = urlParams.get("createdTime");
  console.log(createdTime);

  const photographer = urlParams.get("photographer");
  console.log(photographer);

  const searchKeyword = urlParams.get("searchKeyword");
  console.log(searchKeyword);

  const webImageUrl = urlParams.get("webImageUrl");
  console.log(webImageUrl);

  const list = document.createElement("div");
  list.id = "list"; // id를 추가하여 css가 적용되게 한다.

  date = `${createdTime[2]}${createdTime[3]}/${createdTime[4]}${createdTime[5]}/${createdTime[6]}${createdTime[7]}`;

  const image = document.createElement("img");
  image.src = webImageUrl;

  const info = document.createElement("span");
  info.innerText = `
    날짜 : ${date}
    촬영자 : ${photographer}
    키워드 : ${searchKeyword}
    `;

  list.appendChild(image);
  list.appendChild(info);

  moreContainer.appendChild(list);
}
