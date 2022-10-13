function changeNumber(val){
    document.getElementById("another").value =
    val;
   }

let input_num = document.querySelector('input[type="number"]');
let button_value = document.querySelectorAll('input[name="rb"]');
button_value.forEach(item => {

item.addEventListener('click' , ()=>{
    for(let i = 0 ; i< button_value.length;i++){
    // button_value[i].checked = false;
    }
    input_num.value = item.getAttribute('value');
    // item.classList.add('radioBut-active');
    
    })
})
    


input_num.addEventListener('input' , (e)=>{
    if(input_num.value.length > 4){
        input_num.value = 9999;
    }
    // console.log(button_value);
    if([...button_value].filter(item => item.value == e.target.value).length > 0){
        [...button_value].filter(item => item.value == e.target.value)[0].checked = true;
    }
    else button_value.forEach(item => item.checked = false)
})

