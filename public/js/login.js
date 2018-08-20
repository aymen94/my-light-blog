$('button').click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '/auth',
        data: {
            email: document.getElementsByName('email')[0].value,
            password: document.getElementsByName('password')[0].value
        },
        success: function (result) {
            if (result.message === "welcome")
                location.href = '/dashboard';
            else
                Materialize.toast(result.message,2000);
        },
    });
})
