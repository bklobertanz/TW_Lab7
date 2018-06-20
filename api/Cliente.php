<?php

/**
 *
 */
class Cliente
{
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

    //primera consulta por los datos del cliente
    $query  = "SELECT * FROM cliente WHERE Rut ='".$rut."'";
    $result = $conn->query($query);
    if (!$result) die ("Error al acceder a la base de datos :( ): " . $conn->error);
    $rows = $result->num_rows;
    for ($j = 0 ; $j < $rows ; ++$j)
    {
      $result->data_seek($j);
      $row = $result->fetch_array(MYSQLI_NUM);
    }

    $informacion_usuario = array($row[0],$row[1],$row[2],$row[3]);

    //segunda consulta por los hijos del cliente
    $query2  = "SELECT * FROM pedidos WHERE Rut ='".$rut."'";
    $result2 = $conn->query($query2);
    if (!$result) die ("Error al acceder a la base de datos :( ): " . $conn->error);
    $rows = $result2->num_rows;
    $arrayresponse = array();
    for ($j = 0 ; $j < $rows ; ++$j)
    {
      $result2->data_seek($j);
      $row = $result2->fetch_array(MYSQLI_NUM);
      array_push($arrayresponse,array($row[0],$row[1],$row[2],$row[3]));
    }


    $informacion_hijos = $arrayresponse;
    $array_respuesta = array($informacion_usuario,$informacion_hijos);

    return json_encode($array_respuesta);
  }

  public function crear($rut,$nombre,$apellido,$correo){
    $conn = new mysqli('localhost', 'root', '', 'Lab7');
    if ($conn->connect_error) die($conn->connect_error);
    $sentenciainsert = "INSERT INTO Cliente (Rut, Nombre,Apellido, Correo) VALUES ('".$rut."', '".$nombre."', '".$apellido."','".$correo."')";
    $response = $conn->query($sentenciainsert);
    if ($response){
      return 200;
    }
    else
    {
      return "Error: " . $sql . "<br>" . $conn->error;
    }
  }

  public function eliminar($rut){
    $conn = new mysqli('localhost', 'root', '', 'Lab7');
    if ($conn->connect_error) die($conn->connect_error);
    $sentenciadelete = "DELETE FROM cliente where Rut ='".$rut."'";
    $response = $conn->query($sentenciadelete);
    if ($response) {
      return 200;
    }
    else{
      return "Error: ".$sql . " --".$conn->error;
    }
  }

  public function modificar($rut,$nombre,$apellido,$correo){
    $conn = new mysqli('localhost', 'root', '', 'Lab7');
    if ($conn->connect_error) die($conn->connect_error);
    $sentenciaupdate = "UPDATE cliente SET Nombre ='".$nombre."', Apellido='".$apellido."' , Correo='".$correo."' WHERE Rut='".$rut."'";
    $response = $conn->query($sentenciaupdate);
    if ($response) {
      return 200;
    }
    else{
      return "Error: ".$sql . " --".$conn->error;
    }
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
  case 'crear':
      $result = $cliente->crear($_GET['rut'],$_GET['nombre'],$_GET['apellido'],$_GET['correo']);
      echo $result;
    break;
  case 'eliminar':
      $result = $cliente->eliminar($_GET['rut']);
      echo $result;
    break;
  case 'modificar':
      $result = $cliente->modificar($_GET['rut'],$_GET['nombre'],$_GET['apellido'],$_GET['correo']);
  default:
    break;
}

?>
