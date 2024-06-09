$(window).on('load', function() {
    $(".loader-wrapper").fadeOut("slow");
});

// buat button kirim pas diklik
function showOutput() {
    // Mengubah gaya elemen <p> untuk menampilkan teks
    document.querySelector('.output p').style.display = 'block';
}