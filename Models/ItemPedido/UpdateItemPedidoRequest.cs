namespace Marcion.Models.ItemPedido;
using System.ComponentModel.DataAnnotations;

public class UpdateItensPedidosRequest
{
    [Required(ErrorMessage = "É preciso escolher um produto")]
    public required int ProdutoId {get; set;}
    [Required(ErrorMessage = "É nescessario informar a quantidade de produtos")]
    public required int Quantidade {get; set;}
}