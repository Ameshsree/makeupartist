let netBanking = `<div class="netBanking">
<div class="card" style="width: 18rem;">
    <h5>Bank Details</h5>
    <form>
    <div class="form-group">
        <input type="text" name="aName" class="form-control" autocomplete="off" required>
        <label for="aName" class="label-name">
            <span class="content-name">Account Holders Full Name</span>
        </label>
    </div>
    <div class="form-group">
        <input type="text" name="aNum" class="form-control" autocomplete="off" required>
        <label for="aNum" class="label-name">
            <span class="content-name">Account Number</span>
        </label>
    </div>
    <div class="form-group">
        <input type="text" name="aCode" class="form-control" autocomplete="off" required>
        <label for="aCode" class="label-name">
            <span class="content-name">Ifsc Code</span>
        </label>
    </div>
    <button type="submit" id="submitBtn" class="btn btn-primary">Add</button>
    </form>
</div>
</div>`;
let Paytm = `<div class="Paytm">
<div class="card" style="width: 18rem;">
    <h5>Paytm Details</h5>
    <form>
    <div class="form-group">
        <input type="text" name="aName" class="form-control" required autocomplete="off">
        <label for="aName" class="label-name">
            <span class="content-name">Full Name</span>
        </label>
    </div>
    <div class="form-group">
        <input type="number" name="aNum" class="form-control" required autocomplete="off">
        <label for="aNum" class="label-name">
            <span class="content-name">Paytm Number</span>
        </label>
    </div>
    <div class="form-group kyc">
        <p>*KYC-verified Paytm accounts only</p>
    </div>
    <button type="submit" id="submitBtn" class="btn btn-primary">Add</button>
    </form>
</div>
</div>`;
let googlePay = `<div class="googlePay">
<div class="card" style="width: 18rem;">
    <h5>Google Pay Details</h5>
<form>
    <div class="form-group">
        <input type="text" name="aName" class="form-control" required autocomplete="off">
        <label for="aName" class="label-name">
            <span class="content-name">Full Name</span>
        </label>
    </div>
    <div class="form-group">
        <input type="number" name="aNum" class="form-control" required autocomplete="off">
        <label for="aNum" class="label-name">
            <span class="content-name">Google Pay Number</span>
        </label>
    </div>
    
    <button type="submit" id="submitBtn" class="btn btn-primary">Add</button>
</form>
</div>
</div>`;
let upi = `<div class="upi">
<div class="card" style="width: 18rem;">
    <h5>UPI Details</h5>
<form>
    <div class="form-group">
        <input type="text" name="aName" class="form-control" required autocomplete="off">
        <label for="aName" class="label-name">
            <span class="content-name">Full Name</span>
        </label>
    </div>
    <div class="form-group">
        <input type="number" name="aNum" class="form-control" required autocomplete="off">
        <label for="aNum" class="label-name">
            <span class="content-name">UPI</span>
        </label>
    </div>
    <button type="submit" id="submitBtn" class="btn btn-primary">Add</button>
</form>
</div>
</div>`;
let paymentForm = document.querySelector(".paymentForm");

function accountElement(string) {
    let div = document.createElement('div')
    div.className = 'account'
    div.innerHTML = string
    return div
}

let radioInputs = document.getElementsByClassName("form-check-input");
Array.from(radioInputs).forEach(function (element) {
    element.addEventListener("click", function () {
        if (element.value == "netBanking") {
            paymentForm.innerHTML = netBanking;
        } else if (element.value == "Paytm") {
            paymentForm.innerHTML = Paytm;
        } else if (element.value == "googlePay") {
            paymentForm.innerHTML = googlePay;
        } else {
            paymentForm.innerHTML = upi;
        }

        let submitBtn = paymentForm.querySelector("#submitBtn")
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault();

            let string = ''
            let name = ''
            let number = ''
            let code = ''
            if (element.value == 'netBanking') {
                name = paymentForm.querySelector('input[name="aName"]').value
                number = paymentForm.querySelector('input[name="aNum"]').value
                code = paymentForm.querySelector('input[name="aCode"]').value
                string = `
                    <h5>
                        <span>Bank Detail</span>
                        <span class='removeAccount'>
                            <i class="fa fa-close"></i>
                        </span>
                    </h5>
                    <ul>
                        <li><b>Name:</b><span>${name}</span></li>
                        <li><b>Account Number:</b><span>${number}</span></li>
                        <li><b>IFSC:</b><span>${code}</span></li>            
                    </ul>`
            } else if (element.value == 'Paytm') {
                name = paymentForm.querySelector('input[name="aName"]').value
                number = paymentForm.querySelector('input[name="aNum"]').value
                string = `
                    <h5>
                        <span>Paytm Detail</span>
                        <span class='removeAccount'>
                            <i class="fa fa-close"></i>
                        </span>
                    </h5>
                    <ul>
                        <li><b>Name:</b><span>${name}</span></li>
                        <li><b>Paytm Number:</b><span>${number}</span></li>                                   
                    </ul>`
            } else if (element.value == 'googlePay') {
                name = paymentForm.querySelector('input[name="aName"]').value
                number = paymentForm.querySelector('input[name="aNum"]').value
                string = `
                    <h5>
                        <span>Google Pay Detail</span>
                        <span class='removeAccount'>
                            <i class="fa fa-close"></i>
                        </span>
                    </h5>
                    <ul>
                        <li><b>Name:</b><span>${name}</span></li>
                        <li><b>Google Pay Number:</b><span>${number}</span></li>                                   
                    </ul>`
            } else {
                name = paymentForm.querySelector('input[name="aName"]').value
                number = paymentForm.querySelector('input[name="aNum"]').value
                string = `
                <h5>
                    <span>UPI Detail</span>
                    <span class='removeAccount'>
                        <i class="fa fa-close"></i>
                    </span>
                </h5>
                <ul>
                    <li><b>Name:</b><span>${name}</span></li>
                    <li><b>UPI:</b><span>${number}</span></li>                                   
                </ul>`
            }

            let accountDiv = accountElement(string)
            document.querySelector('.accountDetails').append(accountDiv)

            let removeAccount = document.getElementsByClassName('removeAccount')
            Array.from(removeAccount).forEach(element => {
                element.addEventListener('click', event => {
                    event.target.parentElement.parentElement.parentElement.remove()
                })
            })
            paymentForm.getElementsByTagName('form')[0].reset()
        });
    });
});
