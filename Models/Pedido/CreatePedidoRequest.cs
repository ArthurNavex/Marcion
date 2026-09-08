namespace Marcion.Models.Pedido;
using Marcion.Models.ItemPedido;
using System.ComponentModel.DataAnnotations;

public class CreatePedidoRequest
{
    [Required(ErrorMessage = "É nescessario informar de qual cliente é o pedido")]
    public int ClienteId {get; set;}
    public List<CreateItensPedidosRequest> Itens {get; set;} = new();
}