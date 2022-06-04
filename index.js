function getQuestion(){
    window.rndNumber = Math.floor(Math.random()*verbos.length);
    //####################################################################
    document.getElementById("i_p_s").textContent=verbs[rndNumber].eu;
    document.getElementById("ii_p_s").textContent=verbs[rndNumber].tu;
    document.getElementById("iii_p_s").textContent=verbs[rndNumber].ele;
    document.getElementById("i_p_pl").textContent=verbs[rndNumber].nos;
    document.getElementById("ii_p_pl").textContent=verbs[rndNumber].vos;
    document.getElementById("iii_p_pl").textContent=verbs[rndNumber].eles;
    //####################################################################
    window.rndPerson = Math.floor(Math.random()*person.length);
    document.getElementById("question").textContent=person[rndPerson];
    
    document.getElementById("user_choices").style.display="block";
    document.getElementById("answer").style.display="none";
    document.getElementById("conjugate").textContent="Conjugate the verb "+ verbos[rndNumber].verbo;
}
function getAnswer(answer){
    const userInput = Object.values(verbs[rndNumber])[answer];
    console.log(userInput);
    
    console.log(Object.values(verbs[rndNumber])[rndPerson]); 
    
    if (userInput === Object.values(verbs[rndNumber])[rndPerson]) {
        document.getElementById("answer").textContent="YES!!!"+"\n"+Object.keys(verbs[rndNumber])[rndPerson]+" " + Object.values(verbs[rndNumber])[rndPerson];
        document.getElementById("answer").style.display="block";
    } else {
        document.getElementById("answer").textContent="The right answer is..."+"\n"+Object.keys(verbs[rndNumber])[rndPerson]+" " + Object.values(verbs[rndNumber])[rndPerson];
        document.getElementById("answer").style.display="block";
    }
}

