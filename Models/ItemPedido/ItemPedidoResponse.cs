namespace Marcion.Models.ItemPedido;
using System.ComponentModel.DataAnnotations;

public class ItemPedidoResponse
{
    public int Id { get; set; }

    public int ProdutoId { get; set; }

    public string NomeProduto { get; set; } = string.Empty;

    public int Quantidade { get; set; }

    public decimal PrecoUnitario { get; set; }

    public decimal SubTotal { get; set; }
}