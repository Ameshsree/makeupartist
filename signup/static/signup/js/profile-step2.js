let button = document.getElementsByClassName('toggle')
let socialDetails = document.getElementsByClassName("socialDetails");
let content = document.getElementsByClassName('socialContent')
let saveButton = document.getElementsByClassName('save')
let socialInput = document.getElementsByTagName('input')
let cancel = document.getElementsByClassName('cancel');




function toggle(buttons) {
    Array.from(buttons).forEach(function (element, index) {
        element.addEventListener('click', function (event) {
            socialDetails[index].classList.toggle('display')
            content[index].classList.toggle('display')        
              
            if (button[index].innerHTML == `<i class="fa fa-angle-up"></i>`) {
                if (socialInput[index].value != "") {
                    button[index].innerHTML = `<i class="fa fa-pencil"></i>`

                } else  {

                    button[index].innerHTML = `Connect +`
                }
            } else {
                button[index].innerHTML = `<i class="fa fa-angle-up"></i>`
            }
            event.preventDefault()
        })
    })
}
toggle(button)
toggle(cancel)

var myToast = Toastify({
    text: "Saved!",
    duration: 3000
    
   })

Array.from(saveButton).forEach(function (element, index) {
    element.addEventListener('click', function (event) {
        let position = index * 2
        myToast.showToast();

        if (socialInput[position].value != "" && socialInput[position + 1].value != "") {
            content[index].innerHTML = `<div><b>Username</b>  ${socialInput[position].value}</div>
<div><b>Followers</b>  ${socialInput[position + 1].value}</div>   
`//input value from the server (fetch using the json file)
            event.preventDefault()
            socialDetails[index].classList.toggle('display')

            if (button[index].innerHTML == `<i class="fa fa-angle-up"></i>`) {
                button[index].innerHTML = `<i class="fa fa-pencil"></i>`
            } else {
                button[index].innerHTML = `<i class="fa fa-angle-up"></i>`
            }
            content[index].classList.toggle('display')
        }
    })
})

