document.addEventListener("DOMContentLoaded",()=>{
    const loginsection=document.gettElementById("loginsection");
    const crudsection=document.getElementById("crudSection");
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
            loginsection.style.display="none";
            crudsection.style.display="block";
            

        }

    }



})