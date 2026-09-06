namespace Marcion.Models.Produto;
using System.ComponentModel.DataAnnotations;

public class ClienteResponse
{
    public int Id {get; set;}
    public string Nome {get; set;} = String.Empty;
    public string Telefone {get; set;}  = String.Empty;
    public string Cpf {get; set;} = String.Empty;
    public string Cep {get; set;} = String.Empty;
    public string Cidade {get; set;} = String.Empty;
    public string Endereco {get; set;} = String.Empty;
    public string Email {get; set;} = String.Empty;
}