function updateList() {
  // [...document.querySelectorAll('h1, h2')]
  // 找出所有标题（就是含有锚点的元素，按位置进行重新排序） 随时屏幕滚去会发生变化
  const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });
  // console.log(titles)
  // console.log(titles[0])
  // titles[0] 表示当前屏幕中显示出的锚点元素，后续需要将滚去块对应锚点同下标的元素 更改为选中状态

  // 先将所有元素取消选中状态
  document
    .querySelectorAll(".selected-circle")
    .forEach((c) => c.classList.remove("selected-circle"));

  // console.log([...document.querySelectorAll("h1, h2")]);
  // console.log(titles[0]);
  // console.log([...document.querySelectorAll("h1, h2")].indexOf(titles[0]));
	var hitsIndex = [...document.querySelectorAll("h1, h2")].indexOf(titles[0]);
  if (hitsIndex >= 0) {
		(document.querySelectorAll(".nav-dot")[hitsIndex]).classList.add("selected-circle");
  }
}
updateList();
window.addEventListener("scroll", () => {
  updateList();
});
