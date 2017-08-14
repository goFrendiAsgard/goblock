# Flowchart dan Bahasa Pemrograman

* Di antara bahasa pemrograman berikut, yang paling tua adalah:
    - PHP
    - Javascript
    - Python
    - Lua
    - C

* Sebuah flowchart selalu:
    - Mengandung __percabangan__ dan __perulangan__
    - Diawali dengan __start__ dan diakhiri dengan simbol __end__
    - Mengalir dari __kanan atas__ ke __kiri bawah__
    - Memiliki warna-warna khusus sebagai simbol logika
    - Berisi simbol lingkaran yang mewakili __proses__ dan simbol persegi panjang yang mewakili __entitas__

* Pada flowchart, sebuah input diwakili dengan simbol:
    - Lingkaran
    - Jajar genjang
    - Belah ketupat
    - Persegi panjang
    - Tanda panan 

* Pada flowchart, sebuah output diwakili dengan simbol:
    - Lingkaran
    - Jajar genjang
    - Belah ketupat
    - Persegi panjang
    - Tanda panan 

* Pada flowchart, sebuah kondisi diwakili dengan simbol:
    - Lingkaran
    - Jajar genjang
    - Belah ketupat
    - Persegi panjang
    - Tanda panan 

# Output dan Tipe Data 

* Di bawah ini yang bukan merupakan tipe data yang dikenali komputer adalah:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Nomor KTP sebaiknya disimpan dalam tipe data:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Saldo nasabah sebaiknya disimpan dalam tipe data:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Nama dosen sebaiknya disimpan dalam tipe data:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Status kelulusan mahasiswa sebaiknya disimpan dalam tipe data:
    - integer
    - float
    - double
    - image
    - string
    - boolean

# Operasi 

* Operasi penjumlahan pada dua angka integer akan memberikan nilai:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Hasil perhitungan 10 dibagi 7 akan memberikan nilai:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Hasil pembandingan dua angka  (misal: 4 lebih kecil dari 3) akan memberikan nilai:
    - integer
    - float
    - double
    - image
    - string
    - boolean

* Negasi dari (true OR false) adalah:
    - true
    - false
    - false OR true 
    - true AND true
    - tergantung dari inputan user
    - tak terdifinisi

* Penggabungan dua buah string akan memberikan nilai:
    - integer
    - float
    - double
    - image
    - string
    - boolean

# Input dan Variable

Perhatikan cuplikan kode program berikut:

```javacript
var a = parseInt(window.prompt('Nilai 1'));
var b = parseInt(window.prompt('Nilai 2'));
var c = a > b;
var d = a - b;
window.alert(d)
````

* Jika a bernilai 4 dan b bernilai 7, maka c bernilai:
    - true
    - false
    - -3
    - 3
    - 11 
    - -11

* Jika a bernilai 4 dan b bernilai 7, maka output program adalah:
    - true
    - false
    - -3
    - 3
    - 11 
    - -11

* Jika a dan b memiliki nilai yang sama maka:
    - nilai d adalah 0
    - nilai c adalah true
    - nilai c adalah 0
    - nilai d adalah true
    - program tidak bisa berjalan

* Jika a dan b memiliki nilai yang sama maka:
    - nilai d adalah true 
    - nilai c adalah false
    - nilai c adalah true
    - nilai d adalah false
    - program tidak bisa berjalan

* Agar c bernilai false, maka nilai a dan b masing-masing haruslah:
    - 1 dan 4
    - 2 dan 3
    - 4 dan 4
    - 5 dan 7
    - 3 dan 7

# Percabangan

Perhatikan cuplikan kode program berikut:

```javacript
var a = parseInt(window.prompt('Nilai 1'));
var b = parseInt(window.prompt('Nilai 2'));
if(a < b){
    window.alert(a+b);
}
else{
    window.alert(a-b);
}
window.alert(a*b);
````

* Operasi yang pasti akan dilakukan adalah
    - a + b 
    - a - b
    - a * b
    - a / b
    - a ^ b
    - a > b

* Jika a bernilai 7 dan b bernilai 9 maka output program adalah
    - 16 dan -2
    - -2 dan 16
    - 16 dan 63
    - 63 dan 16
    - -2 dan 63
    - 63 dan -2

* Jika a bernilai 9 dan b bernilai 7 maka output program adalah
    - 16 dan 2
    - 2 dan 16
    - 16 dan 63
    - 63 dan 16
    - 2 dan 63
    - 63 dan 2

* Jika a dan b memiliki nilai yang sama, maka output pertama program adalah
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5

* Jika a dan b memiliki nilai yang sama, maka:
    - Output yang kedua adalah dua kali lipat salah satu input
    - Output yang kedua akan sama dengan kuadrat dari salah satu input
    - Output yang kedua akan sama dengan output yang pertama 
    - Output yang kedua dan output yang pertama pasti berbeda
    - Output yang kedua pasti lebih besar dari output yang pertama

# Perulangan

Perhatikan cuplikan kode berikut

```javacript
var a = parseInt(window.prompt('Masukkan angka'));
var b = 2;
var c = 1;
while(b < a){
    window.alert(c);
    b = b+1;
}
````

* Jika nilai a adalah 2 maka nilai b adalah:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6

* Jika nilai a adalah 4 maka nilai b adalah:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6

* Jika nilai a adalah 2 maka nilai c adalah:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6

* Jika nilai a adalah 2 maka output terakhir program adalah:
    - 1
    - 2
    - 3
    - 4
    - 5
    - tidak ada output

* Jika nilai a adalah 4 maka output terakhir adalah:
    - 1
    - 2
    - 3
    - 4
    - 5
    - tidak ada output


