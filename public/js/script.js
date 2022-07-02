$("button[cs-show-password]").each(function () {
    const dest = $(`input#${$(this).attr("cs-show-password")}`);
    $(this).click((e) => {
        type = dest.attr("type", toggleInputType(dest.attr("type")));
        toggleInputIcon($(this), dest.attr("type"));
    });
});

const toggleInputType = (type) => (type === "password" ? "text" : "password");
const toggleInputIcon = (element, type) => {
    const icon =
        type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    $(element).children("i").removeClass().addClass(icon);
};
