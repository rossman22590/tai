
const emailButton = document.getElementById('fetch-email-btn')
const output = document.querySelector('.api-output')
const loadingButton = document.getElementById("loadingButton")
const selectFeedbackForm = document.getElementById("feedback-form")
const outputContainer = document.getElementById("output-container")

// Function for EmailGenie page
if (emailButton) {
    emailButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        loadingButton.scrollIntoView({ behavior: 'smooth' })
        const getSelectedMember = document.querySelector('input[name="communityMembers"]:checked')
        // console.log(getSelectedMember)
        // console.log("Button clicked")
        const text = document.getElementById("textareaspace").value
        // console.log(text)
        const prompt = `you are a helpful, email-writing bot with a professional tone. I say please write me a correctly formatted email from a teacher to a ${getSelectedMember.id} about the subject of: ${text}. You reply:`
        // console.log(prompt)
    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/completions`,
                {
                    body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 200}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                console.log(text)
                if (response.ok) {
                    response.json().then((json) => {
                        output.textContent = json.choices[0].text.trim();
                    });
                }
                
                outputContainer.style.display = 'block';
                loadingButton.style.display = 'none';
                selectFeedbackForm.style.display = 'block';
                outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
}

// Function for IdeaSpark page
const ideaButton = document.getElementById('fetch-idea-btn')
if (ideaButton) {
    ideaButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        loadingButton.scrollIntoView({ behavior: 'smooth' })
        const getStudentAge = document.querySelector('input[name="studentAge"]:checked')
        // console.log(getStudentAge)
        const getLessonDuration = document.querySelector('input[name="lessonDuration"]:checked')
        // console.log(getLessonDuration)
        // console.log("Button clicked")
        const text = document.getElementById("textareaspace").value
        // console.log(text)
        const prompt = `you are a helpful, bot with an upbeat tone who generates ideas for lesson activities so that teachers can use them. 
        I say please write me 5 activities for students aged ${getStudentAge.id} that would help students to learn: ${text}. Each activity should not take more than ${getLessonDuration.id}.
        Use bulletpoints to separate the activities. 
        You reply:`
        // console.log(prompt)
        
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
        
        const response = await fetch(
                `https://api.openai.com/v1/completions`,
                {
                    body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 800}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                console.log(text)
                if (response.ok) {
                    response.json().then((json) => {
                        output.textContent = json.choices[0].text.trim();
                        
                    });
                }
                outputContainer.style.display = 'block';
                loadingButton.style.display = 'none';
                selectFeedbackForm.style.display = 'block';
                selectFeedbackForm.scrollTop = selectFeedbackForm.scrollHeight;
                outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
        
            // console.log("Completed!");
    
        });
}

// Function for LessonLaunch page
const lessonButton = document.getElementById('fetch-lesson-btn')
if (lessonButton) {
    lessonButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        loadingButton.scrollIntoView({ behavior: 'smooth' })
        const getStudentAge = document.querySelector('input[name="studentAge"]:checked')
        // console.log(getStudentAge)
        const getLessonDuration = document.querySelector('input[name="lessonDuration"]:checked')
        // console.log(getLessonDuration)
        // console.log("Button clicked")
        const text = document.getElementById("textareaspace").value
        // console.log(text)
        const prompt = `you are a helpful, lesson-writing bot with an upbeat tone. 
        I say please write me an inventive, active and fun lesson plan lasting ${getLessonDuration.id} for students aged ${getStudentAge.id} about the subject of: ${text}. 
        You reply:`
        // console.log(prompt)
        
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
        
        const response = await fetch(
                `https://api.openai.com/v1/completions`,
                {
                    body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 800}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                console.log(text)
                if (response.ok) {
                    response.json().then((json) => {
                        output.textContent = json.choices[0].text.trim();
                        
                    });
                }
                outputContainer.style.display = 'block';
                loadingButton.style.display = 'none';
                selectFeedbackForm.style.display = 'block';
                selectFeedbackForm.scrollTop = selectFeedbackForm.scrollHeight;
                outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
        
            // console.log("Completed!");
    
        });
}

// Function for CommentCraft page
const commentButton = document.getElementById('fetch-comment-btn')
if (commentButton) {
    commentButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        loadingButton.scrollIntoView({ behavior: 'smooth' })
        const getAge = document.querySelector('input[name="studentAge"]:checked')
        // console.log(getAge)
        const getAbility = document.querySelector('input[name="abilityLevel"]:checked')
        // console.log(getAbility)
        const getWordCount = document.querySelector('input[name="wordCount"]:checked')
        // console.log(getWordCount)
        const getPronouns = document.querySelector('input[name="pronouns"]:checked')
        // console.log(getPronouns)
        // console.log("Button clicked")
        const studentName = document.getElementById("nameInput").value
        // console.log(studentName)
        const strengths = document.getElementById("strengthInput").value
        // console.log(strengths)
        const improvements = document.getElementById("improvementInput").value
        // console.log(improvements)
        const prompt = `you are a helpful, report card-writing bot with a professional and warm tone. 
        I say please write me a report card comment that is around ${getWordCount.id} words long 
        for a student who is in ${getAge.id}. Their name is ${studentName} and their pronouns are ${getPronouns.id}. Their academic ability is ${getAbility.id}, their strengths are ${strengths} and their weaknesses are ${improvements}.`
        
        // console.log(prompt)
        
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )

        const response = await fetch(
                `https://api.openai.com/v1/completions`,
                {
                    body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 200}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                
                if (response.ok) {
                    response.json().then((json) => {
                        output.textContent = json.choices[0].text.trim();
                    });
                }
                outputContainer.style.display = 'block';
                loadingButton.style.display = 'none';
                selectFeedbackForm.style.display = 'block';
                selectFeedbackForm.scrollTop = selectFeedbackForm.scrollHeight;
                outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
        
            // console.log("Completed!");
    
        });
    
}




// Function to copy output to clipboard. N.B. User must enable copying in their browser
function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(function(x) {
        // alert("Copied to clipboard: " + copyText.value);
        alert("Copied to clipboard: ");
    });
}    

