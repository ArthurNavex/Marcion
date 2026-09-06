using Marcion.Models.Cliente;
using Marcion.Data;
using Marcion.Entitys;
using Microsoft.AspNetCore.Mvc;
using Marcion.Models.Produto;

namespace Marcion.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ClientesController : ControllerBase
{
    
    private readonly MarcionContext _context;

    public ClientesController (MarcionContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Post (CreateClienteRequest request)
    {
        var cliente = new Cliente
        {
            Nome = request.Nome,
            Telefone = request.Telefone,
            Cpf = request.Cpf,
            Cep = request.Cep,
            Cidade = request.Cidade,
            Email = request.Email,
            Endereco = request.Endereco
        };

        _context.Clientes.Add(cliente);
        _context.SaveChanges();

        var response = new ClienteResponse
        {
            Id = cliente.Id,
            Nome = cliente.Nome,
            Telefone = cliente.Telefone,
            Cpf = cliente.Cpf,
            Cep = cliente.Cep,
            Cidade = cliente.Cidade,
            Email = cliente.Email,
            Endereco = cliente.Endereco
        };

        return Ok(response);
    }

    [HttpGet]
    public IActionResult Get()
    {
        var clientes = _context.Clientes.ToList();
        var response = new List<ClienteResponse>();

        foreach(var cliente in clientes)
        {
            response.Add(new ClienteResponse
            {
                Id = cliente.Id,
                Nome = cliente.Nome,
                Telefone = cliente.Telefone,
                Cpf = cliente.Cpf,
                Cep = cliente.Cep,
                Cidade = cliente.Cidade,
                Email = cliente.Email,
                Endereco = cliente.Endereco
            });
        }

        return Ok(response);
    }

    [HttpGet ("{id}")]
    public IActionResult GetIndice(int id)
    {
        var cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);

        if (cliente == null)
        {
            return NotFound();
        }

        var response = new ClienteResponse
        {
            Id = cliente.Id,
            Nome = cliente.Nome,
            Telefone = cliente.Telefone,
            Cpf = cliente.Cpf,
            Cep = cliente.Cep,
            Cidade = cliente.Cidade,
            Email = cliente.Email,
            Endereco = cliente.Endereco
        };

        return Ok(response);
    }
    
    [HttpPut ("{id}")]
    public IActionResult Put(int id, UpdateClienteRequest request)
    {
        var cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);
        
        if (cliente == null)
        {
            return NotFound();
        }

        cliente.Nome = request.Nome;
        cliente.Telefone = request.Telefone;
        cliente.Cpf = request.Cpf;
        cliente.Cep = request.Cep;
        cliente.Cidade = request.Cidade;
        cliente.Email = request.Email;
        cliente.Endereco = request.Endereco;

        _context.SaveChanges();

        var response = new ClienteResponse
        {
            Id = cliente.Id,
            Nome = cliente.Nome,
            Telefone = cliente.Telefone,
            Cpf = cliente.Cpf,
            Cep = cliente.Cep,
            Cidade = cliente.Cidade,
            Email = cliente.Email,
            Endereco = cliente.Endereco
        };

        return Ok(response);
    }

    [HttpDelete ("{id}")]
    public IActionResult Delete(int id)
    {
        var cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == id);

        if (cliente == null)
        {
            return NotFound();
        }

        _context.Clientes.Remove(cliente);

        return NoContent();
    }
   
}