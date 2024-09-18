
const displayedImage = document.querySelector('.displayed-img');  //显示当前选中的图片。
const thumbBar = document.querySelector('.thumb-bar');  //显示缩略图

const btn = document.querySelector('button');  //切换图片暗淡/亮度的按钮。
const overlay = document.querySelector('.overlay');  //一个覆盖在图片上的层，用于实现暗淡效果

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    thumbBar.appendChild(newImage);
}
/*
定义一个包含图片文件名的数组images,然后，使用for...of循环遍历这个数组，
为每个图片创建一个新的img元素，并设置其src属性。
最后，将这些新创建的img元素添加到thumbBar元素中，作为缩略图显示。
*/

thumbBar.addEventListener("click", (e) => {
    displayedImage.setAttribute("src", e.target.getAttribute("src"));
});
/*
为thumbBar添加一个点击事件监听器。当用户点击任何一个缩略图时，事件处理函数会被触发。
事件处理函数中，e.target代表被点击的缩略图元素，通过getAttribute("src")获取其src属性值，
并将其设置为displayedImage的src属性，从而在主显示区域显示被点击的图片。*/

btn.addEventListener("click", function() {
    const btnClass = btn.getAttribute("class");

    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
/*
为按钮btn添加了一个点击事件监听器。当按钮被点击时，事件处理函数会检查按钮的class属性。
如果按钮的class是dark，则将其更改为light，并将按钮文本更改为"Lighten"，
同时将overlay的背景颜色设置为半透明的黑色，使图片变暗。如果按钮的class是light，
则进行相反的操作，将按钮文本更改为"Darken"，并将overlay的背景颜色设置为透明，使图片变亮。
*/