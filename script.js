document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("post-form");
  const postsContainer = document.getElementById("posts");

  // 投稿フォームの送信イベントリスナーを追加
  postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!username || !message) {
      alert("ユーザー名とメッセージを入力してください。");
      return;
    }

    // 投稿を表示
    const postElement = createPostElement(username, message);
    postsContainer.prepend(postElement);

    // フォームをリセット
    postForm.reset();
  });

  // 投稿要素を作成
  function createPostElement(username, message) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const userElement = document.createElement("h2");
    userElement.textContent = username;

    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    postElement.appendChild(userElement);
    postElement.appendChild(messageElement);

    return postElement;
  }
});
