var students = [{
    name: "Lucy",
    isMarried: false,
}, {
    name: "Tara",
    isMarried: true
}, {
    name: "Ava",
    isMarried: true
}, {
    name: "Emily",
    isMarried: false
}, {
    name: "Scarlett",
    isMarried: true
}];

// "Tara, do you want to have kids?"
// "But you are happy, right Lucy?"
var container = document.createElement("ul");

var template = "";
var template = "";
students.forEach(function (student) {
    if (student.isMarried) {
        template += "<li><strong>" + student.name + "</strong>, do you want to have kids?<button><i class='fa fa-trash'></i></button></li>"
    } else {
        template += "<li>But you are happy, right <strong>" + student.name + "</strong>?<button><i class='fa fa-trash'></i></button></li>"
    }
});

container.innerHTML = template;
document.body.appendChild(container)

// students.forEach(function (student) {
//     if (student.isMarried) {
//         console.log(student.name + ", do you want to have kids?");
//     } else {
//         console.log("But you are happy, right " + student.name + "?");
//     }
// });



// function studentss(student) {
//     if (student.isMarried) {
//         console.log(student.name + ", do you want to have kids?");
//     } else {
//         console.log("But you are happy, right " + student.name + "?");
//     }
// }

// students.forEach(studentss)



// "Tara, do you want to have kids?"
// "But you are happy, right Lucy?"


// css
// //html
// <button>Change color</button>

// .circle {
//     width: 120px;
//     height: 120px;
//     background-color: green;
//     border-radius: 50%;
//   }


//   var circle = document.createElement("div");
//   circle.className = "circle";

//   document.body.appendChild(circle);


//   var btn = document.querySelector("button");


//   btn.addEventListener("click", function() {
//     // logic

//     circle.style.backgroundColor = "red";
//     circle.style.width = "85px";
//     circle.style.height = "85px";
//   });