var daftarPemenang = [
    'sandhika', 'galih', 'doddy',
    'ferdiansyah', 'erik', 'nofa'
];

var tombol = document.getElementById('tombolPilih'),
    spinner = document.getElementById('spinner');

tombol.addEventListener('click', function () {
    spinner.style.display = 'block';
    setTimeout(pilihPemenang, 1000);
});

function pilihPemenang() {
    var max = daftarPemenang.length - 1,
        min = 0,
        indexPemenang = Math.floor(Math.random() * (max - min + 1) + min),
        ulPemenang = document.getElementById('pemenang'),
        liPemenang = document.createElement('li'),
        textPemenang = document.createTextNode(daftarPemenang[indexPemenang]);

    spinner.style.display = 'none';

    liPemenang.appendChild(textPemenang);
    liPemenang.setAttribute('class', 'goyang');
    ulPemenang.appendChild(liPemenang);

    daftarPemenang.splice(indexPemenang, 1);
}