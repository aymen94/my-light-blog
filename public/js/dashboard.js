$('#addPostForm').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: './addpost',
        data: {
            title: document.getElementsByName('p_title')[0].value,
            body: document.getElementsByName('p_body')[0].value,
            category: document.getElementsByName('p_category')[0].value
        },
        success: function (result) {
            Materialize.toast(result.message, 2000);
        },
        error: function (error) {
            Materialize.toast(error.message, 2000);

        }
    });
});

$('#addCategoryForm').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: './addcategory',
        data: {
            category: document.getElementsByName('c_name')[0].value,
        },
        success: function (result) {
            Materialize.toast(result.message, 2000);
        },
        error: function (error) {
            Materialize.toast(error.message, 2000);

        }
    });
});

$('#addUserForm').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: './adduser',
        data: {
            name: document.getElementsByName('u_name')[0].value,
            lastname: document.getElementsByName('u_lastname')[0].value,
            email: document.getElementsByName('u_email')[0].value,
            password: document.getElementsByName('u_password')[0].value,
        },
        success: function (result) {
            Materialize.toast(result.message, 2000);
        },
        error: function (error) {
            Materialize.toast(error.message, 2000);

        }
    });
});

function deleteCategory(id,e){
    e.classList.add("hide");
    $.ajax({
        type: "POST",
        url: './removecategory',
        data: {
            id
        },
        success: function (result) {
            Materialize.toast(result.message, 2000);
        },
        error: function (error) {
            Materialize.toast(error.message, 2000);
        }
    });
}

function deletePost(id,e){
    e.classList.add("hide");
    $.ajax({
        type: "POST",
        url: './removepost',
        data: {
            id
        },
        success: function (result) {
            Materialize.toast(result.message, 2000);
        },
        error: function (error) {
            Materialize.toast(error.message, 2000);
        }
    });
}