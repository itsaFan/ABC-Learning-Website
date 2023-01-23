// selecting the elements from the DOM
let data = localStorage.getItem('usersData'),
    form = document.querySelector('form'),
    btnSubmit = document.querySelector('[type="submit"]'),
    btnCancel = document.querySelector('[type="button"]'),
    title = document.querySelector('#title'),
    email = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    add = document.querySelector('#add'),
    zcode = document.querySelector('#zcode'),
    scourse = document.querySelector('#scourse'),
    inputs = form.querySelectorAll('input'),
    tbody = document.querySelector('tbody'),
    tfoot = document.querySelector('tfoot'),
    btnClearData = document.querySelector('#btnClearData'),
    dataCount = document.querySelector('#dataCount'),
    search = document.querySelector('#search');

const saveUser = () => {
    data = data ?? [];
    if(data.findIndex(user => user.title === title.value) < 0){
        data = [...data, { title: title.value, email: email.value, phone: phone.value, add: add.value, zcode: zcode.value, scourse: scourse.value, }];
        localStorage.setItem('usersData', JSON.stringify(data));
        fetchUsersData();
        resetForm();
    } 
    else {
        alert('User Name Already Exist');
        title.focus();
    }
},
resetForm = () => {
    form.reset();
    btnSubmit.style.background = 'dodgerblue';
    btnSubmit.textContent = 'Save';
    btnSubmit.removeAttribute('data-id');
    title.focus();
},
fetchUsersData = () => {
    tfoot.innerHTML = '';
    tbody.innerHTML = '';
    data = JSON.parse(localStorage.getItem('usersData'));
    dataCount.textContent = data ? data.length : 0;
    if(data != null && data.length > 0){
        data.map((item, i) => {
            tbody.innerHTML += `<tr>
                <td>${++i}</td>
                <td>${item.title.toUpperCase()}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.add}</td>
                <td>${item.zcode}</td>
                <td>${item.scourse}</td>
                <td style="width: 115px;">
                    <button type="button" id="btnEditUser" onclick="previewUpdate(${--i}); openPopup()">Edit</button>
                    <button type="button" id="btnDeleteUser" onclick="deleteUser(${--i});">Delete</button>
                </td>                
            </tr>`;
        });
    }
    else{
        tfoot.innerHTML = `<tr>
                    <td colspan="7"><h1 style="background: #f1f1f1; color: #f00; text-align: center; padding: 40px;">No User Data</h1></td>
                </tr>
        `;
    }
},
previewUpdate = i => {
    // preview the data to be updated in the form
    title.value = data[i].title;
    email.value = data[i].email;
    phone.value = data[i].phone;
    add.value = data[i].add;
    zcode.value = data[i].zcode;
    scourse.value = data[i].scourse;
    btnSubmit.style.background = 'green';
    btnSubmit.textContent = 'Save & Exit';
    btnSubmit.setAttribute('data-id', i);    
},
updateUser = id => {
    // updating the values of the data array 
    data[id].title = title.value;
    data[id].email = email.value;
    data[id].phone = phone.value;
    data[id].add = add.value;
    data[id].zcode = zcode.value;
    data[id].scourse = scourse.value;
    localStorage.setItem('usersData', JSON.stringify(data));
    fetchUsersData();
},
deleteUser = i => {
    if(confirm('Are you sure you want to delete this user?')){
        data.splice(++i, 1);
        localStorage.setItem('usersData', JSON.stringify(data));
        fetchUsersData();
    }
},
searchUsersData = query => {
    tfoot.innerHTML = '';
    let found = data.map((item, i) => tbody.querySelectorAll('tr')[i].style.display = item.title.toLowerCase().includes(query.toLowerCase()) ? '' : 'none');
    if(data.length === found.filter(tr => tr == 'none').length){
        // setting the contents of the tfoot element
        tfoot.innerHTML = `<tr>
                            <td colspan="7"><h1 style="background: #f1f1f1; color: #f00; text-align: center; padding: 40px;">No results found!</h1></td>
                        </tr>`;
    }
},
clearData = () => {
    if(data && confirm('Are you sure you want to clear all data?')){
        localStorage.removeItem('usersData');
        fetchUsersData();
    }
};

fetchUsersData();

form.addEventListener('submit', e => {
    // e.preventDefault();
    !btnSubmit.getAttribute('data-id') ? saveUser() : updateUser(btnSubmit.getAttribute('data-id')); 
});

// searching the data when the user types in the search input
search.addEventListener('input', e => searchUsersData(e.target.value));

// cancel update and reset the form to its default state
btnCancel.addEventListener('click', e => resetForm());

// clearing the data from the localStorage
btnClearData.addEventListener('click', e => clearData());
