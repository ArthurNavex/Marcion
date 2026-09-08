namespace Marcion.Models.Pedido;
using Marcion.Models.ItemPedido;
using System.ComponentModel.DataAnnotations;

public class PedidoResponse
{
    public int Id { get; set; }

    public int ClienteId { get; set; }
    
    public string NomeCliente { get; set; } = string.Empty;

    public DateTime DataPedido { get; set; }

    public decimal PrecoTotal { get; set; }

    public List<ItemPedidoResponse> Itens { get; set; } = new();
}