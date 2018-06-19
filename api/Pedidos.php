<?php
/**
 * 
 */
class Pedidos
{
	
	function __construct()
	{
	}

	public function obtenerLista($rut){
      $conn = new mysqli('localhost', 'root', '', 'Lab7');
      if ($conn->connect_error) die($conn->connect_error);
      $query  = "SELECT * FROM pedidos WHERE Rut ='".$rut."'";
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
      return json_encode($arrayresponse);
	}

	public function crear($rut,$total,$fecha){
 	$conn = new mysqli('localhost', 'root', '', 'Lab7');
    if ($conn->connect_error) die($conn->connect_error);
    $sentenciainsert = "INSERT INTO Pedidos (Rut, TotalPedido, FechaPedido) VALUES ('".$rut."', '".$total."', '".$fecha."')";
    $response = $conn->query($sentenciainsert);
    if ($response){
      return 200;
    }
    else
    {
      return "Error: " . $sql . "<br>" . $conn->error;
    }
	}
}
$pedidos = new Pedidos;
switch ($_GET['peticion']) {
  case 'obtenerLista':
      $result = $pedidos->obtenerLista($_GET['rut']);
      echo $result;
    break;
  case 'crear':
      $result = $pedidos->crear($_GET['rut'],$_GET['total'],$_GET['fecha']);
      echo $result;
    break;
  default:
    break;
}

?>