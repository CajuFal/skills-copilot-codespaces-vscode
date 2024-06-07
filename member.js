function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var skillsList = skills.split(",");
    var skillsListLength = skillsList.length;
    var skillsListString = "";
    for (var i = 0; i < skillsListLength; i++) {
        skillsListString += "<li>" + skillsList[i] + "</li>";
    }
    document.getElementById("skillsList").innerHTML = skillsListString;
    document.getElementById("memberName").innerHTML = member;
}