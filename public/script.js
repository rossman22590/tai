
const emailButton = document.getElementById('fetch-email-btn')
const output = document.querySelector('.api-output')
const loadingButton = document.getElementById("loadingButton")
const selectFeedbackForm = document.getElementById("feedback-form")
const outputContainer = document.getElementById("output-container")

// Function for EmailGenie page
if (emailButton) {
    emailButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        const getSelectedMember = document.querySelector('input[name="communityMembers"]:checked')
        console.log(getSelectedMember)
        console.log("Button clicked")
        const text = document.getElementById("textareaspace").value
        console.log(text)
        const prompt = `you are a helpful, email-writing bot with a professional tone. I say please write me a correctly formatted email from a teacher to a ${getSelectedMember.id} about the subject of: ${text}. You reply:`
        console.log(prompt)
    
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
                selectFeedbackForm.scrollTop = selectFeedbackForm.scrollHeight;
            });
    
            console.log("Completed!");
    
        });
}


// Function for LessonSpark page
const lessonButton = document.getElementById('fetch-lesson-btn')
if (lessonButton) {
    lessonButton.addEventListener('click', async () => {
        loadingButton.style.display = 'block'
        const getStudentAge = document.querySelector('input[name="studentAge"]:checked')
        console.log(getStudentAge)
        const getLessonDuration = document.querySelector('input[name="lessonDuration"]:checked')
        console.log(getLessonDuration)
        console.log("Button clicked")
        const text = document.getElementById("textareaspace").value
        console.log(text)
        const prompt = `you are a helpful, lesson-writing bot with an upbeat tone. 
        I say please write me a lesson plan lasting ${getLessonDuration.id} for students aged ${getStudentAge.id} about the subject of: ${text}. 
        You reply:`
        console.log(prompt)
        
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
            });
        
            console.log("Completed!");
    
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
    alert("Copied to clipboard: " + copyText.value);
    });
}    

