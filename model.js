const model  = {
    "monChinh":null,
    "monCanh" : null,
    "monRau" : null   
}

model.saveMonChinh = function(allFood){
    for(let food of allFood) {
        if(food.id == "5uaBOwRQcaMm7RghiV05"){
            model.monChinh = food;
        }
    }
}
model.saveMonCanh = function(allFood){
    for(let food of allFood) {
        if(food.id == "7Qc8rOsrhIyeCObdZDJ1"){
            model.monCanh = food;
        }
    }
}
model.saveMonRau = function(allFood){
    for(let food of allFood) {
        if(food.id == "A1h8aoJkDr5o0HCDE3Fh"){
            model.monRau = food;
        }
    }
}