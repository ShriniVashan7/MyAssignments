let testType="Sanity"

switch(testType){
    case "smoke":
        console.log("You have selected Smoke testing")
        break
    case "Sanity":
        console.log("You have selected Sanity testing")
        break
    case "Regression":
        console.log("You have selected Regression testing")
        break

    default:
        console.log("Default test Smoke is selected")
}

let launchBrowser="Chrome";
if(launchBrowser==="Chrome")
{
    console.log("Chrome broser is launched")
}
else if(launchBrowser==="Firefox")
{
    console.log("Firefox browser is launched")
}
else
{
    console.log("Default Browser")
}