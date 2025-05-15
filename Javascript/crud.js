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






})