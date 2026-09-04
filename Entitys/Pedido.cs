namespace Marcion.Entitys;

public class Pedido
{
    public int Id {get; set;}
    public int ClienteId {get; set;}
    public required Cliente Cliente {get; set;}
    public List<ItemPedido> Itens {get; set;} = new();
    public DateTime Data {get; set;}
    public decimal PrecoFinal {get; set;}
}