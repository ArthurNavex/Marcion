namespace Marcion.Entitys;

public class Produto
{
    public int Id {get; set;}
    public required string Nome {get; set;}
    public string Categoria {get; set;} = String.Empty;
    public decimal PrecoUnitario {get; set;}
    public int Estoque {get; set;}
}