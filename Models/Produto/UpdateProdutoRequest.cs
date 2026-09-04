namespace Marcion.Models.Produto;
using System.ComponentModel.DataAnnotations;

public class UpdateProdutoRequest
{
    [Required(ErrorMessage = "Informe o nome do produto")]
    [StringLength(100, ErrorMessage = "O nome não pode conter mais de 100 caracteres")]
    public string Nome {get; set;} = String.Empty;
    public decimal Preco {get; set;}
    public int Estoque {get; set;}
}