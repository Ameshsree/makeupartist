
// collespe
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);




// pdf view


(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

$(function(){
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        $.createModal({
            title:'My Title',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;
    });
})

let collapseone = document.getElementById('collapseone');
let add1 = collapseone.querySelector('button[name="add1"]');
add1.addEventListener('click', () => {
    
    let collapseEl = document.createElement('div')
    collapseEl.className = 'form-column collapseoneInputs'
    let collOne = `
<div class="form-row">
        <div class="col-sm-1">
            <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
        </div>
        <div class="col-sm-8">
            <input class="effect-1" type="text" placeholder="Brand Name">
            <span class="focus-border"></span>
        </div>
    </div>
    <br>
    <div class="form-row">
        <div class="col-sm-1">
            <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
        </div>
        <div class="col-sm-8">
            <select id="inputState" class="form-control ">
                <option selected class="text-muted">Type Of Campaign</option>
                <option>Static Post</option>
                <option>Video(less than 1 min)</option>
                <option>Story</option>
                <option>IGTV</option>
                <option>Reels</option>
            </select>
        </div>
    </div><br>
    <div class="form-row">
        <div class="col-sm-1">
            <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
        </div>
        <div class="col-sm-8">
            <input class="effect-1" type="text" placeholder="No. Of Post">
            <span class="focus-border"></span>
        </div>
    </div>
    <br>
    <div class="form-row">
        <div class="col-sm-1">
            <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
        </div>
        <div class="col-sm-8">
            <input class="effect-1" type="text" placeholder="Amount Charge">
            <span class="focus-border"></span>
        </div>
    </div><br>
    <div class="form-row">
        <div class="col-sm-1">
            <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
        </div>
        <div class="col-sm-8">
            <input class="effect-1" type="date">
            <span class="focus-border"></span>
        </div>
    </div><br>
<div class="col-md-2 mb-3 ml-5">     
    <label>Remove</label>   
    <br> 
        <button type="button" name="remove" class="btn btn-danger"><i name="remove" class="fa fa-trash" style="padding: 7px 12px; font-size: 18px;"></i></button>      
</div>`
    collapseEl.innerHTML = collOne
    collapseone.append(collapseEl)
    
   
    let remove = collapseone.getElementsByClassName('btn-danger')
    
    Array.from(remove).forEach((element,index) => {
        element.addEventListener('click', (event) => {
            console.log(index)
            element.parentElement.parentElement.remove()
        })
    
    })

})


let collapseTwo = document.getElementById('collapseTwo');
let add2 = collapseTwo.querySelector('button[name="add2"]');
add2.addEventListener('click', () => {
    
    let collapseE2 = document.createElement('div')
    collapseE2.className = 'form-column collapsetwoInputs'
    let collTwo = `
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>

    <div class="col-sm-8">
        <select id="inputState" class="form-control ">
            <option selected class="text-muted">Schooling</option>
            <option>Humanities</option>
            <option>Commerce</option>
            <option>Science</option>
        </select>

    </div>
</div>
<br>
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <input class="effect-1" type="text" placeholder="Bachelor Degree">
        <span class="focus-border"></span>
    </div>
</div><br>
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <input class="effect-1" type="text" placeholder="Master Degree">
        <span class="focus-border"></span>
    </div>
</div><br>
<div class="col-md-2 mb-3 ml-5">     
    <label>Remove</label>   
    <br> 
        <button type="button" name="remove" class="btn btn-danger"><i name="remove" class="fa fa-trash" style="padding: 7px 12px; font-size: 18px;"></i></button>      
</div>`
    collapseE2.innerHTML = collTwo
    collapseTwo.append(collapseE2)
    
   
    let remove = collapseTwo.getElementsByClassName('btn-danger')
    
    Array.from(remove).forEach((element,index) => {
        element.addEventListener('click', (event) => {
            console.log(index)
            element.parentElement.parentElement.remove()
        })
    
    })

})


let collapseThree = document.getElementById('collapseThree');
let add3 = collapseThree.querySelector('button[name="add3"]');
add3.addEventListener('click', () => {
    
    let collapseE3 = document.createElement('div')
    collapseE3.className = 'form-column collapsethreeInputs'
    let collThree = `
 <div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <input class="effect-1" type="text" placeholder="Name Of The Celebrity">
        <span class="focus-border"></span>
    </div>
</div>
<br>
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <select id="inputState" class="form-control ">
            <option selected class="text-muted">Type Of Campaign</option>
            <option>Static Post</option>
            <option>Video(less than 1 min)</option>
            <option>Story</option>
            <option>IGTV</option>
            <option>Reels</option>
        </select>
    </div>
</div><br>
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <input class="effect-1" type="text" placeholder="No. Of Post">
        <span class="focus-border"></span>
    </div>
</div>
<br>
<div class="form-row">
    <div class="col-sm-1">
        <i class="fa fa-user" aria-hidden="true" style="color:#29B4F1; font-size: 25px; margin-left: 20px;"></i>
    </div>
    <div class="col-sm-8">
        <input class="effect-1" type="date">
        <span class="focus-border"></span>
    </div>
</div><br>

<div class="col-md-2 mb-3 ml-5">     
    <label>Remove</label>   
    <br> 
        <button type="button" name="remove" class="btn btn-danger"><i name="remove" class="fa fa-trash" style="padding: 7px 12px; font-size: 18px;"></i></button>      
</div>`
    collapseE3.innerHTML = collThree
    collapseThree.append(collapseE3)
    
   
    let remove = collapseThree.getElementsByClassName('btn-danger')
    
    Array.from(remove).forEach((element,index) => {
        element.addEventListener('click', (event) => {
            console.log(index)
            element.parentElement.parentElement.remove()
        })
    
    })

})


