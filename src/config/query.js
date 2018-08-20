module.exports = {
    //query post
    "getPage": "SELECT id,title,SUBSTRING(body,1,100) as body FROM post ORDER BY `date` DESC LIMIT ?,5;",
    "getAllPosts": "SELECT id,title,SUBSTRING(body,1,100) as body FROM post ORDER BY `date` DESC;",
    "getPostById": "SELECT title,body,`date`,u.`name`,u.lastname,c.`name` as category, c.id as categoryId FROM post p,category c,`user` u WHERE p.id=? and c.id=p.category and u.id=p.`user`;",
    "getPostByCategory": "SELECT p.id,title,SUBSTRING(body,1,100) as body,`date` FROM post p,category c WHERE c.id=? and p.category=c.id  ORDER BY `date` DESC;",
    "addPost": "INSERT INTO post( title, body, `user`, category) VALUES(?,?,?,?);",
    "deletePost": "DELETE FROM post WHERE id=?;",

    //query user
    "getUserByEmail": "SELECT * FROM user WHERE email=?;",
    "getAllUsers": "SELECT * FROM `user`;",
    "addUser": "INSERT INTO `user`(`name`, lastname, email, `password`) VALUES(?,?,?,?);",
    "deleteUser": "DELETE FROM user WHERE id=?;",

    //category query
    "getAllCategory": "SELECT * FROM category;",
    "addCategory": "INSERT INTO category(name) VALUES(?);",
    "deleteCategory": "DELETE FROM category WHERE id=?;",

    //query search
    "searchByPost": "SELECT id,title,SUBSTRING(body,1,100) as body FROM post WHERE MATCH (title,body) AGAINST (? IN NATURAL LANGUAGE MODE);",

}