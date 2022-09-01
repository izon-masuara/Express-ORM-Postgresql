# Express-ORM-Postgresql
Create REST FULL API using Express,Sequelize and Postgresql 

Pada percobaan kali ini kita masuk pada pembuatan RESTFULL API yang dimana melibatkan method GET,POST,PATCH,UPDATE dan DELETE.

REQUIRMENTS :

+ Nodejs
+ NPM
+ Sequelize
+ Postgresql
+ POSTMAN/REST CLIENT

Adapun langkah-langkah untuk menggunakan aplikasi ini anatara lain:

+ Lakukan clone
```
    git clone https://github.com/izon-masuara/Express-ORM-Postgresql.git
```
+ Instalasi
```
    npm install
```
+ Konfigurasi database

    Masuk ke folder config/config.json kemudian sesuaikan username password dan databse yang milik anda

+ Buat databse dan migrasi
```
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
```
+ Jalankan
```
    npm start
```

## Mencoba

Untuk mencoba aplikasi ini silahkan menggunakan POSTMAN atau REST CLIENT yang tersedia pada ektensi di vscode

### ENDPOINT

BaseUrl http://localhost:8000

+ GET
``` 
    Headers : None
    Params  : None
    Body    : None
```
+ POST
```
    Headers : None
    Params  : None
    Body    : name,age,address,phone_number
```
+ PATCH
```
    Headers : None
    Params  : id
    Body    : address,phone_number
```

+ PUT
```
    Headers : None
    Params  : id
    Body    : name,age,address,phone_number
```

+ DELETE
```
    Headers : None
    Params  : id
    Body    : None
```
