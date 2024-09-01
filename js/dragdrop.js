const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = dropArea.querySelector('.button');
let fileInput = dropArea.querySelector('input');
const listContainer = document.querySelector('.list')

let file;
var files = [];

button.onclick = () => {
  fileInput.click();
};

// when browse
fileInput.addEventListener('change', function () {

  [...fileInput.files].forEach((file)=>{
    uploadFile(file);
  });  
  dropArea.classList.add('active');
  //displayFiles();
});

// when file is inside drag area
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  
  dragText.textContent = 'Pro nahrání pusťě zde';
  // console.log('File is inside the drag area');
});

// when file leave the drag area
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  // console.log('File left the drag area');
  dragText.textContent = 'zde přetáhnout & pustit';
});

// when file is dropped
dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  // console.log('File is dropped in drag area');

  files = event.dataTransfer.files;
  file = files[0]; // grab single file even of user selects multiple files
  // console.log(file);

  [...event.dataTransfer.items].forEach((item) => {
    
    const file = item.getAsFile();

    uploadFile(file);

  });

  dropArea.classList.remove('active');
  // console.log('File left the drag area');
  dragText.textContent = 'zde přetáhnout & pustit';

  //dropArea.classList.remove("drag-area-center");
  //displayFiles();
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

  listContainer.prepend(li);

  //li.querySelector('.cross').onclick = () => http.abort()
}
// find icon for file
function iconSelector(file){




  var splitType = (file.type.split('/')[0] == 'application') ? file.type.split('/')[1] : file.type.split('/')[0];

  if(splitType == 'image'){

    
    let url = window.URL.createObjectURL(file);

    return url
  }else
    return 'images/' + splitType + '.png'




}