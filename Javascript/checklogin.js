window.onload=()=>
{

    const user=localStorage.getItem("username");
    if(user)
    {
        document.getElementById("loginForm").style.display="none";
        document.getElementById("welcome").style.display="block";
        document.getElementById("displayUser").textContent=user;





    }
};

function login()
{
    const username=document.getElementById("username").value;
    if(username)
    {
        localStorage.setItem("username",username);
        location.reload();
    }
}

function logout()
{
    localStorage.removeItem("username");
    location.reload();
}