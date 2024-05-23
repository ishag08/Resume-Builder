
        const form = document.getElementById('resumeForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullname').value;
            const address = document.getElementById('address').value;
            const phoneNumber = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const tenthPercentage = document.getElementById('Xclass').value;
            const twelfthPercentage = document.getElementById('XIIclass').value;
            const technicalSkills = document.getElementById('technicalSkills').value;
            const hobbies = document.getElementById('hobbies').value;
            const company = document.getElementById('company').value;
            const position = document.getElementById('position').value;
            const duration = document.getElementById('duration').value;
            const linkedin = document.getElementById('linkedin').value;
            const twitter = document.getElementById('twitter').value;
            const photo = document.getElementById('photo').files[0];

            const reader = new FileReader();
            reader.onload = function(event) {
                const photoDataUrl = event.target.result;

                const resume = `
                    <h1 style="text-align: center; font-weight: bold;">Resume</h1>
                    <div>
                        <img src="${photoDataUrl}" alt="Passport size photograph" style="max-width: 150px;">
                        <h2>Personal Details</h2>
                        <p> <strong>${fullName}</strong><br>
                        <span> ${email}</span>
                       <br><span> ${address}</span><br>
                       Mobile Number:${phoneNumber}</p>
                       <h2>Education</h2>
                        <p><strong>10th Percentage:</strong> ${tenthPercentage}</p>
                        <p><strong>12th Percentage:</strong> ${twelfthPercentage}</p>
                        <p><strong>Technical Skills:</strong> ${technicalSkills}</p>
                        <p><strong>Hobbies:</strong> ${hobbies}</p>
                    </div>
                    <div>
                        <h3>Work Experience</h3>
                        <p><strong>Company:</strong> ${company}</p>
                        <p><strong>Position:</strong> ${position}</p>
                        <p><strong>Duration:</strong> ${duration}</p>
                    </div>
                    <div>
                        <h3>Social Media Handles</h3>
                        <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
                        <p><strong>Twitter:</strong> <a href="${twitter}">${twitter}</a></p>
                    </div>
                `;

                const resumeOutput = document.getElementById('resumeOutput');
                resumeOutput.innerHTML = resume;
            };

            reader.readAsDataURL(photo);
        });
    