let rusky ={
    person:["я","ты","он","мы","Вы","они"],
    verbos: [
        {
            verbo : "идти́",
            translation: "to go, to walk"
        },
        {
            verbo : "рабо́тать",
            translation: "to work, to function"
        },
        {
            verbo : "име́ть",
            translation: "to have, to possess"
        },
        {
            verbo : "би́ть",
            translation: "to beat"
        },
        {
            verbo : "зва́ть",
            translation: "call, to invite"
        },
        {
            verbo : "жи́ть",
            translation: "to live, to reside"
        },
        {
            verbo : "сказа́ть",
            translation: "to say, to tell"
        },
        {
            verbo : "говори́ть",
            translation: "to say, to tell"
        },
        {
            verbo : "зна́ть",
            translation: "to know"
        },
        {
            verbo : "хоте́ть",
            translation: "to want, to desire"
        },
        {
            verbo : "е́сть",
            translation: "to eat"
        },
        {
            verbo : "ве́рить",
            translation: "to believe, to have faith, to trust"
        },
        {
            verbo : "понима́ть",
            translation: "to understand, to realize"
        },
    ],
//##################    VERBOS AND VERBS INDEXES HAVE TO MATCH    ##########################
    verbs:[
        {
            "я" : "иду́",
            "ты" : "идёшь",
            "он" : "идёт",
            "мы" : "идём",
            "Вы" : "идёте",
            "они" : "иду́т"
        },
        {
            "я" : "рабо́таю",
            "ты" : "рабо́таешь",
            "он" : "рабо́тает",
            "мы" : "рабо́таем",
            "Вы" : "рабо́таете",
            "они" : "рабо́тают"
        },
        {
            "я" : "име́ю",
            "ты" : "име́ешь",
            "он" : "име́ет",
            "мы" : "име́ем",
            "Вы" : "име́ете",
            "они" : "име́ют"
        },
        {
            "я" : "бью́",
            "ты" : "бьёшь",
            "он" : "бьёт",
            "мы" : "бьём",
            "Вы" : "бьёте",
            "они" : "бью́т"
        },
        {
            "я" : "зову́",
            "ты" : "зовёшь",
            "он" : "зовёт",
            "мы" : "зовём",
            "Вы" : "зовёте",
            "они" : "зову́т"
        },
        {
            "я" : "живу́",
            "ты" : "живёшь",
            "он" : "живёт",
            "мы" : "живём",
            "Вы" : "живёте",
            "они" : "живу́т"
        },
        {
            "я" : "скажу́",
            "ты" : "ска́жешь",
            "он" : "ска́жет",
            "мы" : "ска́жем",
            "Вы" : "ска́жете",
            "они" : "ска́жут"
        },
        {
            "я" : "говорю́",
            "ты" : "говори́шь",
            "он" : "говори́т",
            "мы" : "говори́м",
            "Вы" : "говори́те",
            "они" : "говоря́т"
        },
        {
            "я" : "зна́ю",
            "ты" : "зна́ешь",
            "он" : "зна́ет",
            "мы" : "зна́ем",
            "Вы" : "зна́ете",
            "они" : "зна́ют"
        },
        {
            "я" : "хочу́",
            "ты" : "хо́чешь",
            "он" : "хо́чет",
            "мы" : "хоти́м",
            "Вы" : "хоти́те",
            "они" : "хотя́т"
        },
        {
            "я" : "е́м",
            "ты" : "е́шь",
            "он" : "е́ст",
            "мы" : "еди́м",
            "Вы" : "еди́те",
            "они" : "едя́т"
        },
        {
            "я" : "ве́рю",
            "ты" : "ве́ришь",
            "он" : "ве́рит",
            "мы" : "ве́рим",
            "Вы" : "ве́рите",
            "они" : "ве́рят"
        },
        {
            "я" : "понима́ю",
            "ты" : "понима́ешь",
            "он" : "понима́ет",
            "мы" : "понима́ем",
            "Вы" : "понима́ете",
            "они" : "понима́ют"
        },
    ],
    getQuestion:function (){
        let = rndNumber = Math.floor(Math.random()*rusky.verbos.length);
        //####################################################################
        document.getElementById("i_p_s").textContent=rusky.verbs[rndNumber].я;
        document.getElementById("ii_p_s").textContent=rusky.verbs[rndNumber].ты;
        document.getElementById("iii_p_s").textContent=rusky.verbs[rndNumber].он;
        document.getElementById("i_p_pl").textContent=rusky.verbs[rndNumber].мы;
        document.getElementById("ii_p_pl").textContent=rusky.verbs[rndNumber].Вы;
        document.getElementById("iii_p_pl").textContent=rusky.verbs[rndNumber].они;
        //####################################################################
        let = rndPerson = Math.floor(Math.random()*rusky.person.length);
        document.getElementById("question").textContent=rusky.person[rndPerson];
        
        document.getElementById("user_choices").style.display="block";
        document.getElementById("answer").style.display="none";
        document.getElementById("conjugate").textContent="Conjugate the verb "+ rusky.verbos[rndNumber].verbo;
        document.getElementById("transl").textContent="\(" + rusky.verbos[rndNumber].translation + "\)";
        return;
    },
    getAnswer:function (answer){
        const userInput = Object.values(rusky.verbs[rndNumber])[answer];
        console.log(userInput);
        
        console.log(Object.values(rusky.verbs[rndNumber])[rndPerson]); 
        
        if (userInput === Object.values(rusky.verbs[rndNumber])[rndPerson]) {
            document.getElementById("answer").textContent="YES!!!"+"\n"+Object.keys(rusky.verbs[rndNumber])[rndPerson]+" " + Object.values(rusky.verbs[rndNumber])[rndPerson];
            document.getElementById("answer").style.display="block";
        } else {
            document.getElementById("answer").textContent="The right answer is..."+"\n"+Object.keys(rusky.verbs[rndNumber])[rndPerson]+" " + Object.values(rusky.verbs[rndNumber])[rndPerson];
            document.getElementById("answer").style.display="block";
        }
    },
}