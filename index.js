let sendForm = () => {
    const options = {
        method: 'POST',
        body: {
            'phonenumber': document.getElementById("phonenumber").value,
            'laundryIp': document.getElementById("ipAddress").value,
            'name': document.getElementById("name").value
        },
        headers: new Headers({
            'Content-Type': "application/json"
        }),
        mode: 'cors'
    };
    console.dir(options);
    //Send Form
    fetch("http://159.203.108.254:3000/laundry/new", options).then((res) => {
        console.dir(res);
    }).catch((err) => {
        console.log(err);
    });
};
//test data { phonenumber: "+16157966677", ipAddress: "50.90.226.151", name: "Nicholas" }