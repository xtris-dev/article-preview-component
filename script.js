// Get all HTML elements
const shareBtn = document.getElementById("share-icon");
const shareBarDesktop = document.querySelector(".share-bar");

// On click share button function
shareBtn.addEventListener("click", () => {
	shareBtn.classList.toggle("sharebar-bgActive");
	shareBarDesktop.classList.toggle("sharebar-show");
});
