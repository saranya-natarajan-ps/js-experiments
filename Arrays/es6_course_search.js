
function prog200(course){
    if (course.CourseId == "PROG200"){
        return true
    }
    else{
        return false
    }
}

function proj500(course){
    if (course.CourseId == "PROJ500"){
        return true
    }
    else{
        return false
    }
}

function lessFee(course){
    if (parseFloat(course.Fee) <= 50.00){
        return true
    }
    else{
        return false
    }
}

function classRoom(course){
    if (course.Location == "Classroom 1"){
        return true
    }
    else{
        return false
    }
}
let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

let progstart = courses.find(prog200);
if (progstart != undefined){
    console.log("PROG200 starts at" + progstart.StartDate)
}

let findtitle = courses.find(proj500);
if (findtitle != undefined){
    console.log("Title of the PROJ500 course is " + findtitle.Title)
}

let lessthanfifty = courses.filter(lessFee);
if (lessthanfifty.length > 0){
    let titles = "";
    for (let j=0;j<lessthanfifty.length;j++){
        titles = titles + lessthanfifty[j].Title
        if (j != lessthanfifty.length - 1){
            titles = titles + ", "
        }
    }
    console.log("Titles which are within 50.00 are "+ titles)
}

let findclassroom = courses.filter(classRoom);
let classlength = findclassroom.length;
if (classlength > 0){
    let courseIds = "";
    for (k=0;k<classlength;k++){
        courseIds = courseIds + findclassroom[k].CourseId
        if (k != classlength - 1){
            courseIds = courseIds + ", ";
        }
    }
    console.log("Classes meet in classroom one are "+courseIds)
}