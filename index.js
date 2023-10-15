let marks;
let mark;
let statement;
let MarkBar = document.getElementsByClassName("mark-bar");
marks = JSON.parse(localStorage.getItem("marks"));
let state = document.getElementsByClassName("statement");

if (marks === null) {
  marks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
} 

MarknColor();

//add marks and color bars
function MarknColor() {
  for (i = 0; i < marks.length; i++) {
    mark = marks[i];
    MarkBar[i].innerText = mark;
       if (MarkBar[i].innerText === "0") {
      MarkBar[i].style.color = "white";
    } else {
      MarkBar[i].style.color = "black";
    }
    MarkBar[i].style.width = `${mark}%`;
    if (mark > 79) {
      MarkBar[i].style.backgroundColor = "green";
    } else if (mark < 40) {
      MarkBar[i].style.backgroundColor = "red";
    } else {
      MarkBar[i].style.backgroundColor = "orange";
    }
  }

  //////first subject////////
  // color correction
  if (marks[2] > 39) {
    MarkBar[2].style.backgroundColor = "green";
  } else {
    MarkBar[2].style.backgroundColor = "red";
  }
  //determin state ment
  //worte both
  if (marks[0] > 0 && marks[1] > 0) {
    if (marks[2] > 39) {
      state[0].innerText = "You qualify for Exams";
      
    } else {
      state[0].innerText = "Unfortunately you do not qualify for exams";
    }
  } else if (marks[0] > 0 && marks[1] == 0) {
    //wrote test 1
    state[0].innerText =
      "You need to score more than " +
      Math.round(400 / 7 - (3 / 7) * marks[0]) +
      "% in Test 2 to qaulify for exams";
  } else if (marks[0] == 0 && marks[1] > 0) {
    //wrote test 2
    if (marks[1] < 15) {
      state[0].innerText = "Ngeke usakhava, You can't qualify";

    } else if (marks[1] > 58) {
      state[0].innerText = "You qualify for Exams";
    } else {
      state[0].innerText =
        "You need to score more than " +
        Math.round(400 / 3 - (7 / 3) * marks[1]) +
        "% in Test 1 to qaulify for exams";
    }
  } else {
    //wrote none
    state[0].innerText = " ";
  }

  //////sceond subject////////
  // color correction
  if (marks[5] > 39) {
    MarkBar[5].style.backgroundColor = "green";
  } else {
    MarkBar[5].style.backgroundColor = "red";
  }
  //determin state ment
  //worte both
  if (marks[3] > 0 && marks[4] > 0) {
    if (marks[5] > 39) {
      state[1].innerText = "You qualify for Exams";
    } else {
      state[1].innerText = "Unfortunately you do not qualify for exams";
    }
  } else if (marks[3] > 0 && marks[4] == 0) {
    //wrote test 1
    state[1].innerText =
      "You need to score more than " +
      Math.round(400 / 7 - (3 / 7) * marks[0]) +
      "% in Test 2 to qaulify for exams";
  } else if (marks[3] == 0 && marks[4] > 0) {
    //wrote test 2
    if (marks[4] < 15) {
      state[1].innerText = "Ngeke usakhava, You can't qualify";
    } else if (marks[1] > 58) {
      state[1].innerText = "You qualify for Exams";
    } else {
      state[1].innerText =
        "You need to score more than " +
        Math.round(400 / 3 - (7 / 3) * marks[1]) +
        "% in Test 1 to qaulify for exams";
    }
  } else {
    //wrote none
    state[1].innerText = " ";
  }

  //////Third subject////////
  // color correction
  if (marks[8] > 39) {
    MarkBar[8].style.backgroundColor = "green";
  } else {
    MarkBar[8].style.backgroundColor = "red";
  }
  //determin state ment
  //worte both
  if (marks[6] > 0 && marks[7] > 0) {
    if (marks[8] > 39) {
      state[2].innerText = "You qualify for Exams";
    } else {
      state[2].innerText = "Unfortunately you do not qualify for exams";
    }
  } else if (marks[6] > 0 && marks[7] == 0) {
    //wrote test 1
    state[2].innerText =
      "You need to score more than " +
      Math.round(400 / 7 - (3 / 7) * marks[6]) +
      "% in Test 2 to qaulify for exams";
  } else if (marks[6] == 0 && marks[7] > 0) {
    //wrote test 2
    if (marks[7] < 15) {
      state[2].innerText = "Ngeke usakhava, You can't qualify";
    } else if (marks[7] > 58) {
      state[2].innerText = "You qualify for Exams";
    } else {
      state[2].innerText =
        "You need to score more than " +
        Math.round(400 / 3 - (7 / 3) * marks[7]) +
        "% in Test 1 to qaulify for exams";
    }
  } else {
    //wrote none
    state[2].innerText = " ";
  }

  //////Fourth subject////////
  // color correction
  if (marks[11] > 39) {
    MarkBar[11].style.backgroundColor = "green";
  } else {
    MarkBar[11].style.backgroundColor = "red";
  }
  //determin state ment
  //worte both
  if (marks[9] > 0 && marks[10] > 0) {
    if (marks[11] > 39) {
      state[3].innerText = "You qualify for Exams";
    } else {
      state[3].innerText = "Unfortunately you do not qualify for exams";
    }
  } else if (marks[9] > 0 && marks[10] == 0) {
    //wrote test 1
    state[3].innerText =
      "You need to score more than " +
      Math.round(400 / 7 - (3 / 7) * marks[9]) +
      "% in Test 2 to qaulify for exams";
  } else if (marks[9] == 0 && marks[10] > 0) {
    //wrote test 2
    if (marks[10] < 15) {
      state[3].innerText = "Ngeke usakhava, You can't qualify";
    } else if (marks[10] > 58) {
      state[3].innerText = "You qualify for Exams";
    } else {
      state[3].innerText =
        "You need to score more than " +
        Math.round(400 / 3 - (7 / 3) * marks[10]) +
        "% in Test 1 to qaulify for exams";
    }
  } else {
    //wrote none
    state[3].innerText = " ";
  }
}

let myIndex;
let PopUp = document.getElementById("popup");
let MainBar = document.getElementsByClassName("main-bar");
// add event listner to all
MainBar[0].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 0;
});

MainBar[1].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 1;
});

MainBar[3].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 3;
});

MainBar[4].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 4;
});

MainBar[6].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 6;
});

MainBar[7].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 7;
});

MainBar[9].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 9;
});

MainBar[10].addEventListener("click", () => {
  PopUp.style.display = "block";
  myIndex = 10;
});

//enter/change marks
let MarkEnter = document.getElementById("mark-enter");
document.getElementById("save").addEventListener("click", () => {
  marks[myIndex] = Number(MarkEnter.value);
  marks[2] = Math.round(marks[0] * 0.3 + marks[1] * 0.7);
  marks[5] = Math.round(marks[3] * 0.3 + marks[4] * 0.7);
  marks[8] = Math.round(marks[6] * 0.3 + marks[7] * 0.7);
  marks[11] = Math.round(marks[9] * 0.3 + marks[10] * 0.7);
  document.getElementById("mark-enter").value = "";

  localStorage.setItem("marks", JSON.stringify(marks));
  MarknColor();
  PopUp.style.display = "none";
  PlaySound()
});

//cancel
document.getElementById("cancel").addEventListener("click", () => {
  PopUp.style.display = "none";
  document.getElementById("mark-enter").value = "";
});

function PlaySound() {
  if (myIndex == 0 || myIndex == 1) {
    if (marks[2] > 39 ) {
      document.getElementById("clap").play();
    } else {
      document.getElementById("sad").play();
    }
  }  
 
  if (myIndex == 2 || myIndex == 4) {
    if (marks[5] > 39 ) {
      document.getElementById("clap").play();
    } else {
      document.getElementById("sad").play();
    }
  }

  if (myIndex == 6 || myIndex == 7) {
    if (marks[8] > 39 ) {
      document.getElementById("clap").play();
    } else {
      document.getElementById("sad").play();
    }
  }

  if (myIndex == 9 || myIndex == 10) {
    if (marks[11] > 39 ) {
      document.getElementById("clap").play();
    } else {
      document.getElementById("sad").play();
    }
  }

}