var rd_count = 0;
var radio_count = 1;
var s_count = 0;
var sltOption_count = 1;
var cb_count = 0;
var checkBox_count = 1;

function main_fun() {

    var slt_val = document.getElementById('select1').value;

    if(slt_val == 1) {
        var div_1 = document.createElement('div');
        div_1.setAttribute('class','small_div')

        var js_int = document.createElement('input');
        js_int.setAttribute('placeholder','Label')

        var add_btn = document.createElement('button');
        add_btn.setAttribute('class','dlt')
        
        var btn_txt1 = document.createTextNode('ADD');
        add_btn.appendChild(btn_txt1);

        var div_2 = document.createElement('div');
        div_2.setAttribute('class','small_div')

        var js_int1 = document.createElement('input');
        js_int1.setAttribute('placeholder','Text');
        js_int1.setAttribute('id','int1')
        

        var x_btn = document.createElement('button');
        x_btn.setAttribute('class','dlt')
        var btn_txt2 = document.createTextNode('X');
        x_btn.appendChild(btn_txt2);

        div_1.appendChild(js_int);
        div_1.appendChild(add_btn);

        div_2.appendChild(js_int1);
        div_2.appendChild(x_btn);

        document.querySelector('.right1').appendChild(div_1);
        document.querySelector('.right2').appendChild(div_2);
    
        add_btn.onclick=()=>{
            if(js_int.value ==""){
                alert("Enter Label")
            }
            else{
                var label1 = document.createElement('span');
                div_1.insertBefore(label1,div_1.firstChild)
                label1.innerHTML = js_int.value + " :- ";
                js_int.remove();
                add_btn.remove();
            }
        }

        x_btn.onclick=()=>{
            div_1.remove();
            div_2.remove();
        }
    }

//Number

if(slt_val == 2) {
    var div_1 = document.createElement('div');
    div_1.setAttribute('class','small_div')
    
    var js_int = document.createElement('input');
    js_int.setAttribute('placeholder','Label')

    var add_btn = document.createElement('button');
    add_btn.setAttribute('class','dlt')
    var btn_txt1 = document.createTextNode('ADD');
    add_btn.appendChild(btn_txt1);

    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div')

    var js_int1 = document.createElement('input');
    js_int1.setAttribute('placeholder','Number');
    js_int1.setAttribute('id','int2')

    var x_btn = document.createElement('button');
    x_btn.setAttribute('class','dlt')
    var btn_txt2 = document.createTextNode('X');
    x_btn.appendChild(btn_txt2);

    div_1.appendChild(js_int);
    div_1.appendChild(add_btn);

    div_2.appendChild(js_int1);
    div_2.appendChild(x_btn);

    document.querySelector('.right1').appendChild(div_1);
    document.querySelector('.right2').appendChild(div_2);

    add_btn.onclick=()=>{
        if(js_int.value ==""){
            alert("Enter Label")
        }
        else{
            var label1 = document.createElement('span');
            div_1.insertBefore(label1,div_1.firstChild)
            label1.innerHTML = js_int.value + " :- ";
            js_int.remove();
            add_btn.remove();
        }
    }

    x_btn.onclick=()=>{
        div_1.remove();
        div_2.remove();
    }
}

//Email

if(slt_val == 3) {
    var div_1 = document.createElement('div');
    div_1.setAttribute('class','small_div');
    
    var js_int = document.createElement('input');
    js_int.setAttribute('placeholder','Label');

    var add_btn = document.createElement('button');
    add_btn.setAttribute('class','dlt')
    var btn_txt1 = document.createTextNode('ADD');
    add_btn.appendChild(btn_txt1);

    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div');

    var js_int1 = document.createElement('input');
    js_int1.setAttribute('placeholder','Email');
    js_int1.setAttribute('id','int3')

    var x_btn = document.createElement('button');
    x_btn.setAttribute('class','dlt')
    var btn_txt2 = document.createTextNode('X');
    x_btn.appendChild(btn_txt2);

    div_1.appendChild(js_int);
    div_1.appendChild(add_btn);

    div_2.appendChild(js_int1);
    div_2.appendChild(x_btn);

    document.querySelector('.right1').appendChild(div_1);
    document.querySelector('.right2').appendChild(div_2);

    add_btn.onclick=()=>{
        if(js_int.value ==""){
            alert("Enter Label")
        }
        else{
            var label1 = document.createElement('span');
            div_1.insertBefore(label1,div_1.firstChild);
            label1.innerHTML = js_int.value + " :- ";
            js_int.remove();
            add_btn.remove();
        }
    }

    x_btn.onclick=()=>{
        div_1.remove();
        div_2.remove();
    }
}

//Radio

if(slt_val == 4) {

    var div_1 = document.createElement('div');
    div_1.setAttribute('class','small_div1');
    
    var js_int = document.createElement('input');
    js_int.setAttribute('placeholder','Label');

    var add_btn = document.createElement('button');
    add_btn.setAttribute('class','dlt')
    var btn_txt1 = document.createTextNode('ADD');
    add_btn.appendChild(btn_txt1);

    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div1');

    var js_int1 = document.createElement('input');
    js_int1.setAttribute('placeholder','Options');
    js_int1.setAttribute('class','hideout')

    var addradio_btn = document.createElement('button');
    var btn_txt3 = document.createTextNode('Add');
    addradio_btn.appendChild(btn_txt3);
    addradio_btn.setAttribute('class','hideout')

    var x_btn = document.createElement('button');
    var btn_txt2 = document.createTextNode('X');
    x_btn.appendChild(btn_txt2);
    x_btn.setAttribute('class','hideout dlt')


    div_1.appendChild(js_int);
    div_1.appendChild(add_btn);

    div_2.appendChild(js_int1);
    div_2.appendChild(addradio_btn);
    div_2.appendChild(x_btn);

    document.querySelector('.right1').appendChild(div_1);
    document.querySelector('.right2').appendChild(div_2);

    add_btn.onclick=()=>{
        if(js_int.value ==""){
            alert("Enter Label")
        }
        else{
            var label1 = document.createElement('span');
            div_1.insertBefore(label1,div_1.firstChild)
            label1.innerHTML = js_int.value + " :- ";
            js_int.remove();
            add_btn.remove();
        }
    }

    addradio_btn.onclick=()=>{
        if(js_int1.value ==""){
            alert("Enter Option")
        }
        else{
            var div_3 = document.createElement('div');
            var option1 = document.createElement('input');
            option1.setAttribute('name','radio_ints')
            option1.type = "radio";

            option1.setAttribute('id','rd'+ radio_count);
            radio_count++
            var label1 = document.createElement('span');

            label1.innerHTML = js_int1.value;
            option1.value = label1.innerHTML;
            
            div_2.insertBefore(div_3,div_2.children[0 + rd_count]);
            
            rd_count++

            div_3.appendChild(option1);
            div_3.appendChild(label1);

            js_int1.value = "";
        }
    }

    x_btn.onclick=()=>{
        div_1.remove();
        div_2.remove();
    }
}

//Select

if(slt_val == 5) {

    var div_1 = document.createElement('div');
    div_1.setAttribute('class','small_div2')
    
    var js_slt = document.createElement('select');
    js_slt.setAttribute('class','slt_int');
    js_slt.setAttribute('id','sltoption');
    
    var js_int = document.createElement('input');
    js_int.setAttribute('placeholder','Label');

    var add_btn = document.createElement('button');
    add_btn.setAttribute('class','dlt')
    var btn_txt1 = document.createTextNode('ADD');
    add_btn.appendChild(btn_txt1);

    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div2')

    var js_int1 = document.createElement('input');
    js_int1.setAttribute('placeholder','Options');
    js_int1.setAttribute('class','hideout')

    var addradio_btn = document.createElement('button');
    var btn_txt3 = document.createTextNode('Add');
    addradio_btn.appendChild(btn_txt3);
    addradio_btn.setAttribute('class','hideout')

    var x_btn = document.createElement('button');
    var btn_txt2 = document.createTextNode('X');
    x_btn.appendChild(btn_txt2);
    x_btn.setAttribute('class','hideout dlt')

    div_1.appendChild(js_int);
    div_1.appendChild(add_btn);

    div_2.appendChild(js_slt);
    div_2.appendChild(js_int1);
    div_2.appendChild(addradio_btn);
    div_2.appendChild(x_btn);

    document.querySelector('.right1').appendChild(div_1);
    document.querySelector('.right2').appendChild(div_2);

    add_btn.onclick=()=>{
        if(js_int.value ==""){
            alert("Enter Label")
        }
        else{
            var label1 = document.createElement('span');
            div_1.insertBefore(label1,div_1.firstChild)
            label1.innerHTML = js_int.value + " :- ";
            js_int.remove();
            add_btn.remove();
        }
    }

    addradio_btn.onclick=()=>{
        if(js_int1.value ==""){
            alert("Enter Option")
        }
        else{
            var option1 = document.createElement('option');

            option1.setAttribute('id','select'+ sltOption_count);
            sltOption_count++

            option1.innerHTML = js_int1.value;
            option1.value = js_int1.value
            js_slt.appendChild(option1)

            js_int1.value = ""; 
        }
    }

    x_btn.onclick=()=>{
        div_1.remove();
        div_2.remove();
    }
}



//Check Box

if(slt_val == 6) {

    var div_1 = document.createElement('div');
    div_1.setAttribute('class','small_div1')
    
    var js_int = document.createElement('input');
    js_int.setAttribute('placeholder','Label');

    var add_btn = document.createElement('button');
    add_btn.setAttribute('class','dlt')
    var btn_txt1 = document.createTextNode('ADD');
    add_btn.appendChild(btn_txt1);

    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div1')

    var js_int1 = document.createElement('input');
    js_int1.setAttribute('placeholder','Options');
    js_int1.setAttribute('class','hideout')

    var addradio_btn = document.createElement('button');
    var btn_txt3 = document.createTextNode('Add');
    addradio_btn.appendChild(btn_txt3);
    addradio_btn.setAttribute('class','hideout')

    var x_btn = document.createElement('button');
    var btn_txt2 = document.createTextNode('X');
    x_btn.appendChild(btn_txt2);
    x_btn.setAttribute('class','hideout dlt')

    div_1.appendChild(js_int);
    div_1.appendChild(add_btn);

    div_2.appendChild(js_int1);
    div_2.appendChild(addradio_btn);
    div_2.appendChild(x_btn);

    document.querySelector('.right1').appendChild(div_1);
    document.querySelector('.right2').appendChild(div_2);

    add_btn.onclick=()=>{
        if(js_int.value ==""){
            alert("Enter Label")
        }
        else{
            var label1 = document.createElement('span');
            div_1.insertBefore(label1,div_1.firstChild)
            label1.innerHTML = js_int.value + " :- ";
            js_int.remove();
            add_btn.remove();
        }
    }

    addradio_btn.onclick=()=>{
        if(js_int1.value ==""){
            alert("Enter Option")
        }
        else{
            var div_3 = document.createElement('div');
            var option1 = document.createElement('input');
            option1.type = "checkbox";

            option1.setAttribute('id','cb'+ checkBox_count);
            checkBox_count++

            option1.setAttribute('class','checkedItem')

            var label1 = document.createElement('span');

            label1.innerHTML = js_int1.value;
            option1.value = label1.innerHTML;
            
            div_2.insertBefore(div_3,div_2.children[0 + cb_count]);
            
            cb_count++

            div_3.appendChild(option1);
            div_3.appendChild(label1);

            js_int1.value = "";
        }
    }

    x_btn.onclick=()=>{
        div_1.remove();
        div_2.remove();
    }

}



if(slt_val == 7) {
    
    var div_2 = document.createElement('div');
    div_2.setAttribute('class','small_div')

    var sub_btn = document.createElement('button');
    var btn_txt2 = document.createTextNode('SUBMIT');
    sub_btn.appendChild(btn_txt2);
    sub_btn.setAttribute('onclick','print_form()');

    div_2.appendChild(sub_btn);

    document.querySelector('.right2').appendChild(div_2);

    sub_btn.onclick=()=>{
        alert("Is your form complete")
        
        var f_detail1 = document.getElementById('left1');
        var f_detail2 = document.getElementById('left2');

        var c_detail1 = document.getElementById('c_form1');
        var c_detail2 = document.getElementById('c_form2');

        f_detail1.innerHTML = c_detail1.innerHTML;
        f_detail2.innerHTML = c_detail2.innerHTML;

        c_detail1.remove();
        c_detail2.remove();

        var ex_dlt = document.getElementsByClassName('dlt');
        for(var i =0; i < ex_dlt.length; i++){
            ex_dlt[i].style.display = "none";
        }
        var e_dlt = document.getElementsByClassName('hideout');
        for(var i =0; i < e_dlt.length; i++){
            e_dlt[i].style.display = "none";
        }

    }
}
}

    var nm;
    var age; 
    var em;
    var rd;
    var sl;
    var cb;

function print_form(){

    var sub_left = document.getElementById('left1');

    var final_left = document.getElementById('rt1');

    final_left.innerHTML = sub_left.innerHTML;

//Variables for last div printing
    var divnm = document.getElementById('div_nm');
    var divag = document.getElementById('div_ag');
    var divem = document.getElementById('div_em');
    var divrd = document.getElementById('div_rd');
    var divsl = document.getElementById('div_sl');
    var divcb = document.getElementById('div_cb');


//Name
    if(document.getElementById('int1') == undefined){
        nm = "";
        divnm.innerHTML = `${nm}`
        divnm.style.display = "none"
    }
    else{
        nm = document.getElementById('int1').value;
        divnm.innerHTML = `${nm}`
    }
//Age
    if(document.getElementById('int2') == undefined){
        age = "";
        divag.innerHTML = `${age}`
        divag.style.display = "none"
    }
    else{
        age = document.getElementById('int2').value;
        divag.innerHTML = `${age}`
    }
//Email
    if(document.getElementById('int3') == undefined){
        em = "";
        divem.innerHTML = `${em}`
        divem.style.display = "none"
    }
    else{
        em = document.getElementById('int3').value;
        divem.innerHTML = `${em}`
    }

//Radio
    if(document.querySelector('input[name="radio_ints"]:checked') == undefined){
        rd = "";
        divrd.innerHTML = `${rd}`
        divrd.style.display = "none"
    }
    else{
        rd = document.querySelector('input[name="radio_ints"]:checked').value;
        divrd.innerHTML = `${rd}`
    }
    
//Select
    if(document.getElementById("sltoption") == undefined){
        sl = "";
        divsl.innerHTML = `${sl}`
        divsl.style.display = "none"
    }
    else{   
        sl = document.getElementById("sltoption");
        var slp = sl.options[sl.selectedIndex].text;
        divsl.innerHTML = `${slp}`
    }

//CheckBox
    if(document.querySelectorAll('.checkedItem') == undefined){
        cb = "";
        divcb.innerHTML = `${cb}`
        divcb.style.display = "none"
    }
    else{   
        cb = document.querySelectorAll('.checkedItem');

        Array.from(cb)

        let cbox = [];
        for(var i=0; i < cb.length; i++){
            if(cb[i].checked){
                cbox.push(cb[i].value);
            }
        }

        divcb.innerHTML = `${cbox.join("<br>")}`
    }

}