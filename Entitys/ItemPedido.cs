namespace Marcion.Entitys;

public class ItemPedido
{
    public int Id {get; set;}
    public Produto Produto {get; set;}
    public int ProdutoId {get; set;}
    public Pedido Pedido {get; set;}
    public int PedidioId {get; set;}
    public int Quantidade {get; set;}
    public decimal PrecoUnitario {get; set;}
    public decimal SubTotal {get; set;}
}