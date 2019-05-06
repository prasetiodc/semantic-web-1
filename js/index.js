function hideMenu(){
    $('#home').hide()
    $('#biodata').hide()
    $('#education').hide()
    $('#experience').hide()
    $('#personalSkills').hide()
    $('#technicalSkills').hide()
}

function nonActiveMenu(){
    let biodataMenu = document.getElementById("biodataMenu")
    biodataMenu.classList.remove("active")
    let educationMenu = document.getElementById("educationMenu")
    educationMenu.classList.remove("active")
    let experienceMenu = document.getElementById("experienceMenu")
    experienceMenu.classList.remove("active")
    let personalSkillsMenu = document.getElementById("personalSkillsMenu")
    personalSkillsMenu.classList.remove("active")
    let technicalSkillsMenu = document.getElementById("technicalSkillsMenu")
    technicalSkillsMenu.classList.remove("active")
}

function biodata(){
    nonActiveMenu()
    let biodataMenu = document.getElementById("biodataMenu")
    biodataMenu.classList.add("active")

    hideMenu()
    $('#biodata').show()
}

function education(){
    nonActiveMenu()
    let element = document.getElementById("educationMenu")
    element.classList.add("active")

    hideMenu()
    $('#education').show()
}

function experience(){
    nonActiveMenu()
    let experienceMenu = document.getElementById("experienceMenu")
    experienceMenu.classList.add("active")

    hideMenu()
    $('#experience').show()
}

function personalSkills(){
    nonActiveMenu()
    let personalSkillsMenu = document.getElementById("personalSkillsMenu")
    personalSkillsMenu.classList.add("active")
    
    hideMenu()
    $('#personalSkills').show()
}

function technicalSkills(){
    nonActiveMenu()
    let technicalSkillsMenu = document.getElementById("technicalSkillsMenu")
    technicalSkillsMenu.classList.add("active")
    
    hideMenu()
    $('#technicalSkills').show()
}

$(document).ready(function(){
    hideMenu()
    $('#home').show()
})