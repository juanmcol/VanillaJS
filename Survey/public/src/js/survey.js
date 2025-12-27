/* const body = document.body;
body.style.color = "green"; */

/*
TO DO

make a function to create a survey
make a function to show a survey/form
make a database holding all surveys as objects, survey class

make a user login page
hold all users in a database
give users a points balance
add points for completing surveys

make a redeem page to use points for rewards/cash
create a database filled with rewards to trade in with points
make a points to cash page
make a function to transfer points to bank account

allow users to create their own custom surveys

*/

// create a survey

class Survey {
    constructor(title) {
        this.title = title;
    }

    questions = [];
    points = 0;

    set points(amount) {
        this.points = amount;
    }

    addQuestion(question, inputType, answers) {
        this.questions.push([question, inputType, answers]);
    }

    removeQuestion(number) {
        number -= 1;
        let question = this.questions.findIndex(number);
        if (number > -1 && number < this.questions.length) {
            this.questions.splice(question, 1)
        }
    }
}

const test = new Survey("Test Title");
test.addQuestion("test question 1", "radio", ["answer 1", "answer 2"]);
test.addQuestion("test question 2", "checkbox", ["check 1", "check 2"]);
test.addQuestion("test question 3", "text", [""]);
test.points = 100;

function displaySurvey(survey) {
    const body = document.body;
    const title = document.createElement("h1");
    const points = document.createElement("h2");
    title.textContent = survey.title;
    points.textContent = survey.points + " Points";
    body.appendChild(title);
    body.appendChild(points);

    const form = document.createElement("form");
    form.action = "";
    form.method = "get";
    form.id = "survey";
    body.appendChild(form);

    for (let i = 0; i < survey.questions.length; ++i) {
        const fieldset = document.createElement("fieldset");
        
        const legend = document.createElement("legend");
        legend.textContent = `Question ${i + 1}`;
        fieldset.appendChild(legend);
        
        const question = document.createElement("h3");
        question.textContent = survey.questions[i][0];
        fieldset.appendChild(question);
        
        const answers = survey.questions[i][2].length;
        for (let a = 0; a < answers; ++a) {
            const type = survey.questions[i][1];
            const input = document.createElement("input");
            if (type === "radio") {
                input.type = "radio";
            } else if (type === "checkbox") {
                input.type = "checkbox";
            } else if (type === "text") {
                input.type = "text";
            }
            input.name = "question";
            input.id = survey.questions[i][2][a];
            
            if (input.type != "checkbox") {
                input.required = "true";
            }

            const label = document.createElement("label");
            label.htmlFor = survey.questions[i][2][a];
            label.textContent = survey.questions[i][2][a];

            fieldset.appendChild(input);
            fieldset.appendChild(label);
        }

        form.appendChild(fieldset);
    }

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.name = "submit";
    submit.id = "submit";
    submit.value = "submit";
    form.appendChild(submit);
}

displaySurvey(test);

const body = document.body;
body.style.color = "green";