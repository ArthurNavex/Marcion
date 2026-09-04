namespace Marcion.Models.Produto;
using System.ComponentModel.DataAnnotations;

public class ProdutoResponse
{
    public int Id {get; set;}
    public string Nome {get; set;} = String.Empty;
    public decimal Preco {get; set;}
    public int Estoque {get; set;}
}