function SendMail() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let content = document.getElementById("content").value;
    var data = {
        service_id: 'service_jg9s19l',
        template_id: 'template_didsk7d',
        user_id: 'eRe80GaPLd8fwc8wD',
        template_params: {
            'from_name': name,
            'to_name': email,
            'message': content
        }
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function() {
        alert('Your mail is sent!');
    })
    .catch(function(error) {
        alert('Oops... ' + error);
    });
}
function SeeMore() {
    let div = document.getElementById("projects");
    div.classList.add("expanded");
}

window.addEventListener('scroll', function() {
    var headerpages = document.getElementById('headerpages');
    if (window.pageYOffset > 200) {
    headerpages.classList.add('visible');
    } else {
    headerpages.classList.remove('visible');
    }
});