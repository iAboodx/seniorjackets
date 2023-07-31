$('#capture-screenshot').click(function () {

    const screenshotTarget = document.body;
    const btn = document.getElementById("capture-screenshot")
    const cal = document.querySelector(".pickmenu")
    const pickmenu = document.querySelector(".cal")
    const scd = document.getElementById("scd")
    cal.style.display = "none"
    btn.style.display = "none"
    pickmenu.style.display = "none"
    html2canvas(screenshotTarget).then(canvas => {
        
        const base64image = canvas.toDataURL("image/png")

        window.location.href = base64image;
        dataURL = canvas.toDataURL();
        document.body.appendChild(canvas)
        pushScreenshotToServer(dataURL);
        btn.style.display = "block"
        pickmenu.style.display = "block"
        cal.style.display = "inline-flex"
    });
});

function pushScreenshotToServer(dataURL) {
    $.ajax({
        url: "push-screenshot.php",
        type: "POST",
        data: {
            image: dataURL
        },
        dataType: "html",
        success: function () {
            console.log('Screenshot pushed to server.');
        }
    });


} 

