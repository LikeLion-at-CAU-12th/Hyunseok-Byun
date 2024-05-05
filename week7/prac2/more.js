const moreContainer = document.getElementById("container");

getMoreData();

async function getMoreData() {
  const receiveData = location.href.split("?");

  const data1 = receiveData[1];
  const data2 = decodeURI(receiveData[2]);
  const data3 = decodeURI(receiveData[3]);
  const data4 = decodeURI(receiveData[4]);

  console.log(receiveData);
  console.log(data1);
  console.log(data2);
  console.log(data3);
  console.log(data4);

  const list = document.createElement("div");
  list.id = "list"; // id를 추가하여 css가 적용되게 한다.

  let date = data1;
  date = `${date[2]}${date[3]}/${date[4]}${date[5]}/${date[6]}${date[7]}`;

  const image = document.createElement("img");
  image.src = data4;

  const info = document.createElement("span");
  info.innerText = `
    날짜 : ${date}
    촬영자 : ${data2}
    키워드 : ${data3}
    `;

  list.appendChild(image);
  list.appendChild(info);

  moreContainer.appendChild(list);
}
