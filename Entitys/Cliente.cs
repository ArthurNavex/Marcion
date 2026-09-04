namespace Marcion.Entitys;

public class Cliente
{
    public int Id {get; set;}
    public required string Nome {get; set;} 
    public required string Telefone {get; set;} 
    public required string CPF {get; set;} 
    public string CEP {get; set;} = String.Empty;
    public string Cidade {get; set;} = String.Empty;
    public required string Endereco {get; set;}
}