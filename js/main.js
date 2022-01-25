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

  // Form
  $("#form-submit").click(() => {
    const name = $("#form-name").val();
    const message = $("#form-textarea").val();
    if (message) {
      if (!name) $("#form-name").val("Anonymous");
      if (name.length < 20 && message.length < 254)
        $("#form-submit").attr("type", "submit");
      else {
        if (name.length > 20) alert("Name must be less than 20 characters");
        if (message.length > 254)
          alert("Message must be less than 254 characters");
      }
    } else alert("Your message is empty!");
  });

  $("#form-reset").click(() => {
    $("#form-name").val("");
    $("#form-textarea").val("");
  });
});
