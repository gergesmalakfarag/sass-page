//2- // استرجاع البيانات من Local Storage عند تحميل الصفحة
window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      document.getElementById("username").value = savedUsername;
      document.getElementById("password").value = savedPassword;
      document.getElementById("rememberMe").checked = true; // نحدد الـ Checkbox إذا كان في بيانات محفوظة
    }
  };

  // حفظ البيانات في Local Storage عند الضغط على زر تسجيل الدخول
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
      // إذا اختار "تذكرني"، نحفظ البيانات في Local Storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // إذا ما اختارش "تذكرني"، نمسح البيانات من Local Storage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert("تم تسجيل الدخول بنجاح!");
  });



//3-
//Student
const student = {
    ID: 132,
    name: "gerges",
    Age: 20,
    Address: "minaalkamh",
    Skills: ["JavaScript", "HTML", "CSS", "React"],
    IsLeader: true,
  };
  console.log("Student data :");
  console.log("ID:", student.ID);
  console.log("Name:", student.name);
  console.log("age:", student.Age);
  console.log("addres:", student.Address);
  console.log(" Skills:", student.Skills.join(", "));
  console.log("IsLeader", student.IsLeader ? "true" : "false");
//4-
// students
const students = [
    {
      ID: 1,
      name: "ahmad",
      Age: 20,
      Address: "cairo",
      Skills: ["JavaScript", "HTML", "CSS", "React"],
      IsLeader: true,
    },
    {
      ID: 2,
      name:"ali",
      Age: 22,
      Address: "tanta",
      Skills: ["Python", "Data Analysis", "Machine Learning"],
      IsLeader: false,
    },
    {
      ID: 3,
      name: "hasan",
      Age: 21,
      Address: "lndan",
      Skills: ["Java", "Spring Boot", "SQL"],
      IsLeader: true,
    },
  ];
  
//   طباعة
  students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`skills: ${student.Skills.join(", ")}`);
    console.log("----------------///////-----------------------");
  });

