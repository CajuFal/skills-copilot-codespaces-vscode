function skillmember() {
    var member = document.getElementById("member").value;
    var member = parseInt(member);
    if (member < 1 || member > 10) {
        alert("Please enter a number between 1 and 10");
    }
    else {
        var skill = document.getElementById("skill").value;
        var skill = parseInt(skill);
        var sum = member * skill;
        document.getElementById("sum").innerHTML = "Total Skill: " + sum;
    }
}