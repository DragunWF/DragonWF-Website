$(document).ready(function () {
  const hiddenContents = [".description-content", ".secondary-content"];
  for (content of hiddenContents) {
    $(content).hide();
  }

  $("#expand").click(() => {
    $("#expand").slideUp(500, () => {
      $(hiddenContents[0]).slideDown(500, () => {
        $(hiddenContents[1]).slideDown(1000);
      });
    });
  });

  const pageUrl = window.location.href;
  const pageId = pageUrl.substring(pageUrl.lastIndexOf("#") + 1);
  if (pageId == "latest") {
    $("html, body").animate(
      {
        scrollTop: $(`#${pageId}-project`).offset().top,
      },
      850
    );
  }

  $("#secret").click(() => {
    $("#secret").attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });
});
