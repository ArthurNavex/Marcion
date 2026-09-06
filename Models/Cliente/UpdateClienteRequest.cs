namespace Marcion.Models.Cliente;
using System.ComponentModel.DataAnnotations;

public class UpdateClienteRequest
{
    [StringLength(100, ErrorMessage = "O nome não pode conter mais de 100 caracteres")]
    public string Nome {get; set;} = String.Empty;

    [RegularExpression(
        @"^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$",
        ErrorMessage = "O telefone informado é inválido."
    )]
    public string Telefone {get; set;} = String.Empty;

    [RegularExpression(
        @"^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$",
        ErrorMessage = "O CPF informado é inválido."
    )]
    public string Cpf {get; set;} = String.Empty;

    [RegularExpression(
        @"^\d{5}-?\d{3}$",
        ErrorMessage = "O CEP informado é inválido."
    )]
    public string Cep { get; set; } = String.Empty;

    [EmailAddress(ErrorMessage = "O e-mail informado é inválido.")]
    [MaxLength(150)]
    public string Email { get; set; } = String.Empty;
    public string Cidade {get; set;} = String.Empty;
    public string Endereco {get; set;} = String.Empty;
}