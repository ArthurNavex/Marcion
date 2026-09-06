using Marcion.Data;
using Marcion.Entitys;
using Marcion.Models.Produto;
using Microsoft.AspNetCore.Mvc;

namespace Marcion.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ProdutoController : ControllerBase
{
    private readonly MarcionContext _context;

    public ProdutoController (MarcionContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Post (CreateProdutoRequest request)
    {
        var ProdutoCriado = new Produto
        {
            Nome = request.Nome,
            PrecoUnitario = request.Preco,
            Estoque = request.Estoque
        };

        _context.Produtos.Add(ProdutoCriado);
        _context.SaveChanges();

        var response = new ProdutoResponse
        {
            Id = ProdutoCriado.Id,
            Nome = ProdutoCriado.Nome,
            Preco = ProdutoCriado.PrecoUnitario,
            Estoque = ProdutoCriado.Estoque
        };
        
        return Ok(response);
    }

    [HttpGet]
    public IActionResult Get()
    {
        var produtos = _context.Produtos.ToList();
        var response = new List<ProdutoResponse>();

        if(produtos == null)
        {
            return NotFound();
        }

        foreach (var produto in produtos)
        {
            response.Add(new ProdutoResponse
            {
                Id = produto.Id,
                Nome = produto.Nome,
                Preco = produto.PrecoUnitario,
                Estoque = produto.Estoque 
            });
        };

        return Ok(response);
    }

    [HttpGet ("{id}")]
    public IActionResult GetIndice (int id)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Id == id);

        if (produto == null)
        {
            return NotFound();
        }

        var response = new ProdutoResponse
        {
            Id = produto.Id,
            Nome = produto.Nome,
            Preco = produto.PrecoUnitario,
            Estoque = produto.Estoque
        };
        
        return Ok(response);
    }

    [HttpPut ("{id}")]
    public IActionResult Put (int id, UpdateProdutoRequest request)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Id == id);

        if(produto == null)
        {
            return NotFound();
        }

        produto.Nome = request.Nome;
        produto.PrecoUnitario = request.Preco;
        produto.Estoque = request.Estoque;

        _context.SaveChanges();

        var response = new ProdutoResponse
        {
            Id = produto.Id,
            Nome = produto.Nome,
            Preco = produto.PrecoUnitario,
            Estoque = produto.Estoque
        };

        return Ok(response);
    }

    [HttpDelete ("{id}")]
    public IActionResult Delete (int id)
    {
        var produto = _context.Produtos.FirstOrDefault(produto => produto.Id == id);

        if(produto == null)
        {
            return NotFound();
        }

        _context.Remove(produto);
        _context.SaveChanges();

        return NoContent();
    }
}