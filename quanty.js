document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    
    // Kosongkan form setelah pengiriman
    document.getElementById("contact-form").reset();
});
