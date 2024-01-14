<?php
// Connessione al database
$db_host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'es_form';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);

if (!$conn) {
    die('Connessione fallita: ' . mysqli_connect_error());
}

// Verifica se l'email esiste già nel database
$email = $_POST['email'];
$sql = "SELECT * FROM utenti WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo '    
        <script>alert("Questa email è già stata registrata. Si prega di sceglierne un\'altra.");</script>
    ';
} else {
    // Inserimento dei dati nel database
    $nome=$_POST['nome'];
    $cognome=$_POST['cognome'];
    $password = $_POST['password'];
    $ntel = $_POST['ntel'];
    $data_nascita = $_POST['data_nascita'];

    $sql = "INSERT INTO utenti (nome, cognome, email, password, ntel, data_nascita) VALUES ('$nome','$cognome','$email', '$password', '$ntel', '$data_nascita')";

    if (mysqli_query($conn, $sql)) {
        echo '
            <script>alert("Registrazione effettuata con successo.");</script>
        ';

    } else {
        echo 'Errore durante la registrazione: ' . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>