const friends = ["Jessica", "Maverick", "Luke", "Acuna", "Jesus"];
let btn = document.getElementById('sing-button');

btn.addEventListener('click', function () {
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement("div")
        document.body.appendChild(friendDiv)

        let h3 = document.createElement("h3")
        let h3Text = document.createTextNode(friends[i])
        h3.appendChild(h3Text)
        friendDiv.appendChild(h3)


        for (let j = 99; j > 0; j--) {
            let p = document.createElement("p")
            friendDiv.appendChild(p)

            if (j === 1) {
                p.textContent = (j + ' line of code in the, ' + j + ' line of code; ' + friends[i] + ' strikes one out clears it all out, no more lines of code in the file ')
            } else if (j === 2) {
                p.textContent = (j + ' Lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file ')
            } else {
                p.textContent = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file ');
            }

        }
    }
});