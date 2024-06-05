const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Function to convert a file to base64 format
function getBase64(file) {
  return new Promise(function (resolve, reject) {
      console.log("Reading file:", file.name);
      var reader = new FileReader();
      reader.onload = function () {
          console.log("File read:", file.name);
          var base64String = reader.result.split(',')[1];
          resolve(base64String);
      };
      reader.onerror = function (error) {
          reject(error);
      };
      reader.readAsDataURL(file);
  });
}

document.getElementById("myfile").addEventListener("change", function() {
  // Call sendEmail function when files are selected
  sendEmail();
});

function sendEmail() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var filesInput = document.getElementById("myfile");
  var files = filesInput.files;
  var formData = new FormData();

  for (var i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
  }

  // Create an array to store promises for base64 encoding each file
  var promises = [];

  // Iterate over each file and create a promise for base64 encoding
  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      promises.push(getBase64(file));
  }

  // Wait for all promises to resolve
  Promise.all(promises).then(function (encodedFiles) {
      var attachments = [];
      // Create attachments array with base64 encoded files
      encodedFiles.forEach(function (encodedFile, index) {
          attachments.push({
              name: files[index].name,
              data: encodedFile
          });
      });

      // Send email with attachments
      Email.send({
          Host: "smtp.elasticemail.com",
          Username: "mmitchell3368@gmail.com",
          Password: "770085E2559A0E432904016B59EF5B2CF532", 
          To: "petershandymanwork@gmail.com",
          From: "mmitchell3368@gmail.com",
          Subject: "Contact Me Enquiry",
          Body: `
          First Name: ${firstName}<br>
          Last Name: ${lastName}<br>
          Email: ${email}<br>
          Phone: ${phone}<br>
          Subject: ${subject}<br>
          Message: ${message}<br>
          `,
          Attachments: attachments
      }).then(
          // Success message
          message => {
              console.log("Message sent successfully!", message);
              alert("Message sent successfully!");
          }
      ).catch(error => {
          // Error sending email
          console.error("Error sending email:", error);
          alert("Error occurred while sending message. Please try again later.");
      });
  }).catch(error => {
      // Error encoding files
      console.error("Error encoding files:", error);
      // Don't show alert here to avoid interference with success message
  });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  sendEmail();
});

