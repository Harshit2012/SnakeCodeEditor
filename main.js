function saveText() {
    var textToSave = document.getElementById("python-code").value;
    var blob = new Blob([textToSave], { type: "text/plain" });
    var a = document.createElement("a");
    a.download = "saved_code.py";
    a.href = window.URL.createObjectURL(blob);
    a.click();
}

function importText() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".py";
    fileInput.addEventListener("change", function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var importedText = event.target.result;
            document.getElementById("python-code").value = importedText;
        };
        reader.readAsText(file);
    });
    fileInput.click();
}