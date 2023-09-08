function renderNewForm(data){
    if(data.nextForm==2){
       const container = document.getElementById('form-container') ;
       container.innerHTML= 
       `<form id="form2" 
       action="/create-user/form2/${data.patientId}" 
       
       method="post">
       <div id="patient">
           <h1>Patient</h1>
           <label for="Aadhar Number">Aadhar Number*</label> <br/>
           <input name="patientAadhar" type="string" required placeholder="5008 6643 1234">
           
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="patientAadhar" name="avatar" class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-patientAadhar"></sub></span>
           <br/><br/>
           <label for="Aadhar Number">PAN Number*</label> <br/>
           <input name="patientPan" type="string" required placeholder="5008 6643 1234">
           
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="patientPan" name="avatar"class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-patientPan"></sub></span>
       </div>

       <div id="policyHolder">
           <h1>Policy Holder</h1>
           <label for="Aadhar Number">Aadhar Number*</label> <br/>
           <input name="policyHolderAadhar" type="string" required placeholder="5008 6643 1234">
           
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="policyHolderAadhar" name="avatar" class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-policyHolderAadhar"></sub></span>
           <br/> <br/>
           <label for="Aadhar Number">PAN Number*</label> <br/>
           <input name="policyHolderPan" type="string" required placeholder="5008 6643 1234">
           
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="policyHolderPan" name="avatar"class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-policyHolderPan"></sub></span>
           <br/> <br/>
           <label for="Aadhar Number">Upload Cancelled Cheque*</label> 
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="cancelledCheque" name="avatar"class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-cancelledCheque"></sub></span>
           <br/> <br/>
           <label for="Aadhar Number">Upload Bank Statement*&nbsp;&nbsp;&nbsp;</label> 
           <span class="fileUploadContainer">
               <label for="fileUploadButton">Upload</label>
               <input data-idnumber=${data.patientId} id="bankStatement" name="avatar"class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-bankStatement"></sub></span>
           <br/> <br/>
           <label for="Aadhar Number">Upload Prescription* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
           <span class="fileUploadContainer">
               <label for="prescription">Upload</label>
               <input data-idnumber=${data.patientId} id="prescription" name="avatar"class="fileUploadButton" type="file" required>
           </span>
           <span><sub id="showError-prescription"></sub></span>
       </div>

       <button>Submit and next</button>

   </form>`
      
        document.getElementById('progress-line').style.background = "linear-gradient(to right, #60fb60 0%, #60fb60 35%, grey 35%, grey 100%)"
        
        const circle1 = document.querySelector('.circle1');

        circle1.style.backgroundColor="#60fb60";
        circle1.style.borderColor="#60fb60"; 

    }

    $('.fileUploadButton').each(function(){
        $(this).on('change',function(){
           
            const formData = new FormData();
            

            formData.append('avatar',this.files[0]);
            formData.append('id',this.id);
    
            const feedback = document.getElementById(`showError-${this.id}`)

            $.ajax({
                type: "POST",
                url: `/file-upload/${this.getAttribute("data-idnumber")}`,
                data: formData, // Use the FormData object
                processData: false, // Prevent jQuery from processing the data
                contentType: false, // Prevent jQuery from setting a content type
                success: function (response) {
                    
                   feedback.innerText="Success";
                   feedback.style.color= "#60fb60"
                },
                error : function (response) { 
                    feedback.innerText="Error";
                   feedback.style.color= "red"
                 }
                })
    
        })
    })
}

const form1 = $('#form1')
form1.submit(function (e) { 
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/create-user/form1",
        data: form1.serialize(),
        
        success: function (response) {
            console.log(response);
            renderNewForm(response);
        }
    });
});




