// ********************  TASK 03 *********************
var person_name1 = "Clay Jensen";

console.log("Uppercase: ", person_name1.toUpperCase());
console.log("Lowercase: ", person_name1.toLowerCase());

// create a function that convert name into titleCase
function display_titlecase_name()
{
    const newName = person_name1.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ");
    console.log("Titlecase: ", person_name1);
}

//invoke function
display_titlecase_name();

// ********************  TASK 03 *********************