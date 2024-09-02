
const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = dropArea.querySelector('.button');
let fileInput = dropArea.querySelector('input');
const listContainer = document.querySelector('.list')

var uploadedFiles = [];

//procházet soubory
button.onclick = () => {
  fileInput.click();
};

fileInput.addEventListener('change', function () {  

  [...fileInput.files].forEach((file)=>{
    uploadFile(file);
  });  
  //displayFiles();
});

// soubory nad přetažítkem
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  
  dragText.textContent = 'Pro nahrání pusťě zde';
  // console.log('File is inside the drag area');
});

// soubory opustí přetažítko
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  // console.log('File left the drag area');
  dragText.textContent = 'přetáhnout & pustit zde';
});

// soubory dropnuty
dropArea.addEventListener('drop', (event) => {
  event.preventDefault();

  [...event.dataTransfer.items].forEach((item) => {    
    const file = item.getAsFile();
    uploadFile(file);
  });

  dropArea.classList.remove('active');
  // console.log('File left the drag area');
  dragText.textContent = 'zde přetáhnout & pustit';

});



// upload file function
function uploadFile(file){  

    var li = document.createElement('li'); 
    li.innerHTML = `
    <div class="row">
        <div class="col-md-2">
            <img style="width: 40px; height: 50px;" src="${iconSelector(file)}" alt="">
        </div>
        <div class="col-md-8">
            <div class="file-name">
                <div class="name">${file.name}</div>
            </div>
            <div class="file-progress">
                <span></span>
            </div>
            <div class="file-size">${(file.size/(1024*1024)).toFixed(2)} MB</div>
        </div>
        <div class="col-md-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="cross" height="20" width="20"><path d="m5.979 14.917-.854-.896 4-4.021-4-4.062.854-.896 4.042 4.062 4-4.062.854.896-4 4.062 4 4.021-.854.896-4-4.063Z"/></svg>

        </div>
    </div>
    `;

// on file <li> delete
    li.querySelector('.cross').onclick = () => {
        li.remove();
        const index = uploadedFiles.indexOf(file);
        if(index > -1){
            uploadedFiles.splice(index, 1);
        }
    };

    uploadedFiles.push(file);
    listContainer.prepend(li);
    console.log(uploadedFiles.length);
}


// výběr ikonky náhledu
function iconSelector(file){

    if(file.name.toLowerCase().includes('.obj') || file.name.toLowerCase().includes('.fbx') || file.name.toLowerCase().includes('.stp')|| file.name.toLowerCase().includes('.blend')){

        return 'images/3d.png';

    }else{
        
        var splitType = (file.type.split('/')[0] == 'application') ? file.type.split('/')[1] : file.type.split('/')[0];
    
        if(splitType == 'image'){    
            let url = window.URL.createObjectURL(file);
            return url
        }else
            return 'images/' + splitType + '.png'
    }

}





//POST Form
const thisForm = document.getElementById('poptavkaForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if(document.getElementById("from").value ==0)
    {    
        alert("Zadeje prosím kontakt");
    }
    else 
    {      
        var form = new FormData(thisForm);

        uploadedFiles.forEach((item)=>{
            form.append('files', item, item.name);

        });

        //const json = JSON.stringify(Object.fromEntries(formData));
        const response = await fetch('https://janrucil.dev/zigo/api/webinquiries', {
            method: 'POST',
            body: form
        });

        if(await response.status == 200){
            alert("Vaši poptávku jsme přijali a v brzké době se Vám ozveme!");    
            window.location.reload();
        }   
    }
});



