function startButton(page)
{
    // link it to other page
    location.href=page;
}

// show hidden content
function myFunction() {
    var additionalText = document.getElementById("nextStop");
    if (additionalText.style.display === "block") {
      additionalText.style.display = "none";
    } else {
      additionalText.style.display = "block";
    }
}
