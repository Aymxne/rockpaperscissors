const defaultRules = document.querySelector(".rules-container");

const hideRules = () => {
	defaultRules.style.display = "none";
};

const showRules = () => {
	console.log("click");
	defaultRules.style.display = "flex";
};
