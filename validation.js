
window.onload = function(){

    let form = document.getElementsByName('gbForm')[0]

    let edtFullName = form.the_password
    
    edtFullName = form[2]
    
    edtFullName = form['the_password']

   
    edtFullName.addEventListener('change', function(evt){
        let name = evt.target.value
        let regex = /[\s]+/
        let nameParts = name.trim().match(regex)
        console.log(name)
        if (nameParts == null || nameParts.length < 2){
            console.error("wrong name.");
            evt.target.setCustomValidity('Name and surname are required')
        } else {
            evt.target.setCustomValidity('')
            console.error("correct name.");
        }
    })


}
