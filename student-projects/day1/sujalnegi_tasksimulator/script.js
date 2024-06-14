function startTask()
{
    let character = document.getElementById("character").value;
    let task;
    if(character == "Heisenberg")
    {        
        task = "Cook Meth";
    }
    else if(character == "Marty Byrde")
    {
        task = "Launder money for the cartel";        
    }
    else if(character == "Saul Goodman")
    {
        task = "Save the cartel members from being prosecuted";
    }
    else if(character == "Harvey Specter")
    {
        task = "Save the firm!";
    } 
    else
    {
        task = "Select valid character";
    }
document.getElementById("task").innerHTML = "Task: "+ task;
document.getElementById("message").innerHTML = "Good luck!";
document.getElementById("task").classList.add("highlight");
                    
}