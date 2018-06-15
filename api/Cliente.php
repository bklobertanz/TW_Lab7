<?php

/**
 *
 */
class Cliente
{
  private $nombre;
  private $apellido;
  private $rut;
  private $correo;
  function __construct()
  {

  }

  public function obtenerLista()
  {
      $conn = new mysqli('localhost', 'root', '', 'Lab7');
      if ($conn->connect_error) die($conn->connect_error);
      $query  = "SELECT * FROM Cliente";
      $result = $conn->query($query);
      if (!$result) die ("Error al acceder a la base de datos :( ): " . $conn->error);

      $rows = $result->num_rows;
      $arrayresponse = array();
      for ($j = 0 ; $j < $rows ; ++$j)
      {
        $result->data_seek($j);
        $row = $result->fetch_array(MYSQLI_NUM);

        //echo "Rut: ".$row[0]."Nombre: ".$row[1]."Apellido: ".$row[2]."Correo: ".$row[3]."<br>";
        array_push($arrayresponse,array($row[0],$row[1],$row[2],$row[3]));
      }
      $result->close();
      $conn->close();
      return json_encode($arrayresponse);
  }

  public function ver($rut){
    $conn = new mysqli('localhost', 'root', '', 'Lab7');
    if ($conn->connect_error) die($conn->connect_error);
    $query  = "SELECT * FROM Cliente WHERE Rut =".$rut;
    $result = $conn->query($query);
    if (!$result) die ("Error al acceder a la base de datos :( ): " . $conn->error);
    $rows = $result->num_rows;
    for ($j = 0 ; $j < $rows ; ++$j)
    {
      $result->data_seek($j);
      $row = $result->fetch_array(MYSQLI_NUM);
    }
    return json_encode(array($row[0],$row[1],$row[2],$row[3]));
  }
}


$cliente = new Cliente;
switch ($_GET['peticion']) {
  case 'obtenerLista':
      $result = $cliente->obtenerLista();
      echo $result;
    break;
  case 'ver':
      $result = $cliente->ver($_GET['rut']);
      echo $result;
    break;
  default:
    break;
}

?>
