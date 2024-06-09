function showOutput() {
    // Setelah 1 detik, sembunyikan loader dan tampilkan output
    setTimeout(function() {
        // $(".output .loader-wrapper").fadeOut("fast");
        document.querySelector('.container-output .output p').style.display = 'block';
    }, 500); // 1000ms = 1 detik
}
