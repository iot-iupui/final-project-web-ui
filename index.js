let sendForm = () => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            phonenumber: document.getElementById("phonenumber").value,
            laundryIp: document.getElementById("ipAddress").value,
            name: document.getElementById("name").value
        }),
        headers: new Headers({
            'Content-Type': "application/json; charset=utf-8",
            'Accept': 'application/json'
        }),
        mode: 'cors'
    };
    console.dir(options);
    //Send Form
    fetch("http://159.203.108.254:3000/laundry/new", options).then((res) => {
        console.dir(res);
        document.getElementById("container").innerHTML = `
        <div class="card text-center">
        <div class="card-body">
            <h4 class="card-title">Registered!</h4>
            <p class="card-text">Your Dryer has been registered</p>
        </div>
    </div>
        `
    }).catch((err) => {
        console.log(err);
    });
};
//test data { phonenumber: "+16157966677", ipAddress: "50.90.226.151", name: "Nicholas" }