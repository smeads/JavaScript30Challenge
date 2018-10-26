document.addEventListener("DOMContentLoaded", () => {
  const keyNodes = [...document.querySelectorAll(".key")];
  const audioNodes = [...document.querySelectorAll("audio")];

  function findNode(e, nodeArray) {
    return nodeArray.find(node => Number(node.dataset.key) === e.keyCode);
  }

  function playSound(e) {
    const audio = findNode(e, audioNodes);
    const key = findNode(e, keyNodes);
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  keyNodes.forEach(node =>
    node.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);
});
