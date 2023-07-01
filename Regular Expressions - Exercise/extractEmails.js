function solve(text) {
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;
    let emails = text.match(pattern);
    for (let email of emails) {
        console.log(email);
    }
}
solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")