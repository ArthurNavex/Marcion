namespace Marcion.Entitys;

public class Produto
{
    public int Id {get; set;}
    public required string Nome {get; set;}
    public decimal PrecoUnitario {get; set;}
    public int Estoque {get; set;}
}