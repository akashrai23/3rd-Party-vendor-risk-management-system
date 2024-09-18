var buttons = document.getElementsByName('button');
var add_form =new Boolean(false);
var update_form =new Boolean(false);
var report =new Boolean(true);

function clicked_button(i) {
    if(i==0){
        $('#add_form').slideDown(500);
        $('#update_form').slideUp(500);
    }else if(i==1){
        $('#add_form').slideUp(500);
        $('#update_form').slideDown(500);
    }else{
        $('#add_form').slideUp(500);
        $('#update_form').slideUp(500);
    }
    $("#add-select").change(function(){
        console.log($( "#add-select option:selected" ).val())
        if($( "#add-select option:selected" ).val() === "client"){
            $('#vendor-info input').attr("disabled",true);
            $('#vendor-info').slideUp(1000);
            $('#client-info input').attr("disabled",false);
            $('#client-info').slideDown(1000);
            $('form').attr("action","php/add-client.php")
            console.log("check");
        }
        if($( "#add-select option:selected" ).val() === "vendor"){
            $('#vendor-info input').attr("disabled",false);
            $('#vendor-info').slideDown(1000);
            $('#client-info input').attr("disabled",true);
            $('#client-info').slideUp(1000);
            $('form').attr("action","php/add-vendor.php")
            console.log("check2");
        }
    });
    $("#confirmation").change(function(){
        console.log($( "#confirmation option:selected" ).val())
        if($( "#confirmation option:selected" ).val() === "Yes"){
            $('#if_confirm').slideDown(500);
        }
        if($( "#confirmation option:selected" ).val() === "No"){
            $('#if_confirm').slideUp(500);
        }
    });

    $("#update_confirmation").change(function(){
        console.log($( "#update_confirmation option:selected" ).val())
        if($( "#update_confirmation option:selected" ).val() === "Yes"){
            $('#update_if_confirm').slideDown(500);
            $('#update_if_confirm input').attr("disabled",false);
        }
        if($( "#update_confirmation option:selected" ).val() === "No"){
            $('#update_if_confirm').slideUp(500);
            $('#update_if_confirm input').attr("disabled",true);
        }
    });


}




$('#id')[0].value = Math.floor(Math.random()*90000) + 10000;
$('#id')[0].placeholder = $('#id')[0].value;
console.log($('#id')[0].value);

if($('#update_confirmation').val()== "Yes"){
    $('#update_if_confirm').slideDown(100);
}

var add_start;
var add_end;
var add_period;
var diffTime;
var diffDays;
var add_startInput = document.getElementById('add_start_date');
add_startInput.addEventListener("change", (e)=>{
    add_start = new Date(e.target.value);
});
var add_endInput = document.getElementById('add_end_date');
add_endInput.addEventListener("change", (e)=>{
    add_end = new Date(e.target.value);
    if(add_start === undefined){
        alert("Enter the Start Date");
    }else{
    diffTime = Math.abs(add_end.getTime() - add_start.getTime());
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(diffDays >= 365){
        years = Math.floor(diffDays/365);
        days = diffDays%365;
        add_period = years + ' years ' + days + ' days ';
    }else{
        add_period = diffDays + ' days ';
    }
    document.getElementById('add_period').value = add_period;
    document.getElementById('add_period').placeholder = add_period;
    }

});

var update_start;
var update_end;
var update_period;
var update_startInput = document.getElementById('update_start_date');
update_startInput.addEventListener("change", (e)=>{
    update_start = new Date(e.target.value);
});
var update_endInput = document.getElementById('update_end_date');
update_endInput.addEventListener("change", (e)=>{
    update_end = new Date(e.target.value);
    if(update_start === undefined){
        alert("Enter the Start Date");
    }else{
    diffTime = Math.abs(update_end.getTime() - update_start.getTime());
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(diffDays >= 365){
        years = Math.floor(diffDays/365);
        days = diffDays%365;
        update_period = years + ' years ' + days + ' days';
    }else{
        update_period = diffDays + ' days ';
    }
    document.getElementById('update_period').value = update_period;
    document.getElementById('update_period').placeholder = update_period;
    }   

});
var id;
function search_id() {
    id = parseInt($('#update_id').val());
    window.location.href = "php/search_id.php?id="+id;

}

