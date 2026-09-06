namespace Marcion.Entitys;

public class Cliente
{
    public int Id {get; set;}
    public required string Nome {get; set;} 
    public required string Telefone {get; set;} 
    public required string Cpf {get; set;} 
    public string Cep {get; set;} = String.Empty;
    public string Cidade {get; set;} = String.Empty;
    public string Endereco {get; set;} = String.Empty;
    public string Email {get; set;} = String.Empty;
}