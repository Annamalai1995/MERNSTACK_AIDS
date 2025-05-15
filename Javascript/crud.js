document.addEventListener("DOMContentLoaded",()=>{
    const loginSection=document.gettElementById("loginsection");
    const crudSection=document.getElementById("crudSection");
    const loginForm=document.getElementById("loginForm");
    const logoutBtn=document.getElementById("logoutBtn");
    const studenForm=document.getElementById("studentForm");
    const studentList=document.getElementById("studentList");

    const studentName=document.getElementById("studentName");
    const rollno=document.getElementById("rollno");
    const department=document.getElementById("department");
    const cgpa=document.getElementById("cgpa");
    const gender=document.getElementById("gender")
    
    function checkLogin()
    {
        if(sessionStorage.getItem("loggedInuser"))
        {
            loginSection.style.display="none";
            crudSection.style.display="block";
            loadStudents();
        }
        else{
            loginSection.style.display="none";
            crudSection.style.display="block";

        }

    }
    //LoginForm

    loginForm.addEventListener("submit",()=>{
        const username=document.getElementById("username").value;
        const password=document.getElementById("password").value;
        if(username=="Annamalai" && password=="123")
        {
            sessionStorage.setItem("loggedInuser",username);
            checkLogin();
        }
        else
        {
            alert("Invalid username")
        }

    });
    //logout
    logoutBtn.addEventListener("click",()=>
    {
        sessionStorage.removeItem("loggedInuser");
        checkLogin();
    })
//session storage load student data
// JSON-JAVSCRIPT OBJECT NOTATION
    // KEY AND VALUES
    // "name":"ANnamalai"
    // JSON.parse=json->javascript object converted
    // {
    //     name:valu
    //     name:balu
    
    // }
    // JSON STRINGFY:
    // {
      
    //     :"name":"ANnamalai"
    // }
//for 
//for in
//for in range
//for Each loop
function loadStudents()
{
    studentList.innerHTML="";
    const students=JSON.parse(sessionStorage.getItem("students"))
    students.forEach((student,index)=>
    {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${student.name}</td>
        <td>${student.rollno}</td>
        <td>${student.department}</td>
        <td>${student.cgpa}</td>
        <td>${student.gender}</td> 
        <td>
            <button class="btn btn-info" onclick="editSudent(${index})">EDIT</button
            <button class='btn-btn-danger'onclick="deleteStudent(${index})">DELETE</button>

        </td>
        `;
        studentList.appendChild(row);

    })

}



})