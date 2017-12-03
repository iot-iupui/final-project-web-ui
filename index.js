let sendForm = () => {
    const body = {
        'phonenumber': document.getElementById("phonenumber").value,
        'ipAddress': document.getElementById("ipAddress").value,
        'name': document.getElementById("name").value
    }
    console.log(body);
    //Send Form
    fetch("http://159.203.108.254:3000/laundry/new", {
        method: 'POST',
        body: body,
        headers: new Headers({
            ContentType: "application/json"
        })
    }).then((res) => {
        console.log(res.body);
    }).catch((err) => {
        console.log(err);
    });
};
//test data { phonenumber: "+16157966677", ipAddress: "50.90.226.151", name: "Nicholas" }