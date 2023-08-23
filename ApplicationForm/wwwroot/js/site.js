// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function autoFilAddress() {
    let checkBox = document.getElementById('checkBox');

    let pAddressLine1 = document.getElementById("pAddressLine1");
    let pAddressLine2 = document.getElementById("pAddressLine2");
    let pZipcode = document.getElementById("pZipcode");
    let pCity = document.getElementById("pCity");
    let pState = document.getElementById("pState");
    let pCountry = document.getElementById("pCountry");

    let curAddressLine1 = document.getElementById("curAddressLine1");
    let curAddressLine2 = document.getElementById("curAddressLine2");
    let curZipcode = document.getElementById("curZipcode");
    let curCity = document.getElementById("curCity");
    let curState = document.getElementById("curState");
    let curCountry = document.getElementById("curCountry");

    if (checkBox.checked == true) {

        let pAddressLine1Value = pAddressLine1.value;
        let pAddressLine2Value = pAddressLine2.value;
        let pZipcodeValue = pZipcode.value;
        let pCityValue = pCity.value;
        let pStateValue = pState.value;
        let pCountryValue = pCountry.value;

        curAddressLine1.value = pAddressLine1Value;
        curAddressLine2.value = pAddressLine2Value;
        curZipcode.value = pZipcodeValue;
        curCity.value = pCityValue;
        curState.value = pStateValue;
        curCountry.value = pCountryValue;


    }
    else {
        curAddressLine1.value = "";
        curAddressLine2.value = "";
        curLandmark.value = "";
        curZipcode.value = "";
        curCity.value = "";
        curState.value = "";
        curCountry.value = "";
    }
}


function row() {
    var mytable = document.getElementById("mytable");
    var rows = mytable.rows.length;
    var r = mytable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var checkbox = document.createElement("input");
    var rel = document.createElement("input");
    var name = document.createElement("input");
    var age = document.createElement("input");
    checkbox.type = "checkbox";
    rel.type = "text";
    name.type = "text";
    age.type = "number";
    c1.appendChild(checkbox);
    c2.appendChild(rel);
    c3.appendChild(name);
    c4.appendChild(age);
}
function del() {
    var mytable = document.getElementById("mytable");
    var rows = mytable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (mytable.rows[i].cells[0].children[0].checked) {
            mytable.deleteRow(i);
        }
    }
}


function langrow() {
    var langtable = document.getElementById("langtable");
    var rows = langtable.rows.length;
    var r = langtable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var c5 = r.insertCell(4);
    var checkBox = document.createElement("input");
    var name = document.createElement("input");
    var read = document.createElement("input");
    var write = document.createElement("input");
    var speak = document.createElement("input");
    checkBox.type = "checkbox";
    name.type = "text";
    read.type = "checkbox";
    write.type = "checkbox";
    speak.type = "checkbox";
    c1.appendChild(checkBox);
    c2.appendChild(name);
    c3.appendChild(read);
    c4.appendChild(write);
    c5.appendChild(speak);
}
function del() {
    var langtable = document.getElementById("langtable");
    var rows = langtable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (langtable.rows[i].cells[0].children[0].checked) {
            langtable.deleteRow(i);
        }
    }
}  

function quarow() {
    var quatable = document.getElementById("quatable");
    var rows = quatable.rows.length;
    var r = quatable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var c5 = r.insertCell(4);
    var c6 = r.insertCell(4);
    var checkBox = document.createElement("input");
    var pro = document.createElement("input");
    var inst = document.createElement("input");
    var dur = document.createElement("input");
    var per = document.createElement("input");
    var div = document.createElement("input");
    checkBox.type = "checkbox";
    pro.type = "text";
    inst.type = "text";
    dur.type = "text";
    per.type = "number";
    div.type = "text";
    c1.appendChild(checkBox);
    c2.appendChild(pro);
    c3.appendChild(inst);
    c4.appendChild(dur);
    c5.appendChild(per);
    c6.appendChild(div);
}
function quadel() {
    var quatable = document.getElementById("quatable");
    var rows = quatable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (quatable.rows[i].cells[0].children[0].checked) {
            quatable.deleteRow(i);
        }
    }
}  
function semrow() {
    var semtable = document.getElementById("semtable");
    var rows = semtable.rows.length;
    var r = semtable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var checkBox = document.createElement("input");
    var sem = document.createElement("input");
    var con = document.createElement("input");
    var dur = document.createElement("input");
    checkBox.type = "checkbox";
    sem.type = "text";
    con.type = "text";
    dur.type = "text";
    c1.appendChild(checkBox);
    c2.appendChild(sem);
    c3.appendChild(con);
    c4.appendChild(dur);
}
function semdel() {
    var semtable = document.getElementById("semtable");
    var rows = semtable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (semtable.rows[i].cells[0].children[0].checked) {
            semtable.deleteRow(i);
        }
    }
}  


function majrow() {
    var majtable = document.getElementById("majtable");
    var rows = majtable.rows.length;
    var r = majtable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var checkBox = document.createElement("input");
    var des = document.createElement("input");
    var year = document.createElement("input");
    checkBox.type = "checkbox";
    des.type = "text";
    year.type = "number";
    c1.appendChild(checkBox);
    c2.appendChild(des);
    c3.appendChild(year);
}
function majdel() {
    var majtable = document.getElementById("majtable");
    var rows = majtable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (majtable.rows[i].cells[0].children[0].checked) {
            majtable.deleteRow(i);
        }
    }
}  

function prorow() {
    var protable = document.getElementById("protable");
    var rows = protable.rows.length;
    var r = protable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var c5 = r.insertCell(4);
    var c6 = r.insertCell(5);
    var c7 = r.insertCell(6);
    var checkBox = document.createElement("input");
    var tit = document.createElement("input");
    var com = document.createElement("input");
    var cli= document.createElement("input");
    var plat = document.createElement("input");
    var team = document.createElement("input");
    var role = document.createElement("input");
    checkBox.type = "checkbox";
    tit.type = "text";
    com.type = "text";
    cli.type = "text";
    plat.type = "text";
    team.type = "number";
    role.type = "text";
    c1.appendChild(checkBox);
    c2.appendChild(tit);
    c3.appendChild(com);
    c4.appendChild(cli);
    c5.appendChild(plat);
    c6.appendChild(team);
    c7.appendChild(role);
}
function prodel() {
    var protable = document.getElementById("protable");
    var rows = protable.rows.length;
    for (var i = rows - 1; i > 0; i--) {
        if (protable.rows[i].cells[0].children[0].checked) {
            protable.deleteRow(i);
        }
    }
}









    const btn = document.querySelector('.push-to-add');
        let counter = 1;

        btn.onclick = e => {
            e.preventDefault();

            let repeatingField = document.querySelector('.repeating');

            let newRepeating = document.createElement('section');
            newRepeating.className = 'repeating';

            let repeatingForm = `
               <hr>
                <div class="content">
                    <form action="">
                        <section class="repeating-container relative">
                            <section class="repeating">
                                <div class="user-details">
                                    <div class="input-box">
                                        <span class="details">Company Name(${1 + counter})</span>
                                        <input type="text" name="heading[0]" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Last Designation held</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Address (main office)</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Telephone</span>
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Employment period</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Employe Code/Personel No:</span>
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Name of Reporting Manager</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Name of HR:</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Contact No. of HR:</span>
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Email ID of HR:</span>
                                        <input type="email" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Department of Reporting Manager:</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Contact No of Reporting Manager:</span>
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Email ID of Reporting Manager:</span>
                                        <input type="email" name="" id="" />
                                    </div>
        
                                    <div class="employment-details">
                                        <input type="radio" name="employment" id="dot-1">
                                        <input type="radio" name="employment" id="dot-2">
                                        <span class="details employment_d">Whether employment is of : </span>
                                        <div class="category">
                                            <label for="dot-1">
                                                <span class="dot one"></span>
                                                <span class="employment">Permanent</span>
                                            </label>
                                            <label for="dot-2">
                                                <span class="dot two"></span>
                                                <span class="employment">Temporary</span>
                                            </label>
                                        </div>
                                    </div>
        
                                    <div class="input-box">
                                        <span class="details">Name of Alternative Reporting Manager:</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Contact No. of Alternative Reporting Manager:</span>
                                        <input type="number" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Email ID of Alternative Reporting Manager :</span>
                                        <input type="email" name="" id="" />
                                    </div>
                                    <div class="input-box">
                                        <span class="details">Contact No. of Department of Alternative Reporting manager:</span>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <p>Reason(s) for Leaving : </p>
                                    <textarea rows="5" cols="95"></textarea>
                                    <p>Agency Details(if temporary or contractual) : </p>
                                    <textarea rows="3" cols="95"></textarea>
                                    <p>Remunerations(CTC pa) : </p>
                                    <textarea rows="3" cols="95"></textarea>
                                </div>
                    </form>
                </div>
            
      `;

            newRepeating.innerHTML = repeatingForm;
            btn.previousElementSibling.appendChild(newRepeating);

            counter += 1
        }