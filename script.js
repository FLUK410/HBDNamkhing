let code = "";

function press(num) {
  if (code.length < 6) {
    code += num;
    document.getElementById("inputBox").value = code.replace(/./g, "•");
  }
}

function clearInput() {
  code = "";
  document.getElementById("inputBox").value = "";
}

function submitInput() {
  if (code === "060654") {
    // แทนที่การแสดงข้อความ ด้วยการไปหน้าใหม่
    window.location.href = "wish.html";
  } else {
    alert("ลองใส่เป็น060654นะคับ");
    clearInput();
  }
}

function playSong() {
  const audio = document.getElementById("song");
  audio.style.display = "block";
  audio.play();
}
