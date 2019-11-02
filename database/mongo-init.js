
db.auth('changeThis', 'changeThis')
db = db.getSiblingDB('mydb')
db.createUser(
        {
            user: "mydb-user",
            pwd: "1234",
            roles: [
                {
                    role: "root",
                    db: "admin"
                }
            ]
        }
);