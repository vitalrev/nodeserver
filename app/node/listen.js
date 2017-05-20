MetaCoin.deployed().then(deployed => {
    deployed.Transfer(
        {},
        { fromBlock: "latest" })
    .watch(function (err, newEvent) {
        if (err) {
            console.error(err);
        } else {
            console.log(newEvent);
        }
    });
});